"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const navLinks = [
  { label: "Où déposer mes appareils ?", href: "/map" },
  { label: "Prolonger la durée de vie", href: "/map" },
  { label: "Pourquoi recycler ?", href: "/comprendre" },
];

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-2 py-3 relative">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-700 whitespace-nowrap">
          <span className="inline-block align-middle">
            {/* Logo SVG moderne, thème vert */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" stroke="#059669" strokeWidth="3" fill="#D1FAE5" />
              <path d="M12 18c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M18 12v-3m0 15v-3" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="whitespace-nowrap mr-2">Eco-Tec Cycle</span>
        </Link>
        {/* Burger menu for mobile */}
        <button className="md:hidden ml-auto p-2" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 items-center w-full ml-8">
          {navLinks.map((link, idx) => (
            <li key={link.href + '-' + idx}>
              <Link href={link.href} className="text-green-700 font-medium hover:text-green-900 transition">
                {link.label}
              </Link>
            </li>
          ))}
          <div className="ml-auto flex gap-4 items-center">
            {session && (
              <li>
                <Link href="/dashboard" className="px-4 py-2 hover:cursor-pointer rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-200 transition">Accueil</Link>
              </li>
            )}
            {session ? (
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-4 py-1 hover:cursor-pointer rounded-full border border-green-600 text-white font-semibold bg-red-500 hover:bg-green-50 hover:text-black transition"
                >
                  Se déconnecter
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login" className="px-4 py-1 rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">Connexion</Link>
                </li>
                <li>
                  <Link href="/register" className="px-4 py-1 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:from-green-700 hover:to-emerald-600 transition shadow">S&apos;inscrire</Link>
                </li>
              </>
            )}
          </div>
        </ul>
        {/* Mobile nav */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-2 py-4 px-4 md:hidden animate-fadein z-50">
            {navLinks.map((link, idx) => (
              <li key={link.href + '-' + idx}>
                <Link href={link.href} className="block py-2 text-green-700 font-medium hover:text-green-900 transition" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            {session && (
              <li>
                <Link href="/dashboard" className="block px-4 py-2 rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-200 transition" onClick={() => setOpen(false)}>Accueil</Link>
              </li>
            )}
            {session ? (
              <li>
                <button
                  onClick={() => { setOpen(false); signOut({ callbackUrl: "/" }); }}
                  className="block w-full px-4 py-2 rounded-full border border-green-600 text-white font-semibold bg-red-500 hover:bg-green-50 hover:text-black transition"
                >
                  Se déconnecter
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login" className="block px-4 py-2 rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition" onClick={() => setOpen(false)}>Connexion</Link>
                </li>
                <li>
                  <Link href="/register" className="block px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:from-green-700 hover:to-emerald-600 transition shadow" onClick={() => setOpen(false)}>S&apos;inscrire</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
} 