import { motion, AnimatePresence, color } from "framer-motion";


export default function NelsonModal({ isOpen}) {
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
            top: "100px",
            right: 0,
            width: "40%",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px", // espacio para la imagen encima
          }}
        >
    

          <img
            src="/nelson.png"
            alt="nelson"
            style={{
              position: "relative",
              top: "-80px", 
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
          </div>
      
        </motion.div>
      )}
    </AnimatePresence>
  );
}
