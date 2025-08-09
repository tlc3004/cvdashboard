import { motion, AnimatePresence } from "framer-motion";
import DonutBitten from "./DonutBitten";
import BurnsWindow from "./BurnsWindow";
import HomerWindow from "./HomerWindow";
import App from "../App";

export default function SideBart({ isOpen, onClose, side = "right", src = "/bart.png", bitten, onOpenBurns, onOpenHomer, onOpenNelson }) {

  const initial = side === "left" ? { x: "-100%" } : { x: "100%" };
  const exit = side === "left" ? { x: "-100%" } : { x: "100%" };
  const sideStyle = side === "left" ? { left: 0 } : { right: 0 };

  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  // Ahora cada botón llama su función correspondiente y cierra sidebar igual que antes
  const handleOpenBurns = () => {
   onOpenBurns();
    handleCloseClick();
  };

  const handleOpenHomer = () => {
  onOpenHomer();
    handleCloseClick();
  };

  const handleOpenNelson = () => {
    onOpenNelson();
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* 1: Abre BurnsWindow */}
            <DonutBitten bitten={bitten} onClick={handleOpenBurns} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* 2: Abre HomerWindow */}
            <DonutBitten bitten={bitten} onClick={handleOpenHomer} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* 3: Solo cierra SideBart y regresa a App */}
            <DonutBitten bitten={bitten} onClick={handleCloseClick} />
          </div>

          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "70%", marginTop: 20, marginRight: "-50%" }}
          />

          <div style={{ marginTop: 20, width: "100%" }}>
            {/* Aquí los botones con sus handlers sin mover posición ni estilo */}
            <DonutBitten
              onClick={handleOpenBurns}
              style={{ width: "100%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Acción 1
            </DonutBitten>
            <button
              onClick={handleOpenHomer}
              style={{ width: "100%", padding: 10, marginTop: 8, borderRadius: 8, border: "none" }}
            >
              Acción 2
            </button>
            <button
              onClick={handleOpenNelson}
              style={{ width: "100%", padding: 10, marginTop: 8, borderRadius: 8, border: "none" }}
            >
              Acción 3
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
