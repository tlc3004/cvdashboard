import { motion } from "framer-motion";

export default function SideBart() {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
      className="fixed right-0 top-0 w-64 h-full bg-yellow-100 shadow-lg z-50"
    >
      <img src="/img/bart.png" alt="Bart" className="w-32 mx-auto mt-6" />
    </motion.aside>
  );
}
