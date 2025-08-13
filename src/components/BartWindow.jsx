import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import ModalHomer from "./ModalHomer";
import DonutButton from "./DonutButton";
import ModalBart from "./ModalBart";

export default function BartWindow({ isOpen, onClose }) {
  const [play] = useSound("/sounds/burpy-rulp.mp3");
  const [homerOpen, setHomerOpen] = useState(true); // Homero siempre visible
  const [bartFall, setBartFall] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setBartFall(true); 
      setHomerOpen(true)
      // Bart empieza a caer
    } else {
      setBartFall(false);
    }
  }, [isOpen]);

  const homerClose = () => setHomerOpen(true);
  const bartClose = () => setBartFall(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="bart-window"
          className="fixed inset-0 bg-white flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Botón Duff arriba de Homero */}
          <button
            onClick={play}
            className="relative top-0 left-9 w-[500px] h-[500px] bg-cover bg-no-repeat bg-center border-none rounded-md cursor-pointer"
            style={{ backgroundImage: "url('/duff-1.png')" }}
          >
          </button>

          {/* DonutButton fijo arriba izquierda */}
          <div className="fixed top-5 left-5 w-24 h-24 md:w-28 md:h-28 z-50 cursor-pointer">
            <DonutButton onClick={onClose} />
          </div>

          {/* Homero */}
          <div className="relative z-10">
            <ModalHomer isOpen={homerOpen} onClose={homerClose} />
          </div>

          {/* Bart cayendo encima de Homero */}
          <motion.div
            className="absolute z-20"
            initial={{ y: -500, rotate: -15 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <ModalBart isOpen={bartFall} onClose={bartClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
