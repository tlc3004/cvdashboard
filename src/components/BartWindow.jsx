import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import ModalHomer from "./ModalHomer";
import DonutButton from "./DonutButton";
import ModalBart from "./ModalBart";

export default function BartWindow({  isOpen, onClose }) {
  const [play] = useSound("/sounds/burpy-rulp.mp3");
  const [homerOpen, setHomerOpen] = useState(false);
  const [bartFall, setBartFall] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setBartFall(true)
      timer = setTimeout(() => setHomerOpen(true), 500);
    } else {
      setHomerOpen(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);



  const homerClose = () => setHomerOpen(false);
  const bartClose = () => setBartFall(false);

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
            backgroundColor:"#fff",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
             <button
              onClick={play}
              style={{
                width: 400,
                height: 600,
                backgroundImage: "url('/duff-1.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                textIndent: "-9999px",
              }}
            >
              Play Sound
            </button>
         
          {/* DonutButton fijo arriba a la izquierda */}
          <div
            style={{
              position: "fixed",
              top: 20,
              left: 20,
              width: 100,
              height: 100,
              zIndex: 10000,
              cursor: "pointer",
            }}
          >
            <DonutButton onClick={onClose} />
          </div>
            <div>
                <ModalBart isOpen={bartFall} onClose={bartClose}/>
            </div>


          <ModalHomer isOpen={homerOpen} onClose={homerClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
