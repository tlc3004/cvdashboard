import { motion, AnimatePresence, color } from "framer-motion";
import DonutButton from "./DonutButton";

export default function HomerModal({ isOpen}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: "80px",
            left: "60%",
            right: 0,
            width: "40%",
            height: "100%",
            backgroundColor: "white",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px", // espacio para la imagen encima
          }}
        >
    

          {/* Imagen “echada” encima */}
          <img
            src="/omero.png"
            alt="Omero"
            style={{
              position: "relative",
              top: "-410px", // se sale 60px arriba del modal
              left: "0%",
              width: "100%",
              height: "auto",
              
              zIndex: 100,
            }}
          />

          <div
            style={{
              width: "100%",
              padding: 20,
              flexGrow: 1,
              textAlign:"center",
              color:"#000"
            }}
          >
            tumare
          </div>
          {/* Contenido del modal */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
