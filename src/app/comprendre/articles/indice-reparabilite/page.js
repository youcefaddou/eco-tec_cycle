/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "L'indice de réparabilité : comprendre et agir | Eco-Tec Cycle",
  description: "Tout savoir sur l'indice de réparabilité, comment il fonctionne, pourquoi il est important pour prolonger la vie de vos appareils électroniques et réduire les déchets.",
  keywords: "indice de réparabilité, réparation, recyclage, électronique, écologie, économie circulaire, Eco-Tec Cycle"
};

export default function IndiceReparabiliteArticle() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">L'indice de réparabilité : comprendre et agir</h1>
        <img src="/indice-de-reparabilite_equipements_concernes_calcul_note.webp" alt="Indice de réparabilité" className="rounded-lg w-full h-110 mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Qu'est-ce que l'indice de réparabilité ?</h2>
        <p className="mb-4 text-gray-800">L'indice de réparabilité est une note sur 10, affichée sur de nombreux appareils électroniques et électroménagers vendus en France. Il informe les consommateurs sur la facilité à réparer un produit, en prenant en compte la disponibilité des pièces détachées, la documentation technique, le démontage, et le prix des pièces.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Pourquoi est-il important ?</h2>
        <p className="mb-4 text-gray-800">Un indice élevé encourage la réparation plutôt que le remplacement, prolonge la durée de vie des appareils et réduit la quantité de déchets électroniques. C'est un outil clé pour une consommation plus responsable et pour lutter contre l'obsolescence programmée.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Comment l'utiliser ?</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Comparez l'indice lors de l'achat d'un nouvel appareil.</li>
          <li>Privilégiez les produits avec un indice élevé ({'>'}7/10).</li>
          <li>Consultez la documentation fournie pour faciliter l'auto-réparation.</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Vers un futur plus durable</h2>
        <p className="mb-4 text-gray-800">En choisissant des produits réparables, vous agissez pour la planète et pour votre portefeuille. L'indice de réparabilité est un allié pour une économie circulaire et une société plus durable.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis à jour en 2025</div>
      </article>
    </main>
  );
} 