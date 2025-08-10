import { motion, AnimatePresence } from "framer-motion";


export default function ModalHomer({ isOpen}) {
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
            top: "100px",
            right: 0,
            width: "40%",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px",
          }}
        >
    

          <img
            src="/omero.png"
            alt="omero"
            style={{
              position: "relative",
              top: "-50px", 
              left: "10%",
              width: "80%",              
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
