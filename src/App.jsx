// App.jsx
import { useState } from "react";
import DonutButton from "./components/DonutButton";
import DonutBitten from "./components/DonutBitten"
import BurnsWindow from "./components/BurnsWindow"
import HomerWindow from "./components/HomerWindow";

export default function App() {
  const [burnsOpen, setBurnsOpen] = useState(false);
  const [homerOpen, setHomerOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen p-6"
      style={{
        backgroundImage: "url('/simpsoms.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 style={{ color: "white" }}>App (Main)</h1>

      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 20 }}>
        {/* DonutBitten abre BurnsWindow */}
        <DonutBitten bitten={false} onClick={() => setBurnsOpen(true)} />

        {/* DonutButton abre HomerModal (ejemplo) */}
        <DonutButton onClick={() => setHomerOpen(true)} />
      </div>

      {/* BurnsWindow: App solo decide cuándo montarla */}
      <BurnsWindow isOpen={burnsOpen} onClose={() => setBurnsOpen(false)} />

      {/* HomerModal: App decide si mostrarlo (puedes abrirlo también desde BurnsWindow) */}
      <HomerWindow isOpen={homerOpen} onClose={() => setHomerOpen(false)} />
    </div>
  );
}
