import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Chargers Listed" },
  { value: "50,000+", label: "Happy Drivers" },
  { value: "100+", label: "Cities Covered" },
  { value: "$2M+", label: "Earned by Hosts" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
