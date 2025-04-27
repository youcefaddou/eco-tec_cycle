"use client";
import { motion } from "framer-motion";

export default function KeyFigures() {
    const figures = [
      { value: "137 702 670", label: "appareils collectés en 2023" },
      { value: "54 046 188", label: "ampoules et tubes collectés" },
      { value: "498 075", label: "tonnes de CO₂ évitées" },
    ];
    return (
      <section className="py-8 md:py-12 bg-green-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center">
          {figures.map((fig, i) => (
            <motion.div
              key={fig.value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 120 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{fig.value}</div>
              <div className="text-gray-700">{fig.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    );
}
  