
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingCards from "@/components/pricing/PricingCards";
import PricingFAQ from "@/components/pricing/PricingFAQ";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background transition-all duration-500 ease-in-out">
      <Header />
      
      <main className="py-20 lg:py-32 animate-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingHeader isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          <PricingCards isAnnual={isAnnual} />
          <PricingFAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
