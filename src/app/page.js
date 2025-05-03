// src/app/page.js

import HeroSection from "./components/HeroSection";
import QuickActions from "./components/QuickActions";
import KeyFigures from "./components/KeyFigures";
import DeviceCategories from "./components/DeviceCategories";

export const metadata = {
  title: "Eco-Tec Cycle | Recyclage et Réparation d'Équipements Électroniques",
  description: "Découvrez comment recycler, réparer et prolonger la vie de vos équipements électroniques avec Eco-Tec Cycle. Conseils, guides et solutions pour une consommation responsable.",
};

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Eco-Tec Cycle - Recyclage et Réparation d'Équipements Électroniques</h1>
      <HeroSection />
      <QuickActions />
      <KeyFigures />
      <DeviceCategories />
    </main>
  );
}
