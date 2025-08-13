
import { motion, AnimatePresence } from "framer-motion";

export default function ModalHomer({isOpen}) {
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 100,
            right: 0,
            width: "40%",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 80,
            color: "#000",
            textAlign: "center",
          }}
        >
          <img
       
            src="/omero.png"
            alt="Homero"
            style={{
              position: "relative",
              top: -50,
              left: "10%",
              width: "80%",
              zIndex: 100,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
