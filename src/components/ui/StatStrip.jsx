import Metric from "./Metric";
import "./ui.css";

function StatStrip({ stats = [], className = "", labelledBy }) {
  return (
    <div
      className={["ui-stat-strip", className].filter(Boolean).join(" ")}
      style={{ "--ui-stat-count": stats.length }}
      aria-labelledby={labelledBy}
    >
      {stats.map((stat) => (
        <Metric key={`${stat.value}-${stat.label}`} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

export default StatStrip;
