"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-green-100 py-16 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-green-800 mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Recycler c'est protéger
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-green-700 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Donnez une seconde vie à vos appareils électroniques et électriques
      </motion.p>
      <Link
        href="/map"
        className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
      >
        Trouver un point de collecte
      </Link>
    </section>
  );
}
  