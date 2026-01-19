import { motion } from "framer-motion";
import { CheckCircle, Workflow, Users, Lightbulb } from "lucide-react";
import heroImg from '../assets/hero.svg';
import team from '../assets/team.svg';
import {useNavigate} from "react-router-dom";
import ClientsSection from "../components/ClientsSection";
import StatsSection from "../components/StatsSection";
import WhatsAppFloat from "../components/WhatsAppFloat";

function Home() {

    const navigate = useNavigate();

return (
<>
    {/* HERO / COVER SECTION */}
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Building Digital Solutions for the Modern World
                </h1>
                <p className="mt-6 text-indigo-100 max-w-xl">
                We design and develop scalable, secure and high-performance digital
                products using modern technologies.
                </p>
                <div className="mt-8 flex gap-4">
                <button onClick={()=> navigate("/contact")} className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition">
                Get Started
                </button>
                <button onClick={()=>navigate("/services")} className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
                Learn More
                </button>
            </div>
        </div>
            {/* Hero Image */}
            <img
            src={heroImg}
            alt="Digital Solutions"
            className="mx-auto max-w-md"
            />
        </div>
    </section>

    {/* WORK PROCESS */}
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-gray-900">Our Work Process</h2>
                <p className="mt-4 text-gray-600">
                A structured and transparent approach to deliver high-quality solutions.
                </p>
            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                "Requirement Analysis",
                "UI/UX Design",
                "Development",
                "Testing & Deployment",
                ].map((step, i) => (
                <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl shadow-md bg-gray-50 text-center"
                >
                <Workflow className="mx-auto text-indigo-600 mb-4" size={32} />
                <h3 className="font-semibold text-lg text-gray-900">{step}</h3>
                </motion.div>
                ))}
            </div>
        </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us
                </h2>
                <p className="text-gray-600 mb-6">
                We combine innovation, expertise and reliability to deliver
                exceptional digital experiences.
                </p>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1" />
                    Modern & future-ready technology stack
                    </li>
                    <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1" />
                    Experienced developers & designers
                    </li>
                    <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1" />
                    Secure, scalable and maintainable solutions
                    </li>
                    <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1" />
                    Client-focused development approach
                    </li>
                </ul>
            </div>


            <img src={team} className="mx-auto max-w-md" />
        </div>
    </section>

    {/* OUR SOLUTIONS */}
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
                <p className="mt-4 text-gray-600">
                End-to-end digital solutions designed for diverse business needs.
                </p>
            </div>


         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                "Enterprise Web Applications",
                "Blockchain-based Systems",
                "AI-powered Platforms",
                "Cloud & DevOps Solutions",
            ].map((solution, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gray-50 shadow-md text-center"
            >
                <Lightbulb className="mx-auto text-indigo-600 mb-4" size={28} />
                <h3 className="font-semibold text-gray-900">{solution}</h3>
            </motion.div>
        ))}
    </div>
    </div>
    </section>

    <ClientsSection />
    <StatsSection />
    <WhatsAppFloat />
</>
);
}

export default Home;