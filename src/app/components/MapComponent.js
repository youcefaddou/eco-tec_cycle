"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

const points = [
  { id: 1, lat: 48.8566, lng: 2.3522, type: "piles", label: "Collecte Piles Paris" },
  { id: 2, lat: 43.6047, lng: 1.4442, type: "écrans", label: "Collecte Écrans Toulouse" },
  { id: 3, lat: 45.7640, lng: 4.8357, type: "piles", label: "Collecte Piles Lyon" },
  { id: 4, lat: 47.2184, lng: -1.5536, type: "petits appareils", label: "Collecte Petits Appareils Nantes" },
  { id: 5, lat: 48.5734, lng: 7.7521, type: "écrans", label: "Collecte Écrans Strasbourg" },
];

const types = Array.from(new Set(points.map((pt) => pt.type)));

export default function MapComponent({ showReturnHome }) {
  const [filter, setFilter] = useState("all");
  const filteredPoints = filter === "all" ? points : points.filter((pt) => pt.type === filter);
  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <div className="flex flex-wrap flex-col sm:flex-row gap-2 p-2 sm:p-4 bg-green-300 border-b border-green-200 z-[1000] relative items-center">
        <div className="flex flex-row flex-wrap gap-2 w-full sm:w-auto justify-center">
          <button
            className={`px-3 py-2 rounded-full border font-semibold text-sm sm:text-base ${filter === "all" ? "bg-green-600 text-white" : "bg-gray-100 text-green-700"}`}
            onClick={() => setFilter("all")}
          >
            Tous
          </button>
          {types.map((type) => (
            <button
              key={type}
              className={`px-3 py-2 rounded-full border font-semibold text-sm sm:text-base ${filter === type ? "bg-green-600 text-white" : "bg-gray-100 text-green-700"}`}
              onClick={() => setFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        {showReturnHome && (
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-auto bg-green-700 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition"
          >
            Retour &agrave; l&apos;accueil
          </button>
        )}
      </div>
      <MapContainer center={[46.603354, 1.888334]} zoom={6} style={{ height: "90%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {filteredPoints.map((pt) => (
          <Marker key={pt.id} position={[pt.lat, pt.lng]}>
            <Popup>{pt.label} <br />Type : {pt.type}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 