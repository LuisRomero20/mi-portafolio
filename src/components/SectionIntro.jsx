export default function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-intro ${align === "center" ? "section-intro--center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-intro__content">
        <h2>{title}</h2>
        {description && <p className="section-intro__description">{description}</p>}
      </div>
    </div>
  );
}
