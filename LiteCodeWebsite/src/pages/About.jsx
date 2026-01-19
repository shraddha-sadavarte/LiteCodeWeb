import React from 'react'
import AboutSection from '../components/AboutSection';
import VissionMission from '../components/VissionMission';
import ClientsSection from '../components/ClientsSection';
import StatsSection from '../components/StatsSection';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
        <main className="pt-24">
            <Navbar />
      <AboutSection />
      <VissionMission />
      <ClientsSection />
      <StatsSection />
      <WhatsAppFloat />
      <Footer/>
    </main>
  )
}

export default About