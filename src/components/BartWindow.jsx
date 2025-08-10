import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ModalHomer from "./ModalHomer";
import DonutButton from "./DonutButton";

export default function BartWindow({ isOpen, onClose }) {
    const [homerOpen, setHomerOpen]=useState(false)

      useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setHomerOpen(true);
      }, 100); // 2 segundos después de abrir BurnsWindow
    } else {
      setHomerOpen(false); // cerrar NelsonModal si BurnsWindow se cierra
    }

    return () => clearTimeout(timer); // limpiar el timer si BurnsWindow cambia
  }, [isOpen]);

  const homerClose = () => setHomerOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="bart-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/bartfalling.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          
          <DonutButton 
            onClick={onClose}
          >
    
          </DonutButton>
          <ModalHomer isOpen={homerOpen} onClose={homerClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
