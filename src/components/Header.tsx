
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { QrCode } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
            <QrCode className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">TrustQR</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            FAQ
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://app.trustqr.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 transform">
              Launch My Link
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
