import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import DonutButton from "./DonutButton";

export default function HomerWindow({ isOpen, onClose }) {
  const [showHomer, setShowHomer] = useState(false);
  const [play] = useSound("/sounds/burpy-rulp.mp3");

  useEffect(() => {
    if (isOpen) {
      // Mostrar Homero después de 2s
      const showTimer = setTimeout(() => {
        setShowHomer(true);
      }, 2000);

      // Ocultar Homero después de 5s (2s delay + 3s visible)
      const hideTimer = setTimeout(() => {
        setShowHomer(false);
      }, 5000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="homer-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            zIndex: 9999,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 0,
          }}
        >
          {/* Solo la imagen de Homero entra y sale */}
          <AnimatePresence>
            {showHomer && (
              <motion.img
                key="homer-img"
                src="/homero.png"
                alt="Homer"
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                transition={{ duration: 6, ease: "easeInOut" }}
                style={{
                  height: "100%",
                  left: "10%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            )}
          </AnimatePresence>

          {/* Botón siempre visible */}
          <button
            onClick={play}
            style={{
              top: 0,
              width: 200,
              height: 400,
              backgroundImage: "url('/homerohungry.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              textIndent: "-9999px",
            }}
          >
            Play Sound
          </button>

          {/* Botón de cierre */}
          <div
            style={{
              position: "fixed",
              top: 20,
              left: 300,
              width: 100,
              height: 100,
              zIndex: 10000,
              cursor: "pointer",
            }}
          >
            <DonutButton onClick={onClose} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
