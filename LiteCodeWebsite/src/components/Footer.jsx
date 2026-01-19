import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
            <div>
                <h2 className="text-2xl font-bold text-white">LiteCode</h2>
                <p className="mt-4 text-sm text-gray-400">
                Building modern, scalable and secure digital solutions using cutting‑edge technologies.
                </p>
            </div>


        {/* Quick Links */}
        <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
        </div>


        {/* Services */}
        <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
                <li>Web Development</li>
                <li>Blockchain Solutions</li>
                <li>AI & ML Models</li>
                <li>Cloud Consulting</li>
            </ul>
        </div>


        {/* Contact */}
        <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: info@ilitecode.com</p>
            <p className="text-sm mt-2">India</p>
        </div>
        </div>


        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} iLiteCode. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
