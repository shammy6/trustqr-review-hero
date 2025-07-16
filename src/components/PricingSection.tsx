import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Premium",
      price: "₹399",
      period: "/month",
      subtext: "No GST • 7-day refund • Cancel anytime • Instant access",
      buttonText: "Upgrade to Premium",
      buttonLink: "https://rzp.io/l/premium-trustqr",
      features: [
        "Everything in Free Plan",
        "AI-powered smart alert system",
        "Advanced feedback analytics & insights",
        "Priority customer support",
        "Custom response templates",
        "Detailed performance reports"
      ],
      popular: false
    },
    {
      name: "VIP",
      price: "₹999",
      period: "/month",
      subtext: "No GST • 7-day refund • Cancel anytime • Priority access",
      buttonText: "Start VIP Experience",
      buttonLink: "https://rzp.io/l/vip-trustqr",
      features: [
        "Everything in Premium Plan",
        "Full custom branding (QR codes + feedback pages)",
        "Comprehensive monthly performance reports",
        "Dedicated account manager & consultation",
        "Priority feature integrations",
        "Advanced analytics dashboard with AI insights",
        "White-label solution options"
      ],
      popular: true
    }
  ];

  const handlePlanClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/50 to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
              Simple, Transparent{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Choose the perfect plan to protect and grow your business reputation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-fade-in-up relative rounded-2xl border transition-all duration-300 hover:scale-105 transform hover:shadow-2xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-primary/30 shadow-2xl hover:shadow-primary/25'
                  : 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-card/70 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl lg:text-5xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 px-2 leading-relaxed">
                      {plan.subtext}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    onClick={() => handlePlanClick(plan.buttonLink)}
                    className={`w-full mb-8 h-12 text-base transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl' 
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl'
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
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="hover:scale-105 transition-all duration-300"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;