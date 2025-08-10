import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import DonutButton from "./DonutButton";

export default function HomerWindow({ isOpen, onClose,  }) {
const [play] = useSound("/sounds/burpy-rulp.mp3");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="homer-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,        
            width: "100%",   
            height: "100%",
            backgroundColor: "#fff",
            zIndex: 9999,
            display: "flex",
            justifyContent: "flex-end",  
            alignItems: "center",
            paddingRight: 0, 
          }}
        >
       
          <img
            src="/homero.png"
            alt="Homer"
            style={{
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
          
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              color: "black",
              Width: "30%",
            }}
          >
            <button
  onClick={play}
  style={{
    top: 0,
    width: 400,
    height: 600,
    left: "10px",
    backgroundImage: "url('/duff.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    textIndent: "-9999px" 
    
  }}
>
  Cerrar Homer
</button>
          </div>
<DonutButton 
  onClick={onClose}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
