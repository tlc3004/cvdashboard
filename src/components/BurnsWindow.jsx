import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NelsonModal from "./NelsonModal";
import DonutButton from "./DonutButton";

export default function BurnsWindow({ isOpen, onClose }) {
  const [nelsonOpen, setNelsonOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => setNelsonOpen(true), 2000);
    } else {
      setNelsonOpen(false);
    }
    return () => clearTimeout(timer);
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
          {/* DonutButton fijo en esquina superior izquierda */}
          <div
            style={{
              position: "fixed",
              top: 20,
              left: 20,
              width: 100,
              height: 100,
              zIndex: 10000,
              cursor: "pointer",
            }}
          >
            <DonutButton onClick={onClose} />
          </div>

          <NelsonModal isOpen={nelsonOpen} onClose={closeNelson} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
