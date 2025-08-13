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
      }, 100);

      // Ocultar Homero después de 5s (2s delay + 3s visible)


      return () => {
        clearTimeout(showTimer);
      
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
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                exit={{ x: 900 }}
                transition={{ duration: 3, ease: "easeOut" }}
                style={{
                  height: "100%",
                  left: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
          </AnimatePresence>

        
          <button
            onClick={play}
              className="absolute top-5 left-2  w-90 h-40 md:w-48 md:h-48 bg-cover bg-no-repeat bg-center border-none rounded-md cursor-pointer z-40"
            style={{ backgroundImage: "url('/homerohungry.png')" }}
          >
          </button>

          {/* Botón de cierre */}
          <div
            style={{
              position: "fixed",
              top: 50,
              left: 200,
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
