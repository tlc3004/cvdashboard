// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonutButton from './components/DonutButton'
import DonutBitten from "./components/DonutBitten";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [bitten, setBitten] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  const handleClick = () => {
    if (!bitten) {
      setBitten(true);
      setTimeout(() => setBitten(false), 500);
    }
  };

  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      <button
        onClick={() => togglePanel(isOpen) }
        className="fixed top-6 right-[300px] w-20 h-20 rounded-full bg-no-repeat bg-cover bg-center shadow-lg hover:scale-105 transition-transform duration-300"
        style={{backgroundImage:"url('/donita.png')"}}
      >
       
      </button>

      {/* PANEL SLIDER CON BART */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1 }}
            className="fixed top-0 right-[-3%] w-72 h-full bg-white shadow-xl z-50 p-4 flex flex-col items-center"
          >
            <img
              src="/bart.png"
              alt="Bart mirando"
              className="w-40 mt-6 object-contain translate-x-6"
            />
          
          </motion.aside>
        )}
        <div className="flex gap-4 p-6">
      <DonutButton bitten={bitten} onClick={handleClick} />
      <DonutBitten bitten={bitten} onClick={handleClick} />
    </div>

      
      </AnimatePresence>
    </div>
  );
}

export default App;
