import { motion, AnimatePresence } from "framer-motion";
import DonutBitten from "./DonutBitten";

export default function SideBart({ isOpen, onClose, side = "right", src = "/bart.png", bitten, onOpenBurns, onOpenHomer, onOpenNelson }) {

  const initial = side === "left" ? { x: "-100%" } : { x: "100%" };
  const exit = side === "left" ? { x: "-100%" } : { x: "100%" };
  const sideStyle = side === "left" ? { left: 0 } : { right: 0 };

  // Cerrar sidebar
  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  // Abrir BurnsWindow y cerrar sidebar
  const handleOpenBurns = () => {
    if (onOpenBurns) onOpenBurns();
    handleCloseClick();
  };

  // Abrir HomerWindow y cerrar sidebar
  const handleOpenHomer = () => {
    if (onOpenHomer) onOpenHomer();
    handleCloseClick();
  };

  // Abrir NelsonModal y cerrar sidebar
  const handleOpenNelson = () => {
    if (onOpenNelson) onOpenNelson();
    handleCloseClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={initial}
          animate={{ x: 0 }}
          exit={exit}
          transition={{ type: "tween", duration: 1 }}
          style={{
            position: "fixed",
            top: 0,
            height: "100vh",
            width: 500,
            zIndex: 1050,
            background: "white",
            boxShadow:
              side === "left"
                ? "8px 0 30px rgba(0,0,0,0.25)"
                : "-8px 0 30px rgba(0,0,0,0.25)",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...sideStyle,
          }}
        >
          <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <DonutBitten bitten={bitten} onClick={handleCloseClick} />
          </div>

          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "70%", marginTop: 20, marginRight: "-50%" }}
          />

          <div style={{ marginTop: 80, width: "100%" }}>
            <button
              onClick={handleOpenBurns}
              style={{ width: "100%", padding: 10, borderRadius: 8, border: "none", marginBottom: 8 }}
            >
              Abrir BurnsWindow
            </button>
            <button
              onClick={handleOpenHomer}
              style={{ width: "100%", padding: 10, borderRadius: 8, border: "none", marginBottom: 8 }}
            >
              Abrir HomerWindow
            </button>
            <button
              onClick={handleOpenNelson}
              style={{ width: "100%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Abrir NelsonModal
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
