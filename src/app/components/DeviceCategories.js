"use client";
/* eslint-disable react/no-unescaped-entities */
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const categories = [
    { label: "Gros appareils", icon: "📺" },
    { label: "Petits appareils", icon: "🔌" },
    { label: "Téléphones", icon: "📱" },
    { label: "Cartouches d'imprimante", icon: "🖨️" },
    { label: "Ampoules et tubes", icon: "💡" },
    { label: "Piles et batteries", icon: "🔋" },
  ];
  
  export default function DeviceCategories() {
    return (
      <section className="py-8 mb-8 md:py-12 bg-white">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Catégories d'appareils recyclables</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const { MotionWrapper } = useInViewAnimation({ y: 40, duration: 0.7, delay: i * 0.12 });
            return (
              <MotionWrapper key={cat.label} className="flex flex-col items-center p-4 md:p-6 border rounded-lg shadow hover:shadow-lg transition">
                <span className="text-4xl mb-2">{cat.icon}</span>
                <span className="text-lg font-semibold text-green-700">{cat.label}</span>
              </MotionWrapper>
            );
          })}
        </div>
      </section>
    );
  }
  