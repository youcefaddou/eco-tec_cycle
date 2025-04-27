import Head from "next/head";

export const metadata = {
  title: "Entretenir ses équipements électriques | Eco-Tec Cycle",
  description: "Conseils pratiques pour entretenir et prolonger la durée de vie de vos équipements électriques et électroniques.",
  keywords: "entretien, équipements électriques, prolonger, durée de vie, recyclage, Eco-Tec Cycle"
};

export default function EntretenirEquipementsArticle() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Entretenir ses équipements électriques</h1>
        <img src="/entretien-equipement.jpg" alt="Entretien équipements électriques" className="rounded-lg w-full h-100 object-cover mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Pourquoi entretenir ses appareils ?</h2>
        <p className="mb-4 text-gray-800">Un bon entretien permet de prolonger la durée de vie de vos équipements, d'éviter les pannes prématurées et de réduire la production de déchets électroniques. Cela contribue aussi à faire des économies et à préserver l'environnement.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Quelques gestes simples</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Nettoyez régulièrement vos appareils pour éviter l'accumulation de poussière.</li>
          <li>Respectez les consignes d'utilisation et d'entretien du fabricant.</li>
          <li>Débranchez les appareils non utilisés pour économiser l'énergie.</li>
          <li>Faites vérifier vos équipements par un professionnel en cas de dysfonctionnement.</li>
          <li>Remplacez les pièces usées plutôt que l'appareil complet si possible.</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Quand réparer ou recycler ?</h2>
        <p className="mb-4 text-gray-800">Si un appareil ne fonctionne plus malgré un bon entretien, pensez à la réparation avant d'envisager le recyclage. De nombreux réseaux de réparateurs existent. Si la réparation n'est pas possible, déposez l'appareil dans un point de collecte pour qu'il soit recyclé dans les meilleures conditions.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis à jour en 2025</div>
      </article>
    </main>
  );
} 