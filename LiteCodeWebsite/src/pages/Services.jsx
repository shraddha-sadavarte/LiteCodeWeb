import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";
import {
  Code,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Server,
  Layers,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppFloat from "../components/WhatsAppFloat";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Service metadata for structured data
const serviceMetadata = {
  "Web Development": {
    description: "Custom web applications, e-commerce platforms, CMS solutions, and responsive websites built with modern frameworks.",
    keywords: "web development, web application development, e-commerce development, custom website development"
  },
  "Mobile App Development": {
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    keywords: "mobile app development, iOS development, Android development, cross-platform apps"
  },
  "Cloud Solutions": {
    description: "Cloud migration, AWS/Azure/GCP services, serverless architecture, and scalable cloud infrastructure.",
    keywords: "cloud solutions, AWS services, Azure services, cloud migration, serverless architecture"
  },
  "AI & ML Solutions": {
    description: "Machine learning models, predictive analytics, computer vision, NLP, and intelligent automation solutions.",
    keywords: "AI solutions, machine learning, predictive analytics, computer vision, NLP"
  },
  "Cyber Security": {
    description: "Security audits, penetration testing, threat monitoring, data protection, and compliance solutions.",
    keywords: "cyber security, security audits, penetration testing, data protection, compliance"
  },
  "DevOps Services": {
    description: "CI/CD pipelines, infrastructure automation, containerization, and monitoring solutions for efficient deployments.",
    keywords: "DevOps services, CI/CD pipelines, infrastructure automation, containerization, Kubernetes"
  },
  "Quality Assurance": {
    description: "Automated and manual testing, performance testing, security testing, and quality assurance solutions.",
    keywords: "quality assurance, software testing, automated testing, performance testing, QA services"
  },
  "IT Consulting": {
    description: "Technology strategy, digital transformation, architecture consulting, and IT advisory services.",
    keywords: "IT consulting, technology strategy, digital transformation, architecture consulting"
  }
};

const Services = () => {
  // Get all service titles and descriptions for meta tags
  const serviceTitles = services.map(s => s.title).join(", ");
  const serviceDescriptions = services.map(s => s.description).join(" ");
  
  // Get unique keywords from all services
  const allKeywords = [...new Set(
    services.flatMap(s => {
      const meta = serviceMetadata[s.title];
      return meta ? meta.keywords.split(", ") : [];
    })
  )].join(", ");

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Our Services | Web, Mobile, AI, Cloud & More - Litecode Software</title>
        <meta name="title" content="Our Services | Web, Mobile, AI, Cloud & More - Litecode Software" />
        <meta name="description" content={`Litecode Software offers comprehensive digital solutions including ${serviceTitles}. ${serviceDescriptions.substring(0, 150)}... Transform your business with our expert software development services.`} />
        <meta name="keywords" content={`software development services, ${allKeywords}, IT services India, digital transformation, software company services, Litecode Software services`} />
        <meta name="author" content="Litecode Software Pvt. Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.litecodesoftware.com/services" />
        <meta property="og:title" content="Our Services | Web, Mobile, AI, Cloud & More - Litecode Software" />
        <meta property="og:description" content={`Explore our comprehensive range of software development services including ${serviceTitles}. Expert solutions for web, mobile, cloud, AI, and more.`} />
        <meta property="og:image" content="https://www.litecodesoftware.com/images/services-og-image.jpg" />
        <meta property="og:image:alt" content="Litecode Software Services - Digital Solutions" />
        <meta property="og:site_name" content="Litecode Software" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.litecodesoftware.com/services" />
        <meta name="twitter:title" content="Our Services | Software Development Solutions - Litecode" />
        <meta name="twitter:description" content={`Expert software development services: ${serviceTitles}. Transform your business with cutting-edge technology solutions.`} />
        <meta name="twitter:image" content="https://www.litecodesoftware.com/images/services-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.litecodesoftware.com/services" />
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Software Development Services",
            "description": "Comprehensive software development and IT services including web, mobile, cloud, AI, and security solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Litecode Software Pvt. Ltd.",
              "url": "https://www.litecodesoftware.com",
              "logo": "https://www.litecodesoftware.com/logo.png"
            },
            "areaServed": "India, USA, UK, UAE, Singapore",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Our Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "url": `https://www.litecodesoftware.com/services/${service.slug}`
                }
              }))
            }
          })}
        </script>
        
        {/* ItemList Schema for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Litecode Software Services",
            "description": "Complete list of software development and IT services offered by Litecode Software",
            "numberOfItems": services.length,
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "url": `https://www.litecodesoftware.com/services/${service.slug}`
            }))
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.litecodesoftware.com/services"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What software development services does Litecode offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `We offer ${serviceTitles} services. Our expert team delivers custom solutions tailored to your business needs.`
                }
              },
              {
                "@type": "Question",
                "name": "What technologies do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use modern technologies including React, Node.js, Python, Java, React Native, Flutter, AWS, Azure, GCP, and cutting-edge AI/ML frameworks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide custom software development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in custom software development tailored to your specific business requirements, ensuring scalability, security, and performance."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get a quote for my project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact us through our website or call us to discuss your project requirements. We'll provide a detailed quote and timeline for your project."
                }
              }
            ]
          })}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Litecode Software Pvt. Ltd.",
            "url": "https://www.litecodesoftware.com",
            "description": "Leading software development company offering web, mobile, cloud, AI, and security solutions.",
            "knowsAbout": services.map(s => s.title),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services",
              "itemListElement": services.map(s => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title
                }
              }))
            }
          })}
        </script>
        
        {/* Additional SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Your City, India" />
      </Helmet>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h1 className="text-4xl font-bold text-gray-900">
              Our <span className="text-indigo-600">Services</span>
            </h1>
            <p className="mt-4 text-gray-600">
              We deliver modern, secure and scalable digital solutions tailored to your business needs. 
              Whether you're a startup or enterprise, we help drive growth through technology and innovation.
            </p>
            <p className="mt-2 text-sm text-indigo-600">
              {services.length} specialized services to transform your business
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  slug={service.slug}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WhatsAppFloat />
      </section>
    </>
  );
};

export default Services;