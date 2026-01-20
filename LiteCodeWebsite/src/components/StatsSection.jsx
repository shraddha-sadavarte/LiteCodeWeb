import { Briefcase, Smile, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "55+", label: "Completed Projects", icon: Briefcase },
  { value: "25+", label: "Happy Clients", icon: Smile },
  { value: "10+", label: "Expert Employees", icon: Users },
  { value: "5+", label: "Awards Won", icon: Award },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-14">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />

      {/* Decorative blur shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-9 h-9 text-white" />
                </div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-xs tracking-wide uppercase text-white/90">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
