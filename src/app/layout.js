import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NextAuthSessionProvider from "./components/SessionProvider";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eco-Tec Cycle",
  description: "Plateforme de recyclage électronique éco-responsable - Eco-Tec Cycle",
};

export default function RootLayout({ children }) {
  // Utilise usePathname pour détecter la route courante
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isMap = pathname === "/map";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${isMap ? "overflow-hidden" : ""}`}
      >
        <NextAuthSessionProvider>
          <Header />
          {children}
          {!isMap && <Footer />}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
