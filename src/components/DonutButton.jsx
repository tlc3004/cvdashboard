import { useState } from "react";

export default function DonutButton({ onClick }) {
  const [bitte, setBitte] = useState(false);

  const handleClick = () => {
    if (!bitte) {
      setBitte(true);
      if (onClick) onClick();    // <-- Dispara el onClick externo
      setTimeout(() => setBitte(false), 400); // vuelve rápido
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer select-none"
      style={{ width: 100, height: 100 }}
    >
      {bitte ? (
        <img
          src="/dona2.png"
          alt="Donut mordida"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img
          src="/dona1.png"
          alt="Donut normal"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
