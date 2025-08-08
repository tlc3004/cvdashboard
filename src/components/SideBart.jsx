// src/components/SideBart.jsx
import { motion } from "framer-motion";

export default function SideBart() {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
      className="fixed left-[-20%] top-0 w-64 h-full bg-white-100 shadow-lg z-50 flex flex-col items-center"
    >
      <img src="/bart1.png" alt="Bart" className="w-40 mt-6 object-contain translate-x-6 easy-out" />
      <p className="mt-4 text-center text-gray-700 font-semibold">
        ¡Ey! ¿Quién eres tú?
      </p>
    </motion.aside>
  );
}
