
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does TrustQR work?",
      answer: "TrustQR creates smart QR codes that route happy customers to review platforms while directing unhappy customers to private feedback forms. This helps you address issues before they become public reviews."
    },
    {
      question: "What review platforms do you support?",
      answer: "We support Google pages, Facebook pages, websites, and other custom URLs. You choose where your QR leads."
    },
    {
      question: "How quickly will I receive alerts?",
      answer: "Alerts are sent instantly via email, SMS, or push notifications as soon as a customer submits negative feedback, allowing you to respond and resolve issues in real-time."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! You can start with our free 14-day trial and see results immediately. Our pricing is transparent with no hidden costs or long-term contracts required."
    },
    {
      question: "Can I track my results?",
      answer: "Absolutely! Our dashboard provides detailed analytics showing review conversion rates, sentiment analysis, response times, and overall reputation improvement metrics."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-card/10 to-background relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about protecting your reputation
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`animate-fade-in-up animation-delay-${300 + index * 100} bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-300 group"
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
