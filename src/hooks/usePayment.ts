import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { createPayment } from '@/lib/razorpay';
import { toast } from '@/hooks/use-toast';

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const processPayment = async (planTier: 'free' | 'premium' | 'vip', amount: number, isAnnual: boolean = false) => {
    if (planTier === 'free') {
      // For free plan, redirect directly to app
      navigate('/app');
      return;
    }

    setIsProcessing(true);

    try {
      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to continue with payment.",
          variant: "destructive",
        });
        return;
      }

      // Get user profile for prefill data
      const { data: profile } = await supabase
        .from('users')
        .select('name, email')
        .eq('id', user.id)
        .single();

      await createPayment({
        amount,
        planTier: planTier as 'premium' | 'vip',
        userEmail: profile?.email || user.email || '',
        userName: profile?.name || '',
        onSuccess: async (response: any) => {
          try {
            // Calculate expiry date based on billing period
            const expiryDate = new Date();
            if (isAnnual) {
              expiryDate.setDate(expiryDate.getDate() + 365);
            } else {
              expiryDate.setDate(expiryDate.getDate() + 30);
            }

            // Update user's plan in database
            const { error: updateError } = await supabase
              .from('users')
              .update({
                plan_tier: planTier,
                plan_expiry: expiryDate.toISOString(),
              })
              .eq('id', user.id);

            if (updateError) {
              throw updateError;
            }

            toast({
              title: "Payment successful! Your plan is now active.",
              description: `Welcome to TrustQR ${planTier.toUpperCase()} plan!`,
            });

            // Redirect to app
            navigate('/app');
          } catch (error) {
            console.error('Error updating user plan:', error);
            toast({
              title: "Payment processed, but there was an issue",
              description: "Please contact support if your plan doesn't activate.",
              variant: "destructive",
            });
          }
        },
        onFailure: (error: any) => {
          console.error('Payment failed:', error);
          toast({
            title: "Payment Failed",
            description: error.description || "Something went wrong. Please try again.",
            variant: "destructive",
          });
        },
      });
    } catch (error) {
      console.error('Payment initialization error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to initialize payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return { processPayment, isProcessing };
};