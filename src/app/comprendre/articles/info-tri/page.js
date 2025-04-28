/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";

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
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Info-tri : bien trier ses équipements</h1>
        <Image src="/tri-signaletique.jpg" alt="Info-tri signalétique recyclage" width={800} height={360} style={{ height: 'auto', width: '100%' }} className="rounded-lg w-full h-140 object-cover mb-6" />
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Qu'est-ce que l'info-tri ?</h2>
        <p className="mb-4 text-gray-800">L'info-tri est un pictogramme apposé sur les équipements électriques et électroniques pour indiquer la bonne façon de les trier en fin de vie. Il aide les consommateurs à adopter les bons gestes de tri et à éviter que ces appareils ne finissent à la poubelle classique.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Les principaux logos à connaître</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Le logo "poubelle barrée" : indique que le produit ne doit pas être jeté avec les ordures ménagères.</li>
          <li>Les consignes de tri locales : précisent où déposer chaque type de déchet.</li>
          <li>Les logos de recyclage (anneau de Möbius, Triman, etc.).</li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Pourquoi c'est important ?</h2>
        <p className="mb-4 text-gray-800">Un bon tri permet de recycler les matériaux, de limiter la pollution et de préserver les ressources naturelles. L'info-tri facilite la gestion des déchets et contribue à une économie circulaire.</p>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Où trouver les consignes ?</h2>
        <p className="mb-4 text-gray-800">Les consignes de tri sont généralement indiquées sur l'emballage, la notice ou le produit lui-même. En cas de doute, consultez le site de votre collectivité ou <a target="_blank" rel="noopener noreferrer" href="https://www.ecosystem.eco/" className="text-green-700 underline">ecosystem.eco</a>.</p>
        <div className="mt-8 text-sm text-gray-500">Publié par Eco-Tec Cycle | Mis à jour en 2025</div>
      </article>
    </main>
  );
} 