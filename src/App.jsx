import { useState } from "react";
import DonutButton from "./components/DonutButton";
import BurnsWindow from "./components/BurnsWindow";
import HomerWindow from "./components/HomerWindow";
import BartWindow from "./components/BartWindow";
import SideBart from "./components/SideBart";
import './Css/Global.css'

export default function App(onClick) {
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
      className="relative min-h-screen overflow-hidden mb-0 p-2 md:p-6"
      style={{
        backgroundImage: "url('/simpsoms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DonutButton fijo arriba izquierda */}
      <div className="fixed top-5 left-5 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 z-30 cursor-pointer">
        <DonutButton bitten={bitten} onClick={toggleSideBart} />
      </div>

      <SideBart
        isOpen={sideOpen}
        onClose={() => setSideOpen(false)}
        onClick={() =>toggleSideBart(onClick)}
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
       onClick={() =>toggleSideBart(onClick)}
        src="/burns.png"
      />

      <BartWindow
        isOpen={bartOpen}
        onClose={() => setBartOpen(false)}
        onOpenBart={() => setBartOpen(true)}
         onClick={() =>toggleSideBart(onClick)}
        src="/bartfalling.png"
      />

      <HomerWindow
        isOpen={homerOpen}
        onClose={() => setHomerOpen(false)}
        onOpenHomer={() => setHomerOpen(true)}
        onClick={() =>toggleSideBart(onClick)}
        src="/homero.png"
      />
    </div>
  );
}
