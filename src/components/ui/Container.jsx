import "./ui.css";

const sizeToWidth = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
};

function Container({
  as: Component = "div",
  children,
  className = "",
  size = "lg",
  style,
  ...props
}) {
  const width = sizeToWidth[size] ?? sizeToWidth.lg;

  return (
    <Component
      className={["ui-container", className].filter(Boolean).join(" ")}
      style={{ "--ui-container-width": width, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
