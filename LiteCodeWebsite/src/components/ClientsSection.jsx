import achev from "../assets/images/achev.jpg";
import cntech from "../assets/images/cntech.jpg";
import reliance from "../assets/images/reliance.jpg";
import hvc from "../assets/images/hvc-logo.png";
import opalForce from "../assets/images/OpalForce-logo.png";
import yantra from "../assets/images/yantra-logo.png";
import rotary from "../assets/images/rotary-logo.jpg";
import { motion } from "framer-motion";

const logos = [
  { src: achev, name: "Achev" },
  { src: cntech, name: "CNTech" },
  { src: reliance, name: "Reliance" },
  { src: hvc, name: "HVC" },
  { src: opalForce, name: "OpalForce" },
  { src: yantra, name: "Yantra" },
  { src: rotary, name: "Rotary" },
];

const ClientsSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 mb-4">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Our Esteemed Clients
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We collaborate with organizations that trust LiteCode for digital excellence.
          </p>
        </div>

        {/* LOGO GRID */}
        <div
          className="
            grid
            gap-10
            [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]
          "
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
                group
                flex
                items-center
                justify-center
                bg-white
                rounded-2xl
                h-48
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* LOGO HOLDER */}
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="
                    max-h-20
                    max-w-[70%]
                    object-contain
                    grayscale
                    brightness-90
                    saturate-0
                    group-hover:grayscale-0
                    group-hover:saturate-100
                    group-hover:brightness-100
                    transition-all
                    duration-300
                    ease-out
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
