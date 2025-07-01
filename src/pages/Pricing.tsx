
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for small businesses starting their reputation journey",
      features: [
        "Unlimited QR feedback links",
        "Basic email feedback alerts",
        "Standard email support",
        "Web dashboard access",
        "Basic analytics insights"
      ],
      buttonText: "Start Free Today",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "VIP",
      price: { monthly: 999, annual: 9592 },
      description: "Enterprise-grade solution for businesses serious about reputation management",
      features: [
        "Everything in Premium Plan",
        "Full custom branding (QR codes + feedback pages)",
        "Comprehensive monthly performance reports",
        "Dedicated account manager & consultation",
        "Priority feature integrations",
        "Advanced analytics dashboard with AI insights",
        "White-label solution options"
      ],
      buttonText: "Start VIP Experience",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Premium",
      price: { monthly: 399, annual: 3192 },
      description: "Advanced tools for growing businesses focused on reputation excellence",
      features: [
        "Everything in Free Plan",
        "AI-powered smart alert system",
        "Advanced feedback analytics & insights",
        "Priority customer support",
        "Custom response templates",
        "Detailed performance reports"
      ],
      buttonText: "Upgrade to Premium",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background transition-all duration-500 ease-in-out">
      <Header />
      
      <main className="py-20 lg:py-32 animate-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple, Transparent{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Choose the perfect plan to protect and grow your business reputation
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="animate-fade-in-up animation-delay-300">
              <div className="flex items-center justify-center gap-6 mb-16">
                <span className={`text-lg font-semibold transition-all duration-300 ${!isAnnual ? 'text-primary scale-105' : 'text-muted-foreground'}`}>
                  Monthly Billing
                </span>
                <div className="relative">
                  <Switch
                    checked={isAnnual}
                    onCheckedChange={setIsAnnual}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-semibold transition-all duration-300 ${isAnnual ? 'text-primary scale-105' : 'text-muted-foreground'}`}>
                    Yearly Billing
                  </span>
                  {isAnnual && (
                    <span className="text-sm bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full font-bold animate-pulse">
                      Save 20%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`animate-fade-in-up relative rounded-2xl border transition-all duration-300 hover:scale-105 transform ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-primary/30 shadow-2xl hover:shadow-primary/25'
                    : 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-card/70'
                }`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-foreground">
                          {plan.price.monthly === 0 
                            ? 'Free' 
                            : formatPrice(isAnnual ? plan.price.annual : plan.price.monthly)
                          }
                        </span>
                        {plan.price.monthly > 0 && (
                          <span className="text-muted-foreground ml-2">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        )}
                      </div>
                      {isAnnual && plan.price.monthly > 0 && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {formatPrice(plan.price.monthly)} billed monthly
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={plan.buttonVariant}
                      size="lg"
                      className={`w-full mb-8 h-12 ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl' 
                          : ''
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center mt-24">
            <div className="animate-fade-in-up animation-delay-800">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Questions? We're here to help.
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact our team for personalized guidance on choosing the right plan.
              </p>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
