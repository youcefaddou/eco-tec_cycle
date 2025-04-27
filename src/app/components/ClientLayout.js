"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import NextAuthSessionProvider from "./SessionProvider";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isMap = pathname === "/map";

  return (
    <NextAuthSessionProvider>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {!isMap && <Footer />}
    </NextAuthSessionProvider>
  );
}