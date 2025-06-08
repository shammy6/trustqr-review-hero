
import { QrCode, ArrowUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Code Feedback Collector",
      description: "Place QR codes anywhere customers visit. They scan, share feedback instantly, and you control what happens next.",
      highlight: "Instant sharing"
    },
    {
      icon: <span className="text-2xl">🤖</span>,
      title: "AI Sentiment Analysis",
      description: "Our AI reads between the lines, detecting unhappy customers before they leave negative reviews online.",
      highlight: "Detect bad vibes early"
    },
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Google Review Redirect",
      description: "Happy customers? We automatically redirect them to leave 5-star reviews on Google, boosting your online reputation.",
      highlight: "For happy customers"
    },
    {
      icon: <span className="text-2xl">⚡</span>,
      title: "Instant Email Alerts",
      description: "Get notified immediately when unhappy feedback comes in, so you can fix issues before they go public.",
      highlight: "Before things go public"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Turn Every Customer Into a{" "}
            <span className="text-primary">5-Star Review</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TrustQR intelligently routes feedback to protect your reputation and boost positive reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Smart Way It Works
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Customer scans QR</span>
              </div>
              <span className="hidden md:block">→</span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>AI analyzes sentiment</span>
              </div>
              <span className="hidden md:block">→</span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Happy = Google review</span>
              </div>
              <span className="hidden md:block">→</span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Unhappy = Private alert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
