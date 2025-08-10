import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NelsonModal from "./NelsonModal";
import DonutButton from "./DonutButton";

export default function BurnsWindow({ isOpen, onClose, onOpenHomer }) {
  const [nelsonOpen, setNelsonOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setNelsonOpen(true);
      }, 2000); // 2 segundos después de abrir BurnsWindow
    } else {
      setNelsonOpen(false); // cerrar NelsonModal si BurnsWindow se cierra
    }

    return () => clearTimeout(timer); // limpiar el timer si BurnsWindow cambia
  }, [isOpen]);

  const closeNelson = () => setNelsonOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="burns-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/burns.png')",
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
            style={{
              position: "relative",
              marginBottom: "30px",
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Cerrar Burns
          </DonutButton>
          

          {/* NelsonModal aparece automáticamente después del delay */}
          <NelsonModal isOpen={nelsonOpen} onClose={closeNelson} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
