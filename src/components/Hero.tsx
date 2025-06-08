
import { Button } from "@/components/ui/button";
import { QrCode, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Don't Let One Bad Review{" "}
            <span className="text-primary">Ruin Your Reputation</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            TrustQR turns customer feedback into 5-star reviews — with QR codes, AI sentiment detection, and instant alerts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Get My Free QR Code
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <QrCode className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart QR Codes</h3>
              <p className="text-muted-foreground">Collect feedback before it goes public</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Protection</h3>
              <p className="text-muted-foreground">Detect negative sentiment instantly</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Instant Alerts</h3>
              <p className="text-muted-foreground">Fix issues before they become reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
