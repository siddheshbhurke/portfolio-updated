import Card from "./Card";
import "./ui.css";

function IconCard({
  as,
  icon,
  title,
  description,
  tone = "var(--color-olive)",
  className = "",
  children,
  ...props
}) {
  return (
    <Card
      as={as}
      className={["ui-icon-card", className].filter(Boolean).join(" ")}
      interactive
      style={{ "--ui-icon-card-tone": tone }}
      {...props}
    >
      {icon && <span className="ui-icon-card-icon">{icon}</span>}
      <div>
        <h3 className="ui-icon-card-title">{title}</h3>
        {description && <p className="ui-icon-card-description">{description}</p>}
      </div>
      {children}
    </Card>
  );
}

export default IconCard;
