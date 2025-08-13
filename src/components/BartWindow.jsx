import { motion, AnimatePresence } from "framer-motion";

import useSound from "use-sound";
import ModalHomer from "./ModalHomer";
import DonutButton from "./DonutButton";
import ModalBart from "./ModalBart";
import NavBart from "./NavBart";

export default function BartWindow({ isOpen, onClose }) {
  const [play] = useSound("/sounds/burpy-rulp.mp3");
 

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="bart-window"
          className="fixed inset-0 bg-white flex justify-center items-center z-50"
        >
          {/* Botón Duff arriba de Homero */}
          <button
            onClick={play}
            className="relative top-0 left-9 w-[500px] h-[500px] bg-cover bg-no-repeat bg-center border-none rounded-md cursor-pointer"
            style={{ backgroundImage: "url('/duff-1.png')" }}
          >
          </button>

          {/* DonutButton fijo arriba izquierda */}
          <div className="fixed top-5 right-5 w-24 h-24 md:w-28 md:h-28 z-50 cursor-pointer">
            <DonutButton onClick={onClose} />
          </div>

          {/* Homero */}
          <div className="relative z-10">
            <ModalHomer isOpen={onClose}/>
          </div>

          {/* Bart cayendo encima de Homero */}
     
                <ModalBart  isOpen={onClose} />
         
                <NavBart/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
