import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";

const services = [
  { title: "Web Development", desc: "Modern, fast and scalable web applications using React & Next.js." },
  { title: "Mobile App Development", desc: "Cross-platform mobile apps with smooth UX for iOS & Android." },
  { title: "Cloud & DevOps", desc: "Cloud infrastructure, CI/CD pipelines and scalable deployments." },
  { title: "AI & Machine Learning", desc: "Smart automation, analytics and AI-powered solutions." },
  { title: "Cyber Security", desc: "Security audits, data protection and compliance services." },
  { title: "Backend & API Development", desc: "Secure, high-performance backend systems & APIs." },
  { title: "UI / UX Design", desc: "Clean, user-focused interfaces that boost engagement." },
  { title: "Custom Software Solutions", desc: "Tailored software built around your business goals." },
];

const Footer = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* ================= CTA STRIP ================= */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative bg-gray-900 text-gray-300 overflow-hidden"
      >
        {/* Moving gradient line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-[1px] w-full bg-white/20"
        />
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold">
              Ready to build something amazing?
            </h3>
            <p className="mt-1 text-white/90 text-sm">
              Let’s turn your idea into a scalable digital product.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-3 py-2 rounded-lg shadow-md text-sm"
          >
            Get Free Consultation <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.section>

      {/* ================= MAIN FOOTER ================= */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-gray-900 text-gray-300 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="LiteCode Logo" className="w-10 h-8 object-contain" />
              <span className="text-xl font-extrabold">
                <span className="text-sky-500">Lite</span>
                <span className="text-orange-500">Code</span>
              </span>
            </Link>

            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
              Building modern, scalable and secure digital solutions using cutting-edge technologies.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="p-1.5 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
                >
                  <Icon size={16} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm">Quick Links</h3>
            <div className="w-6 h-[2px] bg-blue-500 my-2" />
            <ul className="space-y-1 text-xs">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="relative">
            <h3 className="text-white font-semibold text-sm">Services</h3>
            <div className="w-6 h-[2px] bg-blue-500 my-2" />
            <ul className="space-y-1 text-xs">
              {services.map((service, i) => (
                <li
                    key={i}
                    onMouseEnter={(e) => {
                        setActiveService(service);
                        setTooltipPos({
                        x: e.clientX,
                        y: e.clientY,
                        });
                    }}
                    onMouseLeave={() => setActiveService(null)}
                    onMouseMove={(e) =>
                        setTooltipPos({
                        x: e.clientX,
                        y: e.clientY,
                        })
                    }
                    onClick={() => navigate("/services")}
                    className="cursor-pointer hover:text-white transition-all hover:translate-x-1"
                    >
                    {service.title}
                </li>

              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm">Contact</h3>
            <div className="w-6 h-[2px] bg-blue-500 my-2" />
            <div className="space-y-2 text-xs">
              <a href="mailto:info@ilitecode.com" className="flex items-center gap-2 hover:text-white transition">
                <span className="p-1.5 rounded-full bg-indigo-500/15">
                  <Mail size={14} className="text-indigo-500" />
                </span>
                info@ilitecode.com
              </a>

              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-white transition">
                <span className="p-1.5 rounded-full bg-green-500/15">
                  <Phone size={14} className="text-green-500" />
                </span>
                +91 12345 67890
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <span className="p-1.5 rounded-full bg-orange-500/15">
                  <MapPin size={14} className="text-orange-500" />
                </span>
                Narhe, Pune, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        {/* Floating service tooltip */}
        <AnimatePresence>
            {activeService && (
                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                    top: tooltipPos.y + 15,
                    left: tooltipPos.x + 15,
                }}
                className="fixed z-50 w-72 bg-gray-800 text-xs p-3 rounded-lg shadow-xl pointer-events-none"
                >
                <h4 className="text-white font-semibold mb-1">
                    {activeService.title}
                </h4>
                <p className="text-gray-400">
                    {activeService.desc}
                </p>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Bottom */}
        <div className="border-t border-gray-800 text-center py-3 text-xs text-gray-500">
          © {new Date().getFullYear()} iLiteCode. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
