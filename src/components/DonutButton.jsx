import { useState } from "react";
import useSound from "use-sound";

export default function DonutButton({ onClick }) {
  const [bitte, setBitte] = useState(false);
  const [play] = useSound("/sounds/eating.mp3");

  const handleClick = () => {
    if (!bitte) {
      setBitte(true);
      play();              
      if (onClick) onClick();
      setTimeout(() => setBitte(false), 600);
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
