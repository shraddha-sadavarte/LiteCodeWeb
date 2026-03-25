import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import VissionMission from '../components/VissionMission';
import ClientsSection from '../components/ClientsSection';
import StatsSection from '../components/StatsSection';
import WhatsAppFloat from '../components/WhatsAppFloat';

const About = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Litecode Software | Leading Software Development Company in India</title>
        <meta name="title" content="About Litecode Software | Leading Software Development Company in India" />
        <meta name="description" content="Learn about Litecode Software Pvt. Ltd., a leading software development company in India. Discover our mission, vision, values, and journey since 2014. We deliver innovative web, mobile, blockchain, AI, and cloud solutions." />
        <meta name="keywords" content="about Litecode Software, software company India, software development company, IT company India, software company profile, Litecode Software history, software development journey" />
        <meta name="author" content="Litecode Software Pvt. Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.litecodesoftware.com/about" />
        <meta property="og:title" content="About Litecode Software | Leading Software Development Company in India" />
        <meta property="og:description" content="Discover Litecode Software's journey as a trusted software development partner. We deliver innovative digital solutions with a focus on quality, security, and scalability." />
        <meta property="og:image" content="https://www.litecodesoftware.com/images/about-og-image.jpg" />
        <meta property="og:image:alt" content="Litecode Software - About Our Company" />
        <meta property="og:site_name" content="Litecode Software" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.litecodesoftware.com/about" />
        <meta name="twitter:title" content="About Litecode Software | Software Development Company India" />
        <meta name="twitter:description" content="Learn about our mission, vision, and journey as a leading software development company delivering innovative digital solutions." />
        <meta name="twitter:image" content="https://www.litecodesoftware.com/images/about-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.litecodesoftware.com/about" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Your City, India" />
        
        {/* Structured Data for About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Litecode Software",
            "description": "Litecode Software is a leading software development company in India, delivering innovative web, mobile, blockchain, AI, and cloud solutions since 2014.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Litecode Software Pvt. Ltd.",
              "foundingDate": "2014",
              "foundingLocation": "India",
              "numberOfEmployees": "50-100",
              "description": "We are a team of passionate developers, designers, and innovators dedicated to building cutting-edge digital solutions for businesses worldwide.",
              "mission": "To empower businesses with innovative, scalable, and secure technology solutions that drive growth and success.",
              "vision": "To become a globally recognized software development company known for excellence, innovation, and client satisfaction.",
              "values": [
                "Innovation",
                "Quality",
                "Integrity",
                "Client Success",
                "Continuous Learning"
              ],
              "areaServed": "India, USA, UK, UAE, Singapore",
              "sameAs": [
                "https://www.linkedin.com/company/litecode-software",
                "https://twitter.com/litecodesoftware",
                "https://www.facebook.com/litecodesoftware"
              ]
            }
          })}
        </script>
        
        {/* Structured Data for Mission & Vision */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Our Mission & Vision",
            "description": "Litecode Software's commitment to delivering excellence through innovation and client-focused solutions.",
            "creator": {
              "@type": "Organization",
              "name": "Litecode Software Pvt. Ltd."
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Mission",
                "description": "To empower businesses with innovative, scalable, and secure technology solutions that drive growth and success."
              },
              {
                "@type": "Thing",
                "name": "Vision",
                "description": "To become a globally recognized software development company known for excellence, innovation, and client satisfaction."
              }
            ]
          })}
        </script>
        
        {/* Structured Data for Team/Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Litecode Software Pvt. Ltd.",
            "alternateName": "Litecode Software",
            "url": "https://www.litecodesoftware.com",
            "logo": "https://www.litecodesoftware.com/logo.png",
            "email": "info@ilitecode.com",
            "telephone": "+91-8127288127",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Narhe, Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8127288127",
              "contactType": "customer service",
              "email": "info@ilitecode.com"
            },
            "knowsAbout": [
              "Web Development",
              "Mobile App Development",
              "Blockchain Development",
              "AI Development",
              "Cloud Solutions",
              "DevOps Services"
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://www.litecodesoftware.com/about"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema for Common Questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "When was Litecode Software founded?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Litecode Software was founded in 2014 with a vision to deliver innovative software solutions to businesses worldwide."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Litecode Software offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer web development, mobile app development, blockchain solutions, AI-powered platforms, and cloud & DevOps services."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Litecode Software located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our headquarters is located in Your City, India, and we serve clients globally across USA, UK, UAE, Singapore, and India."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve diverse industries including healthcare, finance, education, e-commerce, real estate, manufacturing, and more."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <main className="pt-24">
        <AboutSection />
        <VissionMission />
        <ClientsSection />
        <StatsSection />
        <WhatsAppFloat />
      </main>
    </>
  );
};

export default About;