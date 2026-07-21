import "./ui.css";

function Metric({ value, label, className = "" }) {
  return (
    <div className={["ui-metric", className].filter(Boolean).join(" ")}>
      <strong className="ui-metric-value">{value}</strong>
      <span className="ui-metric-label">{label}</span>
    </div>
  );
}

export default Metric;
