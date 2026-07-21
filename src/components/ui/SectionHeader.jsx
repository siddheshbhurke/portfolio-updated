import "./ui.css";

function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  titleId,
  children,
}) {
  return (
    <header className={["ui-section-header", className].filter(Boolean).join(" ")}>
      {eyebrow && <p className="ui-section-header-kicker">{eyebrow}</p>}
      {title && (
        <h2 id={titleId} className="ui-section-header-title">
          {title}
        </h2>
      )}
      {description && <p className="ui-section-header-description">{description}</p>}
      {children}
    </header>
  );
}

export default SectionHeader;
