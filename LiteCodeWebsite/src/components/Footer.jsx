import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const services = [
  {
    title: "Web Development",
    desc: "Modern, fast and scalable web applications using React & Next.js.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with smooth UX for iOS & Android.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, CI/CD pipelines and scalable deployments.",
  },
  {
    title: "AI & Machine Learning",
    desc: "Smart automation, analytics and AI-powered solutions.",
  },
  {
    title: "Cyber Security",
    desc: "Security audits, data protection and compliance services.",
  },
  {
    title: "Backend & API Development",
    desc: "Secure, high-performance backend systems & APIs.",
  },
  {
    title: "UI / UX Design",
    desc: "Clean, user-focused interfaces that boost engagement.",
  },
  {
    title: "Custom Software Solutions",
    desc: "Tailored software built around your business goals.",
  },
];

const Footer = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Company Logo"
              className="w-12 h-10 object-contain"
            />
            <span className="text-2xl font-extrabold tracking-wide">
              <span className="text-sky-500">Lite</span>
              <span className="text-orange-500">Code</span>
            </span>
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Building modern, scalable and secure digital solutions using
            cutting-edge technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="relative">
          <h3 className="text-white font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-sm">
            {services.map((service, index) => (
              <li
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => navigate("/services")}
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(null)}
                className="cursor-pointer hover:text-white transition focus:outline-none focus:text-white"
              >
                {service.title}
              </li>
            ))}
          </ul>

          {/* Hover Description */}
          <AnimatePresence>
            {activeService && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-full top-10 ml-6 w-64 bg-gray-800 text-gray-200 text-sm p-4 rounded-xl shadow-xl hidden lg:block"
              >
                <h4 className="text-white font-semibold mb-2">
                  {activeService.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {activeService.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: info@ilitecode.com</p>
          <p className="text-sm mt-2">India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} iLiteCode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
