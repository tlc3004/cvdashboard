import { motion, AnimatePresence } from "framer-motion";

export default function NelsonModal({ isOpen }) {
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
            left: 850,
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
            src="/nelson.png"
            alt="nelson"
            style={{
              position: "relative",
              top: 60,
              width: "70%",
              height: "auto",
              zIndex: 100,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
