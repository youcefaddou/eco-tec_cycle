"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import HeroSection from "./components/HeroSection";
import QuickActions from "./components/QuickActions";
import KeyFigures from "./components/KeyFigures";
import DeviceCategories from "./components/DeviceCategories";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return null;
  }

  return (
    <main>
      <HeroSection />
      <QuickActions />
      <KeyFigures />
      <DeviceCategories />
    </main>
  );
}
