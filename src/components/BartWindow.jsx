import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ModalHomer from "./ModalHomer";
import DonutButton from "./DonutButton";
import ModalBart from "./ModalBart";

export default function BartWindow({ isOpen, onClose }) {
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
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
