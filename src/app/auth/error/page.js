"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-800 mb-4">Erreur d&apos;authentification</h1>
        <p className="mb-4 text-gray-600">
          Une erreur est survenue lors de la connexion.<br />
          <span className="text-red-600 font-mono">{error && `Code erreur : ${error}`}</span>
        </p>
        <Link href="/" className="text-green-600 font-semibold hover:underline">Retour &agrave; l&apos;accueil</Link>
      </div>
    </main>
  );
} 