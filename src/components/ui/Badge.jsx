import "./ui.css";

function Badge({ children, className = "", tone = "default", ...props }) {
  const toneClassName = tone === "default" ? "" : `ui-badge-${tone}`;
  const classes = ["ui-badge", toneClassName, className].filter(Boolean).join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export default Badge;
