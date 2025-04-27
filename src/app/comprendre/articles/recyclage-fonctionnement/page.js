import Head from "next/head";

export const metadata = {
  title: "Recyclage de vos équipements : comment cela fonctionne ? | Eco-Tec Cycle",
  description: "Découvrez le parcours de vos appareils électriques et électroniques lors du recyclage, de la collecte àagrave; la valorisation des matériaux.",
  keywords: "recyclage, fonctionnement, collecte, tri, valorisation, électronique, déchets, Eco-Tec Cycle"
};

export default function RecyclageFonctionnementArticle() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Recyclage de vos équipements : comment cela fonctionne ?</h1>
        <img src="/recyclage-equipement.png" alt="Recyclage fonctionnement" className="rounded-lg w-full h-110 object-cover mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">De la collecte au recyclage</h2>
        <p className="mb-4 text-gray-800">Le recyclage des équipements électriques et électroniques commence par la collecte dans des points dédiés. Les appareils sont ensuite triés selon leur nature (piles, écrans, petits ou gros appareils, etc.).</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Le tri et le traitement</h2>
        <p className="mb-4 text-gray-800">Après collecte, les équipements sont dépollués (retrait des substances dangereuses), puis démontés pour séparer les différents matériaux : plastiques, métaux, verre, etc. Ces matériaux sont ensuite envoyés vers des filières de valorisation.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Pourquoi recycler ?</h2>
        <p className="mb-4 text-gray-800">Recycler permet de limiter la pollution, d&apos;économiser les ressources naturelles et de réduire la quantité de déchets enfouis ou incinérés. C&apos;est un geste simple qui a un impact direct sur la préservation de notre planète.</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Limiter l&apos;impact environnemental des déchets électroniques.</li>
          <li>Économiser les ressources naturelles en réutilisant les matériaux.</li>
          <li>Créer des emplois dans la filière du recyclage.</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Le rôle du consommateur</h2>
        <p className="mb-4 text-gray-800">En déposant vos appareils dans les points de collecte, vous participez activement à la préservation de l&apos;environnement et à l&apos;économie circulaire.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis à jour en 2025</div>
      </article>
    </main>
  );
} 