import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
            <div>
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Company Logo" className="w-10 h-10 rounded bg-indigo-300 p-1" />
                    <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">LiteCode</span>
                </Link>
                <p className="mt-4 text-sm text-gray-400">
                Building modern, scalable and secure digital solutions using cutting‑edge technologies.
                </p>
            </div>


        {/* Quick Links */}
        <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><Link to="/" className='hover:text-white'>Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
        </div>


        {/* Services */}
        <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
                <li>
                    <Link to="/services" className="hover:text-white transition">
                        Web Development
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-white transition">
                        Blockchain Solutions
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-white transition">
                        AI & ML
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-white transition">
                        Cloud & DevOps
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-white transition">
                        Cyber Security
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-white transition">
                        Mobile App Development
                    </Link>
                </li>
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
