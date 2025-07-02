import { pricingPlans } from "@/data/pricingPlans";
import PricingCard from "./PricingCard";

interface PricingCardsProps {
  isAnnual: boolean;
}

const PricingCards = ({ isAnnual }: PricingCardsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
      {pricingPlans.map((plan, index) => (
        <PricingCard
          key={plan.name}
          plan={plan}
          isAnnual={isAnnual}
          index={index}
        />
      ))}
    </div>
  );
};

export default PricingCards;