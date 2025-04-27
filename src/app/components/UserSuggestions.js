import Link from "next/link";

export default function UserSuggestions({ user }) {
  // Suggestions fictives pour la démo
  const suggestions = [
    {
      type: "point",
      title: "Point de dépôt proche : Recyclerie Paris 12e",
      desc: "À 1,2 km de chez vous. Ouvert jusqu'à 18h.",
      link: "/map"
    },
    {
      type: "guide",
      title: "Guide : Bien préparer son appareil avant recyclage",
      desc: "Effacez vos données, retirez la batterie si possible, etc.",
      link: "https://www.ecosystem.eco/comprendre/comment-sont-depollues-et-recycles-vos-equipements/"
    },
    {
      type: "conseil",
      title: "Conseil : Pensez à réparer avant de jeter !",
      desc: "Un appareil réparable, c'est un geste pour la planète.",
      link: "/comprendre"
    }
  ];
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
      <div className="text-lg font-bold text-green-800 mb-2">Suggestions personnalisées</div>
      <ul className="flex flex-col gap-3">
        {suggestions.map((s, idx) => (
          <li key={idx} className="border rounded-lg p-3 bg-green-50">
            <div className="font-semibold text-green-700">{s.title}</div>
            <div className="text-gray-700 text-sm mb-1">{s.desc}</div>
            <Link href={s.link} className="text-green-600 font-semibold hover:underline text-sm">En savoir plus</Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 