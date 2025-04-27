import Link from "next/link";

export default function QuickActions() {
    return (
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center">
          <div className="p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition border">
            <h2 className="text-xl font-bold mb-2 text-green-700">Donner ou recycler</h2>
            <p className="mb-4 text-gray-600">Trouvez rapidement o&ugrave; donner ou recycler vos appareils usag&eacute;s.</p>
            <Link href="/map" className="text-green-600 font-semibold hover:underline">Voir les points</Link>
          </div>
          <div className="p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition border">
            <h2 className="text-xl font-bold mb-2 text-green-700">R&eacute;parer</h2>
            <p className="mb-4 text-gray-600">Prolongez la vie de vos &eacute;quipements gr&acirc;ce &agrave; la r&eacute;paration.</p>
            <a href="#" className="text-green-600 font-semibold hover:underline">Trouver un r&eacute;parateur</a>
          </div>
          <div className="p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition border">
            <h2 className="text-xl font-bold mb-2 text-green-700">Comprendre</h2>
            <p className="mb-4 text-gray-600">D&eacute;couvrez pourquoi et comment recycler vos appareils.</p>
            <Link href="/comprendre" className="text-green-600 font-semibold hover:underline">En savoir plus</Link>
          </div>
        </div>
      </section>
    );
  }
  