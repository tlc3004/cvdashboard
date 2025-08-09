
import { motion, AnimatePresence } from "framer-motion";
import DonutBitten from "./DonutBitten";

export default function SideBart({ isOpen, onClose, side = "right", src = "/bart.png", bitten }) {


  const initial = side === "left" ? { x: "-100%" } : { x: "100%" };
  const exit = side === "left" ? { x: "-100%" } : { x: "100%" };
  const sideStyle = side === "left" ? { left: 0 } : { right: 0 };


  const handleCloseClick = () => {
    if (onClose) onClose();  
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
            <DonutBitten bitten={bitten} onClick={handleCloseClick} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DonutBitten bitten={bitten} onClick={handleCloseClick} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DonutBitten bitten={bitten} onClick={handleCloseClick} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
      
            <DonutBitten bitten={bitten} onClick={handleCloseClick} />
          </div>

          <img
            src={src}
            alt="Bart"
            style={{position:"absolute", width: "70%", marginTop: 20, marginRight: "-50%" }}
          />

          <div style={{ marginTop: 20, width: "100%" }}>
            <button
              onClick={handleCloseClick}
              style={{ width: "100%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Acción 1
            </button>
            <button
              style={{ width: "100%", padding: 10, marginTop: 8, borderRadius: 8, border: "none" }}
            >
              Acción 2
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
