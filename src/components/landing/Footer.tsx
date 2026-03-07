import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-display font-bold text-secondary-foreground">
                VoltGo
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
              The peer-to-peer EV charging marketplace connecting drivers with charger owners.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">Find Chargers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">List Your Charger</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} VoltGo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
