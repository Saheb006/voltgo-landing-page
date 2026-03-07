import { Button } from "@/components/ui/button";
import { Search, Plus, Zap, MapPin, Battery } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              The EV Charging Marketplace
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Find EV Chargers{" "}
              <span className="text-primary">Near You</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Connect with charger owners in your area. Book a slot, plug in, and go — 
              or earn money by sharing your own charger with the community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 text-base px-8"
              >
                <Search className="w-5 h-5 mr-2" />
                Find a Charger
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted text-base px-8"
              >
                <Plus className="w-5 h-5 mr-2" />
                List Your Charger
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                2,400+ chargers live
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Free to join
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-secondary flex items-center justify-center">
                <Zap className="w-24 h-24 text-primary" strokeWidth={1.5} />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 bg-card rounded-xl shadow-xl border border-border p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">3 chargers</p>
                  <p className="text-xs text-muted-foreground">within 500m</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-0 bg-card rounded-xl shadow-xl border border-border p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Battery className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Fast Charge</p>
                  <p className="text-xs text-muted-foreground">Available now</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
