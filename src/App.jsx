// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideBart from "./components/SideBart";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      <button
        onClick={() => togglePanel(isOpen) }
        className="fixed top-6 right-[300px] w-20 h-20 rounded-full bg-no-repeat bg-cover bg-center shadow-lg hover:scale-105 transition-transform duration-300"
        style={{backgroundImage:"url('/donat.png')"}}
      >
       
      </button>

      {/* PANEL SLIDER CON BART */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 right-[-5%] w-72 h-full bg-white shadow-xl z-50 p-4 flex flex-col items-center"
          >
            <img
              src="/bart.png"
              alt="Bart mirando"
              className="w-40 mt-6 object-contain translate-x-6"
            />
            <p className="mt-4 text-center text-gray-700 font-semibold">
              ¡Ey! ¿Quién eres tú?
            </p>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
