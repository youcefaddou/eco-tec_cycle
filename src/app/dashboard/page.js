"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import DepositPointsMap from "../components/DepositPointsMap";
import UserProfileCard from "../components/UserProfileCard";
import UserStats from "../components/UserStats";
import UserHistory from "../components/UserHistory";
import UserSuggestions from "../components/UserSuggestions";

const devices = [
  "Smartphone",
  "Ordinateur portable",
  "Tablette",
  "Télévision",
  "Console de jeux",
  "Petit électroménager",
  "Gros électroménager",
  "Écran",
  "Imprimante",
  "Autre"
];

const actions = [
  { label: "Déposer pour recyclage", value: "depot" },
  { label: "Réparer mon appareil", value: "reparation" }
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [locationError, setLocationError] = useState("");

  // Regex ville/adresse : lettres, chiffres, espaces, tirets, virgules, points, 2-80 caractères
  const locationRegex = /^[A-Za-zÀ-ÿ0-9'\apos;\-., ]{2,80}$/;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") return null;
  if (!session) return null;

  if (showMap) {
    return <DepositPointsMap location={userLocation} action={selectedAction} device={selectedDevice} />;
  }

  const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
    if (!locationRegex.test(e.target.value)) {
      setLocationError("Ville ou adresse invalide (lettres, chiffres, 2-80 caractères)");
    } else {
      setLocationError("");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 pb-32 animate-fadein">
      <div className="w-full max-w-md mx-auto flex flex-col gap-10 px-2 md:max-w-5xl md:px-0">
        {/* Ligne 1 : Profil, Stats, Historique */}
        <div className="grid grid-cols-1 md:flex gap-4 md:gap-8 mt-5 items-stretch animate-slidein-up">
          <div className="min-h-[180px] flex"><UserProfileCard user={session.user} /></div>
          <div className="min-h-[180px] flex"><UserStats user={session.user} /></div>
          <div className="min-h-[180px] flex"><UserHistory user={session.user} /></div>
        </div>
        {/* Ligne 2 : Suggestions, Nouvelle action */}
        <div className="grid grid-cols-1 md:flex gap-4 md:gap-8 items-stretch animate-slidein-up delay-100">
          <div className="min-h-[180px] flex"><UserSuggestions user={session.user} /></div>
          <div className="min-h-[180px] flex">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full text-center mx-auto animate-fadein delay-200 flex flex-col justify-center h-full min-h-[180px]">
              <h1 className="text-2xl font-bold text-green-800 mb-4">Nouvelle action</h1>
              <p className="mb-6 text-black">Connecté en tant que <span className="font-semibold text-black">{session.user.name || session.user.email}</span></p>
              <form className="space-y-6" onSubmit={e => {
                e.preventDefault();
                if (locationError) return;
                setShowMap(true);
              }}>
                <div>
                  <label className="block text-left text-green-700 font-semibold mb-2">Que souhaitez-vous faire ?</label>
                  <div className="flex gap-4 justify-center">
                    {actions.map((action) => (
                      <label key={action.value} className="flex items-center gap-2 cursor-pointer text-black">
                        <input type="radio" name="action" value={action.value} className="accent-green-600" required onChange={e => setSelectedAction(e.target.value)} />
                        <span className="text-black">{action.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-left text-green-700 font-semibold mb-2">Modèle d'appareil</label>
                  <select className="w-full border text-black rounded-lg px-3 py-2 placeholder-green-700/80 focus:placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none" required defaultValue="" onChange={e => setSelectedDevice(e.target.value)}>
                    <option value="" disabled hidden>Sélectionner un appareil</option>
                    {devices.map((device) => (
                      <option key={device} value={device}>{device}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-left text-green-700 font-semibold mb-2">Ville ou adresse</label>
                  <input type="text" className="w-full border text-black rounded-lg px-3 py-2 placeholder-green-700/80 focus:placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none" placeholder="Ex : Paris, 75000 ou 12 rue de la Paix" required onChange={handleLocationChange} value={userLocation} autoComplete="off" />
                  {locationError && <div className="text-red-600 text-sm mt-1">{locationError}</div>}
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition shadow transform hover:scale-105 duration-200">Valider</button>
              </form>
              <Link href="/" className="block mt-6 text-green-600 font-semibold hover:underline">Retour àagrave; l'accueil</Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .animate-fadein { animation: fadein 0.7s; }
        .animate-slidein-up { animation: slidein-up 0.7s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slidein-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
} 