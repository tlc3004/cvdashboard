// src/components/SideBart.jsx
import { motion } from "framer-motion";

export default function SideBart() {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 2 }}
      className="fixed left-[-30%] top-0 w-64 h-full bg-white-100 shadow-lg z-50 flex flex-col items-center easy translate-x-6 translate-x-0"
    >
      <img src="/bart1.png" alt="Bart" className="w-40 mt-6 object-contain translate-x-6 easy-in-out" />
      <p className="mt-4 text-center text-gray-700 font-semibold">
        ¡Ey! ¿Quién eres tú?
      </p>
    </motion.aside>
  );
}
