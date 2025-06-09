
import { QrCode, ArrowUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Smart QR Code Feedback",
      description: "Place QR codes anywhere customers visit. They scan, share feedback instantly, and you control what happens next.",
      highlight: "Instant collection"
    },
    {
      icon: <span className="text-2xl">🤖</span>,
      title: "AI Sentiment Detection",
      description: "Our AI reads between the lines, detecting unhappy customers before they leave negative reviews online.",
      highlight: "Early warning system"
    },
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Smart Review Routing",
      description: "Happy customers get redirected to leave 5-star reviews on Google. Unhappy ones get private attention from you.",
      highlight: "Protects your reputation"
    },
    {
      icon: <span className="text-2xl">⚡</span>,
      title: "Instant Problem Alerts",
      description: "Get notified immediately when unhappy feedback comes in, so you can fix issues before they go public.",
      highlight: "Real-time protection"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Turn Every Customer Into a{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative inline-block hover-underline-green">5-Star Review</span>
            </h2>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              TrustQR intelligently routes feedback to protect your reputation and boost positive reviews.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className={`group animate-fade-in-up animation-delay-${(index + 3) * 200}`}>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30 hover:bg-card/70 min-h-[280px] flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up animation-delay-800">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-10 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              How TrustQR Protects Your Business
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-foreground font-medium">Customer scans QR</span>
              </div>
              <span className="hidden lg:block text-primary">→</span>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-foreground font-medium">AI analyzes sentiment</span>
              </div>
              <span className="hidden lg:block text-primary">→</span>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-foreground font-medium">Happy = Google review</span>
              </div>
              <span className="hidden lg:block text-primary">→</span>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span className="text-foreground font-medium">Unhappy = Private alert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
