"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function HeroSection() {
    const { MotionWrapper: TitleWrapper } = useInViewAnimation({ y: 40, duration: 0.7 });
    const { MotionWrapper: SubtitleWrapper } = useInViewAnimation({ y: 40, duration: 0.7, delay: 0.2 });
    return (
      <section className="bg-green-100 py-16 text-center">
        <TitleWrapper>
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
            Recycler c'est protéger
          </h1>
        </TitleWrapper>
        <SubtitleWrapper>
          <p className="text-lg md:text-2xl text-green-700 mb-8">
            Donnez une seconde vie à vos appareils électroniques et électriques
          </p>
        </SubtitleWrapper>
        <Link href="/map" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">Trouver un point de collecte</Link>
      </section>
    );
}
  