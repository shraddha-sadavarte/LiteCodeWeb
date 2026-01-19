import React from "react";
import { motion } from "framer-motion";


function ServiceCard({ icon: Icon, title, description }) {
return (
    <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl"
    >
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-4">
        <Icon size={28} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>

);
}

export default ServiceCard;