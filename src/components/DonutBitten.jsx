export default function DonutBitten({ bitten, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ width: 150, height: 150, cursor: "pointer", userSelect: "none" }}
    >
      <img
        src={bitten ? "/donuts.png" : "/donita.png"}
        alt={bitten ? "Donut mordida" : "Donut normal"}
        style={{ width: "100%", height: "100%", display: "block" }}
        draggable={false}
      />
    </div>
  );
}
