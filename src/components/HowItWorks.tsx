
import { QrCode, MousePointer, Bell, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Generate Your QR Code",
      description: "Create a custom QR code in minutes that links to your smart feedback system.",
      step: "01"
    },
    {
      icon: MousePointer,
      title: "Customers Scan & Review",
      description: "Happy customers go directly to review platforms. Unhappy ones give private feedback first.",
      step: "02"
    },
    {
      icon: Bell,
      title: "Get Instant Alerts",
      description: "Receive immediate notifications when issues arise, before they become public reviews.",
      step: "03"
    },
    {
      icon: Star,
      title: "Turn Issues Into 5-Stars",
      description: "Resolve problems quickly and guide satisfied customers to leave positive reviews.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-background to-card/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              How It Works
            </h2>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Turn every customer interaction into an opportunity for positive reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className={`animate-fade-in-up animation-delay-${400 + index * 200} group`}
            >
              <div className="relative p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/50 hover:scale-105 transform">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors group-hover:scale-110 transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
