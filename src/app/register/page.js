"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  // Regex sécurisées
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};;'apos;:"\\|,.<>/?]).{8,}$/;
  const nameRegex = /^[A-Za-zÀ-ÿÿ'apos; -]{2,40}$/;

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!nameRegex.test(e.target.value)) {
      setNameError("Nom invalide (lettres, espaces, 2-40 caractères)");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Email invalide");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!passwordRegex.test(e.target.value)) {
      setPasswordError("8+ caractères, majuscule, minuscule, chiffre, caractère spécial");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (nameError || emailError || passwordError) return;
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    if (res.ok) {
      setSuccess("Compte créé ! Vous pouvez vous connecter.");
      setTimeout(() => router.push("/login"), 1500);
    } else {
      const data = await res.json();
      setError(data.error || "Erreur lors de la création du compte");
    }
  };

  if (status === "authenticated") {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">Créer un compte</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-semibold mb-4 hover:from-green-600 hover:to-emerald-700 transition shadow"
        >
          Connexion avec Google
        </button>
        <div className="text-center text-gray-400 my-4">ou</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={handleNameChange}
            className="w-full border text-black rounded-lg px-3 py-2 placeholder-green-700/80 focus:placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
            required
            autoComplete="off"
          />
          {nameError && <div className="text-red-600 text-sm">{nameError}</div>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border text-black rounded-lg px-3 py-2 placeholder-green-700/80 focus:placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
            required
            autoComplete="off"
          />
          {emailError && <div className="text-red-600 text-sm">{emailError}</div>}
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border text-black rounded-lg px-3 py-2 placeholder-green-700/80 focus:placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
            required
            autoComplete="off"
          />
          {passwordError && <div className="text-red-600 text-sm">{passwordError}</div>}
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition shadow">
            Créer un compte
          </button>
        </form>
        <div className="text-center text-gray-500 mt-4 text-sm">
          Déjà inscrit ? <Link href="/login" className="text-emerald-700 font-semibold hover:underline">Se connecter</Link>
        </div>
      </div>
    </main>
  );
} 