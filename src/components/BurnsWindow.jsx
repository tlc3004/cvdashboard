import { motion, AnimatePresence } from "framer-motion";
import HomerModal from "./HomerModal";
import SideBart from "./SideBart";

export default function BurnsWindow({ isOpen, onClose }) {
  
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
          {/* Contenido de la ventana */}
          <h1 style={{ color: "white", fontSize: "2rem" }}>Ventana de Burns</h1>
          <button
            onClick={onClose}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
