
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
            <span className="mr-2">🛡️</span>
            Reputation Protection for Local Businesses
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Don't Let One Bad Review{" "}
            <span className="text-primary">Ruin Your Reputation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            TrustQR turns customer feedback into 5-star reviews — with QR codes, AI sentiment detection, and instant alerts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto">
              Start Free – No Credit Card Needed
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Setup in 5 minutes
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              No technical skills needed
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
