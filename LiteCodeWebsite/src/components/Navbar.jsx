import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


function Navbar() {
const [open, setOpen] = useState(false);


return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-extrabold text-indigo-600">
            Lite<span className="text-gray-900">Code</span>
            </div>


{/* Desktop Menu */}
<nav className="hidden md:flex space-x-8 font-medium text-gray-700">
<a href="/home" className="hover:text-indigo-600 transition">Home</a>
<a href="/about" className="hover:text-indigo-600 transition">About</a>
<a href="/services" className="hover:text-indigo-600 transition">Services</a>
<a href="/tech" className="hover:text-indigo-600 transition">Technology</a>
<a href="/contact" className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">Contact</a>
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