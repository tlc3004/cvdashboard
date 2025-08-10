import { useState } from "react";
import useSound from "use-sound";

export default function DonutBurpy({ onClick }) {
  const [bitten, setBitten] = useState(false);
  const [musik] = useSound("/sounds/burpy-rulp.mp3");

  const handleClick = () => {
    if (!bitten) {
      setBitten(true);
      musik();               
      if (onClick) onClick();
      setTimeout(() => setBitten(false), 600);
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
