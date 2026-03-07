import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

const OwnerCTA = () => {
  return (
    <section id="owners" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-secondary overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-foreground mb-6">
                Own a Charger?{" "}
                <span className="text-primary">Start Earning.</span>
              </h2>
              <p className="text-secondary-foreground/70 text-lg mb-8 leading-relaxed">
                List your home or business charger on VoltGo and earn passive income
                while helping the EV community grow. You set the price, availability,
                and rules.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 text-base"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: TrendingUp, title: "Average $300/mo", desc: "earned by active hosts" },
                { icon: Clock, title: "5-minute setup", desc: "list your charger in no time" },
                { icon: Zap, title: "Full control", desc: "set your own rates & hours" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-secondary-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-foreground">{item.title}</p>
                    <p className="text-sm text-secondary-foreground/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerCTA;
