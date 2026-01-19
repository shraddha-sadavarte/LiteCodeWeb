// src/components/StatsSection.jsx
import {
  Briefcase,
  Smile,
  Users,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "55+",
    label: "Completed Projects",
    icon: Briefcase,
  },
  {
    value: "25+",
    label: "Happy Clients",
    icon: Smile,
  },
  {
    value: "10+",
    label: "Expert Employees",
    icon: Users,
  },
  {
    value: "5+",
    label: "Awards Won",
    icon: Award,
  },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />

      {/* Decorative blur shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-white/90 group-hover:text-white transition" />
                </div>

                <p className="text-4xl lg:text-5xl font-extrabold">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm tracking-wide uppercase text-white/80">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
