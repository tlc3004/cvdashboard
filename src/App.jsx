import { useState } from "react";
import DonutButton from "./components/DonutButton";
import BurnsWindow from "./components/BurnsWindow";
import HomerWindow from "./components/HomerWindow";
import NelsonModal from "./components/NelsonModal";
import SideBart from "./components/SideBart";

export default function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [burnsOpen, setBurnsOpen] = useState(false);
  const [nelsonOpen, setNelsonOpen] = useState(false);
  const [homerOpen, setHomerOpen] = useState(false);
  const [bitten, setBitten] = useState(false);

  // Controla abrir/cerrar SideBart con mordida
  const toggleSideBart = () => {
    if (!bitten) {
      setBitten(true);
      setSideOpen(prev => !prev);
      setTimeout(() => setBitten(false), 500);
    }
  };

  // Abre Burns y cierra SideBart si está abierto
  const openBurns = () => {
    setBurnsOpen(true);
    setSideOpen(false);
  };

  // Abre Nelson y cierra SideBart si está abierto
  const openNelson = () => {
    setNelsonOpen(true);
    setSideOpen(false);
  };

  // Abre Homer y cierra Burns y SideBart si están abiertos
  const openHomer = () => {
    setHomerOpen(true);
    setBurnsOpen(false);
    setSideOpen(false);
  };

  // Cierra todos modales
  const closeAll = () => {
    setBurnsOpen(false);
    setNelsonOpen(false);
    setHomerOpen(false);
    setSideOpen(false);
  };

  return (
    <div
      className="relative min-h-screen p-6 overflow-hidden m-0"
      style={{
        backgroundImage: "url('/simpsoms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Botón para abrir SideBart */}
      <DonutButton bitten={bitten} onClick={toggleSideBart} />

      {/* SideBart, con botones para abrir modales */}
      <SideBart
        isOpen={sideOpen}
        onClose={() => setSideOpen(false)}
        side="right"
        src="/bart.png"
        onOpenBurns={openBurns}
        onOpenNelson={openNelson}
        onOpenHomer={openHomer}
      />

      {/* Botón para abrir BurnsWindow */}
      <div className="mt-6">
        <DonutButton onClick={openBurns} />
      </div>

      {/* BurnsWindow con botón para abrir HomerWindow */}
      <BurnsWindow
        isOpen={burnsOpen}
        onClose={() => setBurnsOpen(false)}
        onOpenHomer={openHomer}
        src="/homero.png"
      />

      {/* Botón para abrir NelsonModal */}
      <div className="mt-6">
        <DonutButton onClick={openNelson} />
      </div>

      {/* NelsonModal */}
      <NelsonModal isOpen={nelsonOpen} onClose={() => setNelsonOpen(false)} />

      {/* HomerWindow */}
      <HomerWindow isOpen={homerOpen} onClose={() => setHomerOpen(false)} />
    </div>
  );
}
