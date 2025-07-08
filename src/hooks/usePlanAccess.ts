import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface UserPlan {
  planTier: 'free' | 'premium' | 'vip';
  planExpiry: string | null;
  isActive: boolean;
  daysRemaining: number | null;
}

export const usePlanAccess = () => {
  const [userPlan, setUserPlan] = useState<UserPlan | null>(null);
  const [loading, setLoading] = useState(true);

  const checkPlanAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setUserPlan(null);
        setLoading(false);
        return;
      }

      const { data: profile, error } = await supabase
        .from('users')
        .select('plan_tier, plan_expiry')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user plan:', error);
        setUserPlan(null);
        setLoading(false);
        return;
      }

      const planTier = (profile?.plan_tier as 'free' | 'premium' | 'vip') || 'free';
      const planExpiry = profile?.plan_expiry;
      
      let isActive = true;
      let daysRemaining: number | null = null;

      if (planTier !== 'free' && planExpiry) {
        const expiryDate = new Date(planExpiry);
        const now = new Date();
        const timeDiff = expiryDate.getTime() - now.getTime();
        daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
        isActive = daysRemaining > 0;
      }

      setUserPlan({
        planTier,
        planExpiry,
        isActive,
        daysRemaining,
      });
    } catch (error) {
      console.error('Error checking plan access:', error);
      setUserPlan(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkPlanAccess();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkPlanAccess();
    });

    return () => subscription.unsubscribe();
  }, []);

  const hasPremiumAccess = () => {
    return userPlan?.isActive && (userPlan.planTier === 'premium' || userPlan.planTier === 'vip');
  };

  const hasVipAccess = () => {
    return userPlan?.isActive && userPlan.planTier === 'vip';
  };

  return {
    userPlan,
    loading,
    hasPremiumAccess,
    hasVipAccess,
    refreshPlan: checkPlanAccess,
  };
};