/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function HeroSection() {
    return (
      <section className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">Recycler c'est protéger</h1>
        <p className="text-lg md:text-2xl text-green-700 mb-8">Donnez une seconde vie à vos appareils électroniques et électriques</p>
        <Link href="/map" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">Trouver un point de collecte</Link>
      </section>
    );
  }
  