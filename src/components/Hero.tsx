import { Button } from "@/components/ui/button";
import { QrCode, Shield, Zap } from "lucide-react";
const Hero = () => {
  return <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Don't Let One Bad Review{" "}
              <span style={{
              fontSize: 'clamp(1.25rem, 2vw, 2rem)'
            }} className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative inline-block hover-underline-green px-0 whitespace-nowrap pb-1 text-5xl">
                Ruin Your Reputation
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              TrustQR helps you turn feedback into <span className="relative inline-block text-primary font-semibold hover-underline-green">
                5-star reviews
              </span> with QR codes, AI alerts, and smart redirects.
            </p>
          </div>

          <div className="animate-scale-in animation-delay-400">
            <a href="https://app.trustqr.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-xl px-12 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Get My Free QR Code
              </Button>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="animate-fade-in-up animation-delay-600">
              <div className="flex flex-col items-center text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/70 group">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <QrCode className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">2 Minutes Setup</h3>
                <p className="text-muted-foreground leading-relaxed">Quick and easy QR code generation. Start protecting your reputation instantly.</p>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-700">
              <div className="flex flex-col items-center text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/70 group">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">24/7 Protection</h3>
                <p className="text-muted-foreground leading-relaxed">Continuous monitoring and smart routing of customer feedback around the clock.</p>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-800">
              <div className="flex flex-col items-center text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/70 group">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Instant Alerts Before Things Go Public</h3>
                <p className="text-muted-foreground leading-relaxed">Get notified immediately when issues arise, so you can fix them before they become public reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;