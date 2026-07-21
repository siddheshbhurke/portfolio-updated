import "./ui.css";

function Card({
  as: Component = "article",
  children,
  className = "",
  interactive = false,
  padded = true,
  ...props
}) {
  const classes = [
    "ui-card",
    padded && "ui-card-padded",
    interactive && "ui-card-interactive",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Card;
