import { motion, AnimatePresence } from "framer-motion";
import DonutButton from "./DonutButton";

export default function SideBart({ isOpen, onClose, side = "right", src = "/bart.png", onOpenBurns, onOpenHomer, onOpenBart }) {

  const initial = side === "left" ? { x: "-100%" } : { x: "100%" };
  const exit = side === "left" ? { x: "-100%" } : { x: "100%" };
  const sideStyle = side === "left" ? { left: 0 } : { right: 0 };

  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  // Llaman funciones externas, sin más rollos
  const handleOpenBurns = () => onOpenBurns();
  const handleOpenHomer = () => onOpenHomer();
  const handleOpenBart = () => onOpenBart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={initial}
          animate={{ x: 0 }}
          exit={exit}
          transition={{ type: "tween", duration: 2 }}
          style={{
            position: "fixed",
            top: "-20px",
            height: "100vh",
            width: 600,
            zIndex: 1050,
            background: "transparent",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...sideStyle,
          }}
        >
          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "70%", marginTop: 0, marginRight: "-60%" }}
          />

          <div style={{ marginTop: 10, width: "10%", display: "flex", flexDirection: "column", gap: 2, zIndex: 2000 }}>
            <DonutButton
              onClick={handleOpenBurns}
              style={{ width: "20%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Burns
            </DonutButton>

            <DonutButton
              onClick={handleOpenHomer}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Homer
            </DonutButton>

            <DonutButton
              onClick={handleOpenBart}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
              bart
            </DonutButton>

            <DonutButton
              onClick={handleCloseClick}
              style={{ width: "50%", border: "none" }}
            >
              Regresar
            </DonutButton>
          </div>

          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "60%", marginTop: 0, marginRight: "-60%" }}
          />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
