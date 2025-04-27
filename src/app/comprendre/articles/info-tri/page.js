import Head from "next/head";

export const metadata = {
  title: "Info-tri : signalétique et consignes à savoir | Eco-Tec Cycle",
  description: "Découvrez l'importance de l'info-tri, les différents logos et consignes pour bien trier et recycler vos équipements électroniques.",
  keywords: "info-tri, signalétique, consignes, recyclage, tri, électronique, écologie, Eco-Tec Cycle"
};

export default function InfoTriArticle() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Info-tri : signalétique et consignes à savoir</h1>
        <img src="/tri-signaletique.jpg" alt="Info-tri signalétique recyclage" className="rounded-lg w-full h-140 object-cover mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Qu'est-ce que l'info-tri ?</h2>
        <p className="mb-4 text-gray-800">L'info-tri regroupe l'ensemble des logos, pictogrammes et consignes qui aident les consommateurs à trier correctement leurs déchets, notamment les équipements électriques et électroniques.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Les principaux logos à connaître</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Le logo "poubelle barrée" : indique que le produit ne doit pas être jeté avec les ordures ménagères.</li>
          <li>Les consignes de tri locales : précisent où déposer chaque type de déchet.</li>
          <li>Les logos de recyclage (anneau de Möbius, Triman, etc.).</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Pourquoi respecter l'info-tri ?</h2>
        <p className="mb-4 text-gray-800">Bien trier permet d'améliorer le recyclage, de limiter la pollution et de préserver les ressources naturelles. C'est un geste simple mais essentiel pour l'environnement.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Où trouver les consignes ?</h2>
        <p className="mb-4 text-gray-800">Les consignes de tri sont généralement indiquées sur l'emballage, la notice ou le produit lui-même. En cas de doute, consultez le site de votre collectivité ou <a href="https://www.ecosystem.eco/" className="text-green-700 underline">ecosystem.eco</a>.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis à jour en 2025</div>
      </article>
    </main>
  );
} 