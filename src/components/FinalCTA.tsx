import { Button } from "@/components/ui/button";
import { useClickTracking } from "@/hooks/useClickTracking";

const FinalCTA = () => {
  const { trackClick } = useClickTracking();

  const handleCTAClick = async () => {
    // Track the click event before redirecting
    await trackClick('TrustQR', 'cta_click');
    
    // Redirect to the app
    window.open('https://app.trustqr.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
              Take Control of Your Reputation Today
            </h2>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Don't let another bad review catch you off guard. Start protecting your business reputation in minutes.
            </p>
          </div>

          <div className="animate-scale-in animation-delay-400 mb-16">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              onClick={handleCTAClick}
            >
              Launch My Link
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 transform">
                <div className="text-4xl font-bold text-primary mb-2">14 Days</div>
                <div className="text-muted-foreground text-lg">Free Trial</div>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-700">
              <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 transform">
                <div className="text-4xl font-bold text-primary mb-2">2 Minutes</div>
                <div className="text-muted-foreground text-lg">Setup Time</div>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-800">
              <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 transform">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground text-lg">Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
