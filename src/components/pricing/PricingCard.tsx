import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingPlan } from "@/data/pricingPlans";
import { formatPrice } from "@/utils/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  index: number;
}

const PricingCard = ({ plan, isAnnual, index }: PricingCardProps) => {
  return (
    <div
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
  );
};

export default PricingCard;