import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonutButton from "./components/DonutButton";
import DonutBitten from "./components/DonutBitten";
import HomerModal from "./components/HomerModal";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Panel lateral
  const [bitten, setBitten] = useState(false); // Estado mordida (compartido)
  const [modalOpen, setModalOpen] = useState(false); // Modal inferior
  const [bitte, setBitte] = useState(false); // Modal inferior

  // Handler para abrir/cerrar panel lateral
  const handlePanelToggle = () => {
    if (!bitten) {
      setBitten(true);
      setIsOpen((prev) => !prev);
      setTimeout(() => setBitten(false), 500);
    }
  };

  // Handler para abrir/cerrar modal inferior
  const handleModalToggle = () => {
    if (!bitte ) {
      setBitte(true); 
      setModalOpen((prev) => !prev);
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
      {/* Botón para abrir/cerrar panel lateral */}
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
            {/* Botones dentro del panel lateral SIN funcionalidad */}
            <DonutButton bitten={bitten} onClick={() => {}}
            className="absolute flex flex-items  bottom-1"
            />
          
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Botón para abrir/cerrar modal inferior */}
      <div className="mt-6">
        <DonutButton bitte={bitte}
          onClick={handleModalToggle}
          className="px-4 py-2 ml-5"
        >
        </DonutButton>
      </div>

      {/* Modal inferior */}
      <HomerModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        
        {/* Botón dentro del modal SIN funcionalidad */}
        <DonutBitten bitte={bitte} onClick={() => {}} />
      </HomerModal>
    </div>
  );
}

export default App;
