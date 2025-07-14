import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions, ideas, or need a hand? Reach out to our team anytime. We're here to help your business get the reviews it truly deserves. Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-card/50 rounded-xl p-8 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">We'll get back to you quickly</p>
              </div>
            </div>
            <Button 
              asChild 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="mailto:gooweby@gmail.com">
                gooweby@gmail.com
              </a>
            </Button>
          </div>

          <div className="bg-card/50 rounded-xl p-8 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground">Chat with us directly</p>
              </div>
            </div>
            <Button 
              asChild 
              variant="outline"
              className="w-full border-green-500/20 hover:bg-green-500/10"
            >
              <a 
                href="https://wa.me/916306066510" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                +91 6306066510
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Prefer to explore on your own? Check out our{" "}
            <Link to="/" className="text-primary hover:underline">
              features
            </Link>
            {" "}or{" "}
            <Link to="/pricing" className="text-primary hover:underline">
              pricing plans
            </Link>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;