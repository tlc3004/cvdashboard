import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalHomerAuto() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abre después de 2 segundos
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Cierra después de 5 segundos (2s delay + 3s visible)
    const closeTimer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 100,
            right: 0,
            width: "40%",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            color: "#000",
            textAlign: "center",
          }}
        >
          <img
            src="/omero.png"
            alt="Homero"
            style={{
              position: "relative",
              top: -50,
              left: "10%",
              width: "80%",
              zIndex: 100,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
