import "./ui.css";

function Tag({ children, className = "", tone = "default", ...props }) {
  const toneClassName = tone === "default" ? "" : `ui-tag-${tone}`;
  const classes = ["ui-tag", toneClassName, className].filter(Boolean).join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export default Tag;
