/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

export const metadata = {
  title: "Recycler : le geste primordial pour protéger la Terre et ses ressources | Eco-Tec Cycle",
  description: "Découvrez pourquoi le recyclage des équipements électriques et électroniques est essentiel pour préserver l'environnement et les ressources naturelles.",
  keywords: "recyclage, environnement, ressources, écologie, Eco-Tec Cycle"
};

export default function RecyclerPrimordialArticle() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Recycler : le geste primordial pour protéger la Terre et ses ressources</h1>
        <img src="/proteger-terre.jpg" alt="Recyclage et protection de la Terre" className="rounded-lg w-full h-64 object-cover mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Pourquoi recycler ?</h2>
        <p className="mb-4 text-gray-800">Recycler permet de limiter la pollution, d'économiser les ressources naturelles et de réduire la quantité de déchets enfouis ou incinérés. C'est un geste simple qui a un impact direct sur la préservation de notre planète.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Les bénéfices du recyclage</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Réduction de l'extraction de matières premières.</li>
          <li>Diminution des émissions de gaz à effet de serre.</li>
          <li>Préservation de la biodiversité et des écosystèmes.</li>
          <li>Création d'emplois dans la filière du recyclage.</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Comment agir au quotidien ?</h2>
        <p className="mb-4 text-gray-800">Triez vos équipements usagés, déposez-les dans les points de collecte adaptés et sensibilisez votre entourage à l'importance du recyclage. Chaque geste compte pour un avenir plus durable.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis à jour en 2025</div>
      </article>
    </main>
  );
} 