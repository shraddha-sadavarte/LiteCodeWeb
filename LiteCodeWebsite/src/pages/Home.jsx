import { motion } from "framer-motion";
import { CheckCircle, Workflow, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImg from "../assets/hero.svg";
import team from "../assets/team.svg";
import { useNavigate } from "react-router-dom";
import ClientsSection from "../components/ClientsSection";
import StatsSection from "../components/StatsSection";
import ChatBot from "../components/Chatbot";
import TestimonialsSection from "../components/TestimonialsSection";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Litecode Software Pvt. Ltd. | Best Software Development Company in India</title>
        <meta name="title" content="Litecode Software Pvt. Ltd. | Best Software Development Company in India" />
        <meta name="description" content="Litecode Software Pvt. Ltd. is a leading software development company in India offering web development, mobile app development, blockchain solutions, AI-powered platforms, and cloud services. Transform your business with innovative digital solutions." />
        <meta name="keywords" content="software company India, software development company, web development, mobile app development, blockchain development, AI solutions, cloud services, DevOps solutions, Litecode Software, IT company India" />
        <meta name="author" content="Litecode Software Pvt. Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.litecodesoftware.com/" />
        <meta property="og:title" content="Litecode Software Pvt. Ltd. | Best Software Development Company in India" />
        <meta property="og:description" content="Leading software development company providing cutting-edge web, mobile, blockchain, AI, and cloud solutions. 10+ years of experience, 500+ successful projects delivered." />
        <meta property="og:image" content="https://www.litecodesoftware.com/images/og-image.jpg" />
        <meta property="og:image:alt" content="Litecode Software - Digital Solutions for Modern Business" />
        <meta property="og:site_name" content="Litecode Software" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.litecodesoftware.com/" />
        <meta name="twitter:title" content="Litecode Software Pvt. Ltd. | Software Development Company" />
        <meta name="twitter:description" content="Expert software development services for web, mobile, blockchain, AI, and cloud. Transform your business with innovative technology solutions." />
        <meta name="twitter:image" content="https://www.litecodesoftware.com/images/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.litecodesoftware.com/" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Your City, India" />
        
        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            "name": "Litecode Software Pvt. Ltd.",
            "url": "https://www.litecodesoftware.com",
            "logo": "https://www.litecodesoftware.com/logo.png",
            "description": "Litecode Software is a leading software development company in India offering web, mobile, blockchain, AI, and cloud solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "email": "info@litecodesoftware.com",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/litecode-software",
              "https://twitter.com/litecodesoftware",
              "https://www.facebook.com/litecodesoftware"
            ],
            "foundingDate": "2014",
            "numberOfEmployees": "50-100",
            "areaServed": "India, USA, UK, UAE"
          })}
        </script>
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Software Development Services",
            "description": "Comprehensive software development services including web applications, mobile apps, blockchain systems, AI platforms, and cloud solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Litecode Software Pvt. Ltd."
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Our Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Web Applications"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Blockchain-based Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI-powered Platforms"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud & DevOps Solutions"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Structured Data for Work Process */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Software Development Process",
            "description": "Our structured approach to delivering high-quality software solutions",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Requirement Analysis",
                "text": "Understanding your business needs and project requirements"
              },
              {
                "@type": "HowToStep",
                "name": "UI / UX Design",
                "text": "Creating intuitive and engaging user experiences"
              },
              {
                "@type": "HowToStep",
                "name": "Development",
                "text": "Building scalable and robust solutions"
              },
              {
                "@type": "HowToStep",
                "name": "Testing & Deployment",
                "text": "Ensuring quality and seamless deployment"
              }
            ]
          })}
        </script>
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.litecodesoftware.com/"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building Digital Solutions for the Modern World
            </h1>

            <p className="mt-6 text-indigo-100 max-w-xl">
              We design and develop scalable, secure and high-performance digital
              products using modern technologies.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition"
                aria-label="Get started with Litecode Software"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/services")}
                className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition"
                aria-label="Learn more about our services"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.img
            src={heroImg}
            alt="Litecode Software - Digital Solutions for Modern Business"
            className="mx-auto max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </section>

      {/* ================= WORK PROCESS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading */}
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Work Process
            </h2>
            <p className="mt-4 text-gray-600">
              A structured and transparent approach to deliver high-quality solutions.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Requirement Analysis",
              "UI / UX Design",
              "Development",
              "Testing & Deployment",
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover="hover"
                className="group relative p-6 rounded-2xl bg-gray-50 text-center overflow-hidden"
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-bold text-gray-300">
                  0{i + 1}
                </span>

                {/* Glow layer */}
                <div className="absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-sky-500/0 to-orange-500/0
                    group-hover:from-sky-500/20 group-hover:to-orange-500/20
                    transition-all duration-500"
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    variants={{ hover: { scale: 1.15, rotate: 2 } }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center mb-4"
                  >
                    <Workflow
                      size={34}
                      className="text-indigo-600 group-hover:text-sky-600 transition-colors duration-300"
                    />
                  </motion.div>

                  <h3 className="font-semibold text-lg text-gray-900">
                    {step}
                  </h3>
                </div>

                {/* Shadow */}
                <div className="absolute inset-0 rounded-2xl
                    shadow-md group-hover:shadow-2xl
                    transition-shadow duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>

            <p className="text-gray-600 mb-6">
              We combine innovation, expertise and reliability to deliver
              exceptional digital experiences.
            </p>

            <ul className="space-y-4 text-gray-700">
              {[
                "Modern & future-ready technology stack",
                "Experienced developers & designers",
                "Secure, scalable and maintainable solutions",
                "Client-focused development approach",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-600 mt-1" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.img
            src={team}
            alt="Litecode Software Team - Experienced developers and designers"
            className="mx-auto max-w-md"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </section>
      
      <TestimonialsSection />

      {/* ================= OUR SOLUTIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
            <p className="mt-4 text-gray-600">
              End-to-end digital solutions designed for diverse business needs.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Enterprise Web Applications",
              "Blockchain-based Systems",
              "AI-powered Platforms",
              "Cloud & DevOps Solutions",
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover="hover"
                className="group relative p-6 rounded-2xl bg-gray-50 text-center overflow-hidden"
              >
                {/* Gradient glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-indigo-500/0 to-purple-500/0
                    group-hover:from-indigo-500/15 group-hover:to-purple-500/15
                    transition-all duration-500
                  "
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    variants={{
                      hover: { scale: 1.15, rotate: 3 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center mb-4"
                  >
                    <Lightbulb
                      size={28}
                      className="text-indigo-600 group-hover:text-purple-600 transition-colors duration-300"
                    />
                  </motion.div>

                  <h3 className="font-semibold text-gray-900">
                    {solution}
                  </h3>
                </div>

                {/* Shadow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    shadow-md group-hover:shadow-2xl
                    transition-shadow duration-500
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <StatsSection />
      <ChatBot />
    </>
  );
}

export default Home;