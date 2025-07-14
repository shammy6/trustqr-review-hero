import { Button } from "@/components/ui/button";

const PricingFAQ = () => {
  return (
    <div className="text-center mt-24">
      <div className="animate-fade-in-up animation-delay-800">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Questions? We're here to help.
        </h2>
        <p className="text-muted-foreground mb-8">
          Contact our team for personalized guidance on choosing the right plan.
        </p>
        <a href="/contact">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Contact Sales
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PricingFAQ;