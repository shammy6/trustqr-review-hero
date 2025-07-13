
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <footer className="bg-card/20 border-t border-border/50 py-16 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center space-x-3 mb-6 group cursor-pointer"
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
            <p className="text-muted-foreground mb-6 max-w-md text-lg leading-relaxed">
              Strengthen your reputation with intelligent QR feedback, real-time alerts, and AI-powered sentiment insights.
            </p>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>© 2025 TrustQR. All rights reserved.</div>
              <div className="flex items-center space-x-2">
                <Link to="/terms" className="hover:text-primary transition-colors duration-300">Terms</Link>
                <span>•</span>
                <Link to="/privacy" className="hover:text-primary transition-colors duration-300">Privacy</Link>
                <span>•</span>
                <Link to="/refunds" className="hover:text-primary transition-colors duration-300">Refunds</Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Product</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors duration-300">Features</button></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors duration-300">Pricing</Link></li>
              <li><a href="https://trustqr-webapp.vercel.app/" className="hover:text-primary transition-colors duration-300">Launch My Link</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors duration-300">FAQ</button></li>
              <li><a href="mailto:gooweby@gmail.com" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors duration-300">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors duration-300">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
