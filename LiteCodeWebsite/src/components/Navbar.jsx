import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';


function Navbar() {
const [open, setOpen] = useState(false);


return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo + company name */}
            <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Company Logo" className="w-10 h-10 rounded bg-indigo-300 p-1" />
                <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">LiteCode</span>
            </Link>


            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
                <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
                <Link to="/services" className="hover:text-indigo-600 transition">Services</Link>
                <Link to="/contact" className="px-5 py-2 rounded-full bg-indigo-600 text-white">Contact</Link>
            </nav>


            {/* Mobile Menu Button */}
            <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800"
            >
            {open ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>


        {/* Mobile Menu */}
        {open && (
        <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
                <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
                <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
                <Link to="/services" className="hover:text-indigo-600 transition">Services</Link>
                <Link to="/contact" className="px-5 py-2 rounded-full bg-indigo-600 text-white">Contact</Link>
            </nav>
        </div>
        )}
    </header>
);
}

export default Navbar;