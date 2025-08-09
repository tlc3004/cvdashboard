import { useState } from "react";
import useSound from "use-sound";

export default function DonutButton({ onClick }) {
  const [bitten, setBitten] = useState(false);
  const [play] = useSound("/sounds/eating.mp3");

  const handleClick = () => {
    if (!bitten) {
      setBitten(true);
      play();               
      if (onClick) onClick();
      setTimeout(() => setBitten(false), 400);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer select-none"
      style={{ width: 100, height: 100 }}
    >
      {bitten ? (
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
