import { motion, AnimatePresence } from "framer-motion";

import DonutButton from "./DonutButton";

export default function BartWindow({ isOpen, onClose }) {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="bart-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/bartfalling.png')",
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
          
          <DonutButton
            onClick={onClose}
            style={{
              position: "relative",
              marginBottom: "30px",
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
    
          </DonutButton>
         
        </motion.div>
      )}
    </AnimatePresence>
  );
}
