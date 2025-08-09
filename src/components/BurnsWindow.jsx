// components/BurnsWindow.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonutBitten from "./DonutBitten";
import DonutButton from "./DonutButton";
import SideBart from "./SideBart";
import NelsonModal from "./NelsonModal";
import HomerModal from "./HomerModal";

export default function BurnsWindow({ isOpen, onClose }) {
  // estados internos de la ventana (autónoma)
  const [sideRightOpen, setSideRightOpen] = useState(false);
  const [sideLeftOpen, setSideLeftOpen] = useState(false);
  const [nelsonOpen, setNelsonOpen] = useState(false);
  const [homerOpen, setHomerOpen] = useState(false);

  // bloqueos para evitar retrigger rápido visual (opcional)
  const [btnBusy, setBtnBusy] = useState(false);

  const triggerWithLock = (cb) => {
    if (btnBusy) return;
    setBtnBusy(true);
    cb();
    setTimeout(() => setBtnBusy(false), 350); // bloqueo corto
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="burns-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/burns.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* overlay oscuro para separar del fondo */}
          <div
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
            }}
          />

          {/* panel central (donde "Nelson" puede apoyarse por encima) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "relative",
              width: "min(1100px, 94vw)",
              height: "80vh",
              background: "rgba(255,255,255,0.95)",
              borderRadius: 12,
              padding: 24,
              zIndex: 1010,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen de Nelson "echada" en el tope */}
            <img
              src="/nelson.png"
              alt="Nelson"
              style={{
                position: "absolute",
                top: -60,
                left: "50%",
                transform: "translateX(-50%) rotate(-6deg)",
                width: 220,
                zIndex: 1020,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />

            {/* Header con botones locales */}
            <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0 }}>Ventana Burns</h2>

              <div style={{ display: "flex", gap: 8 }}>
                {/* abrir/hide SideBart derecho */}
                <DonutButton onClick={() => triggerWithLock(() => setSideRightOpen((s) => !s))} />
                {/* abrir/hide SideBart izquierdo */}
                <DonutBitten bitten={false} onClick={() => triggerWithLock(() => setSideLeftOpen((s) => !s))} />
                {/* abrir NelsonModal */}
                <DonutButton onClick={() => triggerWithLock(() => setNelsonOpen(true))} />
                {/* abrir HomerModal dentro de Burns */}
                <DonutButton onClick={() => triggerWithLock(() => setHomerOpen(true))} />
                {/* volver a App */}
                <button
                  onClick={() => onClose()}
                  style={{
                    padding: "8px 12px",
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  Volver a App
                </button>
              </div>
            </div>

            {/* cuerpo principal */}
            <div style={{ flex: 1, display: "flex", gap: 12, marginTop: 12 }}>
              <div style={{ flex: 1, padding: 12 }}>
                <p>Contenido principal de Burns — controla sus modales y sidebars internamente.</p>
                <p>Los botones arriba abren SideBarts/Modals propios.</p>
              </div>

              <aside style={{ width: 220, padding: 12, background: "rgba(0,0,0,0.03)", borderRadius: 8 }}>
                <strong>Accesos rápidos</strong>
                <div style={{ marginTop: 8 }}>
                  <button style={{ width: "100%", padding: 8, borderRadius: 6 }}>Acción 1</button>
                </div>
              </aside>
            </div>

            {/* footer */}
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <small style={{ color: "#666" }}>Burns window — escena autónoma</small>
            </div>
          </motion.div>

          {/* SideBart derecho */}
          <SideBart
            isOpen={sideRightOpen}
            onClose={() => setSideRightOpen(false)}
            side="right"
            src="/bart.png"
          />

          {/* SideBart izquierdo */}
          <SideBart
            isOpen={sideLeftOpen}
            onClose={() => setSideLeftOpen(false)}
            side="left"
            src="/bart1.png"
          />

          {/* Nelson modal */}
          <NelsonModal isOpen={nelsonOpen} onClose={() => setNelsonOpen(false)} />

          {/* Homer modal dentro de Burns */}
          <HomerModal isOpen={homerOpen} onClose={() => setHomerOpen(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
