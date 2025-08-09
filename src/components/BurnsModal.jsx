import { motion, AnimatePresence } from "framer-motion";

export default function BurnsModal({ isOpen, onClose, children }) {
  return (
     <div
      className="relative min-h-screen p-6 overflow-hidden"
      style={{
        backgroundImage: "url('/simpsoms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <AnimatePresence >
      {isOpen && (
        <motion.div
          key="fullscreen-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={onClose} // Cierra modal al clickear fondo
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al click en contenido
            style={{
              background: "#fff",
              borderRadius: 10,
              padding: 20,
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
