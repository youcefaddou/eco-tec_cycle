"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import NextAuthSessionProvider from "./SessionProvider";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isMap = pathname === "/map";

  return (
    <NextAuthSessionProvider>
      <Header />
      {children}
      {!isMap && <Footer />}
    </NextAuthSessionProvider>
  );
}