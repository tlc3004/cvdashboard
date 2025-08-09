// components/HomerModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import DonutButton from "./DonutButton";

export default function HomerWindow({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="homer-modal"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "40%",
            height: "100%",
            zIndex: 1100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 100,
            background: "linear-gradient(to top, #ffd54f, #ffeb3b)",
            boxShadow: "8px 0 30px rgba(0,0,0,0.25)",
          }}
        >
          <img
            src="/homer.png"
            alt="Homer"
            style={{
              position: "absolute",
              top: -80,
              left: "50%",
              transform: "translateX(-50%)",
              width: "120%",
              height: "auto",
              zIndex: 1110,
            }}
          />

          <div style={{ padding: 20, width: "100%", textAlign: "center" }}>
            <h3>Homer</h3>
            <p>Contenido propio de Homer.</p>
            <div style={{ marginTop: 12 }}>
              <DonutButton onClick={onClose} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
