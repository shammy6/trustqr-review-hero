
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Take Control of Your Reputation Today
          </h2>
          
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Don't let another bad review catch you off guard. Start protecting your business reputation in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto bg-background text-foreground hover:bg-background/90">
              Get Started with TrustQR
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">14 Days</div>
              <div className="opacity-90">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5 Minutes</div>
              <div className="opacity-90">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Protection</div>
            </div>
          </div>

          <div className="mt-12 text-center opacity-90">
            <p className="text-sm">
              Join 500+ businesses already protecting their reputation with TrustQR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
