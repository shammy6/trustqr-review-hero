import { Switch } from "@/components/ui/switch";

interface PricingHeaderProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PricingHeader = ({ isAnnual, setIsAnnual }: PricingHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Simple, Transparent{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover-underline-green">
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
              Annual Billing
            </span>
            {isAnnual && (
              <span className="text-sm bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full font-bold animate-pulse">
                (Save 20%)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;