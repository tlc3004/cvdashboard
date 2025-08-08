import { useState } from "react";

export default function DonutButton() {
  const [bitten, setBitten] = useState(false);

  const handleClick = () => {
    if (!bitten) {
      setBitten(true);
      setTimeout(() => setBitten(false), 700); // vuelve rápido
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer select-none"
      style={{ width: 150, height: 150 }}
    >
      {bitten ? (
        <img
          src="/donuts.png"
          alt="Donut mordida"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img
          src="/donita.png"
          alt="Donut normal"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
