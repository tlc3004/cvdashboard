import { useState } from "react";
import DonutButton from "./components/DonutButton";
import BurnsWindow from "./components/BurnsWindow";
import HomerWindow from "./components/HomerWindow";
import BartWindow from "./components/BartWindow";
import SideBart from "./components/SideBart";

export default function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [burnsOpen, setBurnsOpen] = useState(false);
  const [homerOpen, setHomerOpen] = useState(false);
  const [bartOpen, setBartOpen] = useState(false);
  const [bitten, setBitten] = useState(false);

  const toggleSideBart = () => {
    if (!bitten) {
      setBitten(true);
      setSideOpen(prev => !prev);
      setTimeout(() => setBitten(false));
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden mb-0"
      style={{
        backgroundImage: "url('/simpsoms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DonutButton fijo arriba izquierda */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          width: 100,
          height: 100,
          zIndex: 3000,
          cursor: "pointer",
        }}
      >
        <DonutButton bitten={bitten} onClick={toggleSideBart} />
      </div>

      <SideBart
        isOpen={sideOpen}
        onClose={() => setSideOpen(false)}
        side="right"
        src="/bart.png"
        bitten={bitten}
        onOpenBurns={() => setBurnsOpen(true)}
        onOpenHomer={() => setHomerOpen(true)}
        onOpenBart={() => setBartOpen(true)}
      />

      <BurnsWindow
        isOpen={burnsOpen}
        onClose={() => setBurnsOpen(false)}
        onOpenHomer={toggleSideBart}
        src="/burns.png"
      />

      <BartWindow
        isOpen={bartOpen}
        onClose={() => setBartOpen(false)}
        onOpenBart={() => setBartOpen(true)}
        src="/bartfalling.png"
      />

      <HomerWindow
        isOpen={homerOpen}
        onClose={() => setHomerOpen(false)}
        onOpenHomer={() => setHomerOpen(true)}
        src="/homero.png"
      />
    </div>
  );
}
