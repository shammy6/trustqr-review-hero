import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePlanAccess } from '@/hooks/usePlanAccess';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Crown, Star } from 'lucide-react';

const App = () => {
  const navigate = useNavigate();
  const { userPlan, loading, hasPremiumAccess, hasVipAccess } = usePlanAccess();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/auth');
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const getPlanIcon = () => {
    if (hasVipAccess()) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (hasPremiumAccess()) return <Star className="w-5 h-5 text-primary" />;
    return <CheckCircle className="w-5 h-5 text-muted-foreground" />;
  };

  const getPlanBadgeVariant = () => {
    if (hasVipAccess()) return "default";
    if (hasPremiumAccess()) return "secondary";
    return "outline";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to TrustQR Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your reputation and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan Status Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getPlanIcon()}
                Current Plan
              </CardTitle>
              <CardDescription>Your subscription details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Plan:</span>
                <Badge variant={getPlanBadgeVariant()}>
                  {userPlan?.planTier?.toUpperCase() || 'FREE'}
                </Badge>
              </div>
              
              {userPlan?.planTier !== 'free' && userPlan?.daysRemaining !== null && (
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <div className="flex items-center gap-2">
                    {userPlan?.isActive ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm">
                      {userPlan?.isActive 
                        ? `${userPlan?.daysRemaining} days left` 
                        : 'Expired'
                      }
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <Button 
                  onClick={() => navigate('/pricing')} 
                  variant="outline" 
                  className="w-full"
                >
                  {userPlan?.planTier === 'free' ? 'Upgrade Plan' : 'Manage Plan'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features Access */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Available Features</CardTitle>
              <CardDescription>Features available with your current plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureItem 
                  name="QR Code Generation" 
                  available={true}
                  description="Create unlimited QR codes"
                />
                <FeatureItem 
                  name="Basic Analytics" 
                  available={true}
                  description="View basic performance metrics"
                />
                <FeatureItem 
                  name="Email Alerts" 
                  available={true}
                  description="Get notified of new reviews"
                />
                <FeatureItem 
                  name="Advanced Analytics" 
                  available={hasPremiumAccess()}
                  description="Detailed insights and reports"
                  premium
                />
                <FeatureItem 
                  name="Custom Branding" 
                  available={hasVipAccess()}
                  description="White-label solutions"
                  vip
                />
                <FeatureItem 
                  name="Priority Support" 
                  available={hasPremiumAccess()}
                  description="Fast customer support"
                  premium
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

interface FeatureItemProps {
  name: string;
  description: string;
  available: boolean;
  premium?: boolean;
  vip?: boolean;
}

const FeatureItem = ({ name, description, available, premium, vip }: FeatureItemProps) => {
  return (
    <div className={`p-4 rounded-lg border ${available ? 'bg-card' : 'bg-muted/50'}`}>
      <div className="flex items-start justify-between mb-2">
        <h4 className={`font-medium ${available ? 'text-foreground' : 'text-muted-foreground'}`}>
          {name}
        </h4>
        <div className="flex items-center gap-2">
          {vip && <Crown className="w-4 h-4 text-yellow-500" />}
          {premium && !vip && <Star className="w-4 h-4 text-primary" />}
          {available ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <XCircle className="w-4 h-4 text-red-500" />
          )}
        </div>
      </div>
      <p className={`text-sm ${available ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
        {description}
      </p>
    </div>
  );
};

export default App;