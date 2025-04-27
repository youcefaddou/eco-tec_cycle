export default function UserHistory({ user }) {
  // Historique fictif pour la démo
  const history = [
    { date: "2024-05-01", type: "Recyclage", device: "Smartphone", location: "Paris" },
    { date: "2024-04-15", type: "Réparation", device: "Ordinateur portable", location: "Lyon" },
    { date: "2024-03-28", type: "Recyclage", device: "Écran", location: "Toulouse" },
  ];
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-md mx-auto overflow-x-auto">
      <div className="text-lg font-bold text-green-800 mb-2">Mon historique</div>
      <ul className="divide-y divide-green-100">
        {history.map((item, idx) => (
          <li key={idx} className="py-2 flex flex-col md:flex-row md:items-center md:gap-4 text-sm min-w-[320px]">
            <span className="text-black w-24">{item.date}</span>
            <span className="font-semibold text-green-700 w-24">{item.type}</span>
            <span className="w-32 text-black">{item.device}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 