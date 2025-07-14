
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

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
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 group cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
            <img 
              src="/lovable-uploads/d609236f-80e3-4b18-9d2e-0235b9267791.png" 
              alt="TrustQR Logo" 
              className="w-10 h-10 rounded-xl"
            />
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
            onClick={() => navigate('/pricing')}
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
          {user ? (
            <>
              <Button 
                onClick={() => navigate('/app')}
                variant="outline" 
                className="font-semibold px-4 rounded-lg hover:scale-105 transform transition-all duration-300"
              >
                Dashboard
              </Button>
              <Button 
                onClick={handleSignOut}
                variant="outline" 
                className="font-semibold px-4 rounded-lg hover:scale-105 transform transition-all duration-300"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => window.open('https://trustqr-webapp.vercel.app/', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 transform"
            >
              Launch My Link
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
