import "./ui.css";

const variantClassNames = {
  primary: "ui-button-primary",
  secondary: "ui-button-secondary",
  ghost: "ui-button-ghost",
};

function Button({
  as: Component = "button",
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const variantClassName = variantClassNames[variant] ?? variantClassNames.primary;
  const classes = ["ui-button", variantClassName, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Button;
