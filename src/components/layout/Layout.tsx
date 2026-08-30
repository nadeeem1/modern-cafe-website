import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* Keyed by route so every navigation gets a quiet page-in transition */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
