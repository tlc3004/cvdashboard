export default function DonutBitten({ bitten, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ width: 100, height: 100, cursor: "pointer", userSelect: "none" }}
    >
      <img
        src={bitten ? "/dona2.png" : "/dona1.png"}
        alt={bitten ? "Donut mordida" : "Donut normal"}
        style={{ width: "100%", height: "100%", display: "block" }}
        draggable={false}
      />
    </div>
  );
}
