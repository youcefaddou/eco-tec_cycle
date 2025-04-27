export default function UserStats({ user }) {
  // Données fictives pour la démo
  const stats = {
    recycled: 7,
    repaired: 2,
    co2: 18.5, // en kg
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 w-full max-w-xs">
      <div className="text-lg font-bold text-green-800 mb-2">Mes statistiques</div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">♻️</span>
          <span className="font-semibold text-green-700">{stats.recycled}</span>
          <span className="text-gray-700">appareils recyclés</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔧</span>
          <span className="font-semibold text-green-700">{stats.repaired}</span>
          <span className="text-gray-700">appareils réparés</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="font-semibold text-green-700">{stats.co2} kg</span>
          <span className="text-gray-700">CO₂ économisés</span>
        </div>
      </div>
    </div>
  );
} 