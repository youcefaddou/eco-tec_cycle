"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Points de dépôt fictifs pour la démo
const points = [
  { id: 1, name: "Point Recyclage Paris", address: "12 rue de la Paix, 75002 Paris", phone: "01 23 45 67 89", lat: 48.8686, lng: 2.3314 },
  { id: 2, name: "Eco Dépôt Lyon", address: "5 avenue des Frères Lumière, 69008 Lyon", phone: "04 78 12 34 56", lat: 45.7485, lng: 4.8598 },
  { id: 3, name: "Collecte Toulouse", address: "8 place du Capitole, 31000 Toulouse", phone: "05 61 23 45 67", lat: 43.6045, lng: 1.4442 },
  { id: 4, name: "Recyclerie Nantes", address: "20 quai de la Fosse, 44100 Nantes", phone: "02 40 12 34 56", lat: 47.2101, lng: -1.5733 },
  { id: 5, name: "Point Dépôt Marseille", address: "3 rue de la République, 13002 Marseille", phone: "04 91 23 45 67", lat: 43.2992, lng: 5.3700 },
];

const filterTypes = ["Tous", "Piles", "Écrans", "Petits appareils"];

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function DepositPointsMap({ location, action, device }) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("Tous");
  // Ici, on pourrait filtrer les points selon la localisation ou l'action
  const filteredPoints = useMemo(() => points, []);

  return (
    <div className="fixed inset-0 flex z-50">
      <aside className="w-full max-w-xs bg-white/95 h-full overflow-y-auto shadow-xl p-4 flex flex-col gap-4 relative">
        <h2 className="text-xl font-bold text-green-800 mb-1">Points de dépôt proches</h2>
        <div className="text-sm text-gray-700 mt-6">
          <span className="font-semibold">Votre recherche :</span> {action} {device && `- ${device}`}<br />Lieu : {location}
        </div>
       
        <ul className="flex-1 flex flex-col gap-4">
          {filteredPoints.map(pt => (
            <li key={pt.id} className="border rounded-lg p-4 bg-green-50 shadow">
              <div className="font-semibold text-green-700 text-lg">{pt.name}</div>
              <div className="text-gray-800">{pt.address}</div>
              <div className="text-gray-600">{pt.phone}</div>
            </li>
          ))}
        </ul>
      </aside>
      {/* Map en fond avec bouton retour dans la barre des filtres */}
      <div className="flex-1 h-full">
        <MapComponent showReturnHome />
      </div>
    </div>
  );
} 