import achev from "../assets/images/achev.jpg";
import cntech from "../assets/images/cntech.jpg";
import reliance from "../assets/images/reliance.jpg";
import hvc from "../assets/images/hvc-logo.png";
import opalForce from "../assets/images/OpalForce-logo.png";
import yantra from "../assets/images/yantra-logo.png";
import { motion } from "framer-motion";

const logos = [
  { src: achev, name: "Achev" },
  { src: cntech, name: "CNTech" },
  { src: reliance, name: "Reliance" },
  { src: hvc, name: "HVC" },
  { src: opalForce, name: "OpalForce" },
  { src: yantra, name: "Yantra" },
];

const ClientsSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 mb-4">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Our Esteemed Clients
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We proudly collaborate with forward-thinking organizations that trust
            LiteCode to power their digital transformation.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="group flex items-center justify-center bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <img
                src={logo.src}
                alt={`${logo.name} Logo`}
                className="h-20 object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
