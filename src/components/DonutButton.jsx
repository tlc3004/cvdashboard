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
      setTimeout(() => setBitte(false), 1000);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer select-none"
      style={{ width: 100, height: 100 }}
    >
      <img
        src={bitte ? "/dona2.png" : "/dona1.png"}
        alt={bitte ? "Donut mordida" : "Donut normal"}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
