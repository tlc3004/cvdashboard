import { motion, AnimatePresence } from "framer-motion";
import DonutBitten from "./DonutBitten";


export default function SideBart({ isOpen, onClose, side = "right", src = "/bartred.png", onOpenBurns, onOpenHomer, onOpenNelson }) {

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
            background: "transparent",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...sideStyle,
          }}
        >
          {/* Solo imagen de Bart */}
          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "60%", marginTop: 0, marginRight: "-60%" }}
          />

          {/* Botones principales */}
          <div style={{ marginTop: 10, width: "40%", display: "flex", flexDirection: "column", gap: 2 }}>
            <DonutBitten
              onClick={handleOpenBurns}
              style={{ width: "100%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Burns
            </DonutBitten>
            <DonutBitten
              onClick={handleOpenHomer}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Homer
            </DonutBitten>
            <DonutBitten
              onClick={handleCloseClick}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Regresar
            </DonutBitten>
          </div>

          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "60%", marginTop: 0, marginRight: "-60%" }}
          />

          <div style={{ marginTop: 50, width: "50%" }}>
            {/* Aquí los botones con sus handlers sin mover posición ni estilo */}
            <DonutBitten
              onClick={handleOpenBurns}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
            </DonutBitten>
            <DonutBitten
              onClick={handleOpenHomer}
              style={{ width: "50%", padding: 10, marginTop: 8, borderRadius: 8, border: "none" }}
            >
            </DonutBitten>
            <DonutBitten
              onClick={handleOpenNelson}
              style={{ width: "50%", padding: 10, marginTop: 8, borderRadius: 8, border: "none" }}
            >
            </DonutBitten>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
