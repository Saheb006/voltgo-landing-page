import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              VoltGo
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#owners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              For Owners
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Sign Up
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
                How It Works
              </a>
              <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#owners" className="block text-sm text-muted-foreground hover:text-foreground">
                For Owners
              </a>
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">Log In</Button>
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground">Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
