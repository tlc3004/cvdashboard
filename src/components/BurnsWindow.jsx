import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NelsonModal from "./NelsonModal";
import DonutButton from "./DonutButton";

export default function BurnsWindow({ isOpen, onClose, onOpenHomer }) {

  const [nelsonOpen, setNelsonOpen] = useState(true);


    const toggleNelson = () => setNelsonOpen();
    setTimeout(() =>{
      setNelsonOpen();
    }, 200) 

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
          <h1 style={{ color: "white", fontSize: "2rem" }}>Ventana de Burns</h1>
          <DonutButton
            onClick={onClose}
            style={{
              marginTop: 20,
              left: "50%",
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Cerrar Burns
          </DonutButton>
          <DonutButton onClick={onOpenHomer} />
          <div className="mt-6">
                  <DonutButton onClick={toggleNelson} />
                </div>

                  <NelsonModal isOpen={nelsonOpen} />
                
        </motion.div>
      )}
    </AnimatePresence>
  );
}
