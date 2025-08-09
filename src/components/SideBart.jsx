import { motion } from "framer-motion";
import DonutBitten from "./DonutBitten";

export default function SideBart({ bitten, onClick }) {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 2,
        exit: {duration: 4},
       }}
      className="fixed top-0 right-10 w-64 h-full bg-white-100 shadow-lg z-50 flex flex-col items-center ease translate-x-8"
    >
      <img
        src="/bart1.png"
        alt="Bart"
        className="w-40 mt-6 object-contain translate-x-6 ease-in-out right-0"
      />


      {/* DonutBitten recibe los props */}
      <DonutBitten bitten={bitten} onClick={onClick} />
    </motion.aside>
  );
}
