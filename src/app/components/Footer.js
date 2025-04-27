import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 py-6 w-full md:fixed md:bottom-0 md:left-0 z-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 text-sm">
        <div className="font-bold text-center md:text-left">Eco-Tec Cycle © {new Date().getFullYear()}</div>
        <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 items-center justify-center md:justify-start w-full md:w-auto text-center">
          <li><Link href="/comprendre" className="hover:underline">Comprendre</Link></li>
          <li><Link href="/map" className="hover:underline">Carte des points de collecte</Link></li>
          <li><Link href="/" className="hover:underline">Accueil</Link></li>
          <li><span className="hover:underline">Mentions légales</span></li>
          <li><span className="hover:underline">Contact</span></li>
        </ul>
      </div>
    </footer>
  );
} 