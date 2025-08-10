import { motion, AnimatePresence } from "framer-motion";
import DonutBurpy from "./DonutBurpy";
import HomerWindow from "./HomerWindow";
import BurnsWindow from "./BurnsWindow";
import BartWindow from "./BartWindow";


export default function SideBart({ isOpen, onClose, side = "right", src = "/bart.png", onOpenBurns, onOpenHomer, onOpenBart }) {

  const initial = side === "left" ? { x: "-100%" } : { x: "100%" };
  const exit = side === "left" ? { x: "-100%" } : { x: "100%" };
  const sideStyle = side === "left" ? { left: 0 } : { right: 0 };

  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  // Ahora cada botón llama su función correspondiente y cierra sidebar igual que antes
  const handleOpenBurns = () => {
   onOpenBurns();
  };

  const handleOpenHomer = () => {
  onOpenHomer();
  
  };

  const handleOpenBart = () => {
  onOpenBart();
  
  };

    
  

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
          {/* Solo imagen de Bart */}
          <img
            src={src}
            alt="Bart"
            style={{ position: "absolute", width: "70%", marginTop: 0, marginRight: "-60%" }}
          />

          {/* Botones principales */}
          <div style={{ marginTop: 10, width: "10%", display: "flex", flexDirection: "column", gap: 2, zIndex: 2000 }}>
            <DonutBurpy
              onClick={handleOpenBurns}
              style={{ width: "20%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Burns
            </DonutBurpy>
            <BurnsWindow/>
            <DonutBurpy
              onClick={handleOpenHomer}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
              Homer
            </DonutBurpy>
            <HomerWindow/>
            <DonutBurpy
              onClick={handleOpenBart}
              style={{ width: "50%", padding: 10, borderRadius: 8, border: "none" }}
            >
              bart
            </DonutBurpy>
            <BartWindow/>
            <DonutBurpy
              onClick={handleCloseClick}
              style={{ width: "50%",  border: "none" }}
            >
              Regresar
            </DonutBurpy>
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
