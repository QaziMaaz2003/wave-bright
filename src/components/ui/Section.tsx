/** → core/group (align: full) wrapping a constrained inner container */
export function Section({
  id,
  variant,
  children,
}: {
  id?: string;
  variant?: 'alt' | 'tight';
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`wb-section${variant ? ` wb-section--${variant}` : ''}`}>
      <div className="wb-container">{children}</div>
    </section>
  );
}

/** Eyebrow + H2 + intro paragraph block heading */
export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="wb-section__head">
      <span className="wb-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}
