/**
 * Reusable section patterns. Each maps to a WordPress block pattern
 * (register in /patterns/*.php, or save as a Synced Pattern in the editor).
 */
import { Link } from 'react-router-dom';
import { siteInfo } from '../content/site';
import { Accent } from '../components/ui/Accent';
import { Button } from '../components/ui/Button';
import { CountUp } from '../components/ui/CountUp';
import { Gallery, type GalleryItem } from '../components/ui/Gallery';
import { Icon, type IconName } from '../components/ui/Icon';
import { Section, SectionHead } from '../components/ui/Section';
import { TowerDiagram } from '../components/ui/TowerDiagram';

type Cta = { label: string; to: string };
export type Stat = { to: number; suffix?: string; label: string };

/* Pattern: hero-cover  → core/cover + core/heading + core/buttons + stats columns */
export function Hero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  primary,
  secondary,
  stats,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  primary: Cta;
  secondary: Cta;
  stats: Stat[];
}) {
  return (
    <section className="wb-hero">
      <div className="wb-hero__bg">
        <img src={image} alt={imageAlt} fetchPriority="high" />
      </div>
      <div className="wb-container">
        <div className="wb-hero__content">
          <span className="wb-eyebrow">{eyebrow}</span>
          <h1>
            <Accent text={title} />
          </h1>
          <p className="wb-hero__text">{text}</p>
          <div className="wb-btns">
            <Button to={primary.to}>{primary.label}</Button>
            <Button to={secondary.to} variant="ghost">
              {secondary.label}
            </Button>
          </div>
        </div>
        <div className="wb-stats" role="list">
          {stats.map((s) => (
            <div className="wb-stat" role="listitem" key={s.label}>
              <div className="wb-stat__value">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="wb-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pattern: page-hero → core/cover (full first screen) */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imagePosition,
  chips,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  /** CSS object-position for the background photo, e.g. 'center 12%' */
  imagePosition?: string;
  chips?: { label: string; href: string }[];
  /** optional strip pinned to the bottom edge of the hero (stats, quick actions) */
  children?: React.ReactNode;
}) {
  return (
    <section className="wb-pagehero">
      <div className="wb-pagehero__bg">
        <img src={image} alt="" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
      </div>
      <div className="wb-container wb-pagehero__inner">
        <span className="wb-eyebrow">{eyebrow}</span>
        <h1>
            <Accent text={title} />
          </h1>
        <p>{text}</p>
        {chips && (
          <nav className="wb-chips" aria-label="On this page">
            {chips.map((c) => (
              <a key={c.href} href={c.href}>
                {c.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      {children}
    </section>
  );
}

/* Pattern: numbered-cards → core/columns (3) of core/group */
export function CardGrid({
  id,
  eyebrow,
  title,
  intro,
  items,
  alt,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: { icon?: IconName; title: string; text: string; to?: string }[];
  alt?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Section id={id} variant={alt ? 'alt' : undefined}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <div className="wb-grid wb-grid--3">
        {items.map((item, i) => (
          <article className="wb-card" key={item.title}>
            <div className="wb-card__top">
              {item.icon && (
                <span className="wb-card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
              )}
              <span className="wb-card__num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.to && (
              <Link className="wb-card__link" to={item.to}>
                Learn more
                <Icon name="arrow" size={14} />
              </Link>
            )}
          </article>
        ))}
      </div>
      {children}
    </Section>
  );
}

/* Pattern: stats-band → core/columns (4) with count-up numbers */
export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="wb-statsband">
      <div className="wb-container">
        <div className="wb-statsband__grid" role="list">
          {stats.map((s) => (
            <div className="wb-statsband__item" role="listitem" key={s.label}>
              <div className="wb-stat__value">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="wb-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pattern: callout → core/group with accent border + icon + text */
export function Callout({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return (
    <aside className="wb-callout">
      <span className="wb-callout__icon">
        <Icon name={icon} size={28} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </aside>
  );
}

/* Pattern: site-anatomy → core/columns: Custom HTML (SVG) + ordered list */
export function Anatomy({
  eyebrow,
  title,
  intro,
  items,
  plain,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: { title: string; text: string }[];
  plain?: boolean;
}) {
  return (
    <Section id="anatomy" variant={plain ? undefined : 'alt'}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <div className="wb-anatomy">
        <div className="wb-anatomy__figure">
          <TowerDiagram />
        </div>
        <ol className="wb-anatomy__list">
          {items.map((item, i) => (
            <li key={item.title}>
              <span className="wb-anatomy__n">{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* Pattern: photo-mosaic → core/gallery */
export function GallerySection({
  eyebrow,
  title,
  intro,
  items,
  alt,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: GalleryItem[];
  alt?: boolean;
  cta?: Cta;
}) {
  return (
    <Section variant={alt ? 'alt' : undefined}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <Gallery items={items} />
      {cta && (
        <div className="wb-btns wb-section__foot">
          <Button to={cta.to}>{cta.label}</Button>
        </div>
      )}
    </Section>
  );
}

/* Pattern: quick-actions → core/columns (3) of linked core/group */
export function QuickActions({
  items,
}: {
  items: { icon: IconName; title: string; text: string; action: { label: string; href: string } }[];
}) {
  return (
    <section className="wb-quick">
      <div className="wb-container">
        <div className="wb-quick__grid">
          {items.map((q) => (
            <a key={q.title} className="wb-quick__item" href={q.action.href}>
              <span className="wb-card__icon">
                <Icon name={q.icon} size={24} />
              </span>
              <div>
                <h3>{q.title}</h3>
                <p>{q.text}</p>
                <span className="wb-quick__action">
                  {q.action.label}
                  <Icon name="arrow" size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pattern: checklist → core/list */
export function Checklist({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`wb-checklist${columns === 2 ? ' wb-checklist--2' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Pattern: media-text → core/media-text */
export function Split({
  id,
  eyebrow,
  title,
  paragraphs = [],
  list,
  listColumns,
  image,
  imageAlt,
  reverse,
  cta,
  alt,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  listColumns?: 1 | 2;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: Cta;
  alt?: boolean;
}) {
  return (
    <Section id={id} variant={alt ? 'alt' : undefined}>
      <div className={`wb-split${reverse ? ' wb-split--reverse' : ''}`}>
        <div className="wb-split__media">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
        <div className="wb-split__body">
          <span className="wb-eyebrow">{eyebrow}</span>
          <h2>
            <Accent text={title} />
          </h2>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {list && <Checklist items={list} columns={listColumns} />}
          {cta && (
            <div className="wb-btns">
              <Button to={cta.to}>{cta.label}</Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

/* Pattern: process-steps → core/columns with ordered headings */
export function Steps({
  id,
  eyebrow,
  title,
  intro,
  steps,
  plain,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  steps: { title: string; text: string; deliverable?: string }[];
  plain?: boolean;
}) {
  return (
    <Section id={id} variant={plain ? undefined : 'alt'}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="wb-steps">
        {steps.map((s) => (
          <li className="wb-step" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.deliverable && (
              <span className="wb-step__out">
                <Icon name="check" size={14} />
                {s.deliverable}
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* Pattern: pillars → core/columns (3) with left border */
export function Pillars({
  id,
  eyebrow,
  title,
  intro,
  items,
  alt,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: { icon?: IconName; title: string; text: string }[];
  alt?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Section id={id} variant={alt ? 'alt' : undefined}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <div className="wb-pillars">
        {items.map((p) => (
          <div className="wb-pillar" key={p.title}>
            {p.icon && (
              <span className="wb-card__icon">
                <Icon name={p.icon} size={24} />
              </span>
            )}
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
}

/* Pattern: credential badges → core/group of paragraphs (rendered only when the list is non-empty) */
export function Credentials({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="wb-credentials" aria-label="Certifications and memberships">
      {items.map((c) => (
        <li key={c}>
          <Icon name="shield" size={16} />
          {c}
        </li>
      ))}
    </ul>
  );
}

/* Pattern: faq → one core/details block per question */
export function Faq({
  eyebrow,
  title,
  items,
  plain,
}: {
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
  plain?: boolean;
}) {
  return (
    <Section variant={plain ? undefined : 'alt'}>
      <SectionHead eyebrow={eyebrow} title={title} />
      <div className="wb-faq">
        {items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p className="wb-faq__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* Pattern: cta-band → core/cover + core/heading + core/buttons */
export function CtaBand({
  eyebrow = 'Start a project',
  title,
  text,
  image,
  cta = { label: 'Request a bid', to: '/contact#bid' },
}: {
  eyebrow?: string;
  title: string;
  text: string;
  image: string;
  cta?: Cta;
}) {
  const { contact } = siteInfo;
  return (
    <section className="wb-cta">
      <div className="wb-cta__bg">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="wb-container">
        <span className="wb-eyebrow">{eyebrow}</span>
        <h2>
          <Accent text={title} />
        </h2>
        <p>{text}</p>
        <div className="wb-btns" style={{ alignItems: 'center', gap: '1.5rem' }}>
          <Button to={cta.to}>{cta.label}</Button>
          <a className="wb-cta__phone" href={contact.phoneHref}>
            <Icon name="phone" size={18} />
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
