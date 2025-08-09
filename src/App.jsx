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

  const toggleSideBart = () => {
    if (!bitten) {
      setBitten(true);
      setSideOpen(prev => !prev);
      setTimeout(() => setBitten(false), 500);
    }
  };


  const toggleBurns = () => setBurnsOpen(prev => !prev);

  const toggleNelson = () => setNelsonOpen(prev => !prev);


  const toggleHomer = () => setHomerOpen(prev => !prev);

  return (
    <div
      className="relative min-h-screen p-6 overflow-hidden m-0 p-0"
      style={{
        backgroundImage: "url('/simpsoms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <DonutButton bitten={bitten} onClick={toggleSideBart} />

     
      <SideBart isOpen={sideOpen} onClose={() => setSideOpen(false)} side="right" src="/bart.png" />

     
      <div className="b-6">
        <DonutButton onClick={toggleBurns} />
      </div>

     
      <BurnsWindow isOpen={burnsOpen} onClose={() => setBurnsOpen(false)} onOpenHomer={toggleHomer} src="/homero.png" />

    
      <div className="mt-6">
        <DonutButton onClick={toggleNelson} />
      </div>

  
      <NelsonModal isOpen={nelsonOpen} />


      <HomerWindow isOpen={homerOpen} onClose={() => setHomerOpen(false)} />
    </div>
  );
}
