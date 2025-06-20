
import { QrCode } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/20 border-t border-border/50 py-16 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">TrustQR</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-lg leading-relaxed">
              Protect your business reputation with smart QR codes, AI sentiment analysis, and instant alerts.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 TrustQR. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Product</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="https://app.trustqr.com" className="hover:text-primary transition-colors duration-300">Launch My Link</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#faq" className="hover:text-primary transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
