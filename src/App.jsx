import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonutButton from "./components/DonutButton";
import DonutBitten from "./components/DonutBitten";
import BurnsWindow from "./components/BurnsWindow";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [bitten, setBitten] = useState(false);
  const [burnsOpen, setBurnsOpen] = useState(false);
  const [bitte, setBitte] = useState(false);

  const handlePanelToggle = () => {
    if (!bitten) {
      setBitten(true);
      setIsOpen((prev) => !prev);
      setTimeout(() => setBitten(false), 500);
    }
  };

  const handleBurnsToggle = () => {
    if (!bitte) {
      setBitte(true);
      setBurnsOpen((prev) => !prev);
      setTimeout(() => setBitte(false), 500);
    }
  };

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
      {/* Botón que abre panel lateral */}
      <DonutBitten bitten={bitten} onClick={handlePanelToggle} />

      {/* Panel lateral */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, exit: { duration: 2 } }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 p-4 flex flex-col rounded-md items-center"
          >
            <img
              src="/bart.png"
              alt="Bart mirando"
              className="w-40 mt-6 object-contain translate-x-20"
            />
            <DonutButton bitten={bitten} onClick={() => {}} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Botón que abre modal full screen */}
      <div className="mt-6">
        <DonutButton bitte={bitte} onClick={handleBurnsToggle} />
      </div>

      {/* Modal full screen */}
      <BurnsWindow isOpen={burnsOpen} onClose={() => setBurnsOpen(false)}>
        <h1 style={{ color: "black" }}>¡Hola, soy Burns!</h1>
        <p>Este modal ocupa toda la pantalla.</p>
      </BurnsWindow>
    </div>
  );
}

export default App;
