import { motion, AnimatePresence } from "framer-motion";

export default function ModalBart({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
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
            src="/bartfalling-1.png"
            alt="bartfallig"
            style={{
              position: "relative",
              top: -80,
              left: "-100%",
              width: "100%",
              zIndex: 100,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
