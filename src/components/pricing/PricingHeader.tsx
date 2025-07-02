import { Switch } from "@/components/ui/switch";

interface PricingHeaderProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PricingHeader = ({ isAnnual, setIsAnnual }: PricingHeaderProps) => {
  return (
    <div className="text-center mb-16 px-4">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Simple, Transparent{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover-underline-green cursor-pointer">
            Pricing
          </span>
        </h1>
      </div>
      
      <div className="animate-fade-in-up animation-delay-200">
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto px-4">
          Choose the perfect plan to protect and grow your business reputation
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="animate-fade-in-up animation-delay-300">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 px-4">
          <span className={`text-base sm:text-lg font-semibold transition-all duration-300 ${!isAnnual ? 'text-primary scale-105' : 'text-muted-foreground'}`}>
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
            <span className={`text-base sm:text-lg font-semibold transition-all duration-300 ${isAnnual ? 'text-primary scale-105' : 'text-muted-foreground'}`}>
              Annual Billing (Save 20%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;