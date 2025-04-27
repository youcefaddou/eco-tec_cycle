import Head from "next/head";

export const metadata = {
  title: "La loi AGEC : Pour une économie circulaire | Eco-Tec Cycle",
  description: "Comprenez la loi AGEC, ses objectifs pour l'éapos;économie circulaire, et son impact sur le recyclage et la réparation des équipements électroniques.",
  keywords: "loi AGEC, économie circulaire, recyclage, réparation, électronique, écologie, Eco-Tec Cycle"
};

export default function LoiAGECArticle() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">La loi AGEC : Pour une économie circulaire</h1>
        <img src="/loi-agec-economie-circulaire.jpg" alt="Loi AGEC économie circulaire" className="rounded-lg w-full h-90 object-cover mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Qu&apos;est-ce que la loi AGEC ?</h2>
        <p className="mb-4 text-gray-800">La loi AGEC (Anti-Gaspillage pour une Économie Circulaire) vise àagrave; transformer notre modèle de production et de consommation pour limiter le gaspillage, favoriser le recyclage et encourager la réparation.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Les grands axes de la loi</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Réduire l'utilisation du plastique àagrave; usage unique.</li>
          <li>Améliorer l&apos;information du consommateur (indice de réparabilité, info-tri).</li>
          <li>Favoriser la réparation et le réemploi des équipements.</li>
          <li>Responsabiliser les producteurs sur la gestion de la fin de vie des produits.</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Quel impact pour les consommateurs ?</h2>
        <p className="mb-4 text-gray-800">Grâce àagrave; la loi AGEC, il est plus facile de réparer, recycler ou donner une seconde vie àagrave; ses appareils. Les consommateurs sont mieux informés et peuvent faire des choix plus responsables.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Un pas vers l'éapos;économie circulaire</h2>
        <p className="mb-4 text-gray-800">La loi AGEC s&apos;inscrit dans une démarche globale pour préserver les ressources naturelles et limiter l&apos;impact environnemental de nos déchets.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis àagrave; jour en 2025</div>
      </article>
    </main>
  );
} 