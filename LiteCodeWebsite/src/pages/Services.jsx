import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { Code, Blocks, BrainCircuit, Cloud, Smartphone, ShieldCheck } from 'lucide-react'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
            <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-indigo-600">Services</span>
                </h2>
                <p className="mt-4 text-gray-600">
                We deliver modern, secure and scalable digital solutions tailored to your business needs.
                </p>
            </div>


        {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                icon={Code}
                title="Web Development"
                description="High-performance websites and web apps using React, Next.js and modern frameworks."
                />
                <ServiceCard
                icon={Blocks}
                title="Blockchain Solutions"
                description="Decentralized apps, smart contracts and secure identity systems using blockchain."
                />
                <ServiceCard
                icon={BrainCircuit}
                title="AI & Machine Learning"
                description="Intelligent systems, face recognition and predictive analytics powered by AI."
                />
                <ServiceCard
                icon={Cloud}
                title="Cloud & DevOps"
                description="Scalable cloud infrastructure, deployment automation and DevOps solutions."
                />
                <ServiceCard
                icon={ShieldCheck}
                title="Cyber Security"
                description="Security audits, authentication systems and data protection solutions."
                />
                <ServiceCard
                icon={Smartphone}
                title="Mobile App Development"
                description="Cross-platform mobile apps with modern UI/UX and smooth performance."
                />
            </div>
        </div>
    </section>
  )
}

export default Services
