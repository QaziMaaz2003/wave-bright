/**
 * Blocks used by the Projects and Careers pages. Each maps to a WordPress block pattern
 * (see docs/WORDPRESS-MAPPING.md): cards = Columns of Groups, site log = Query Loop over a
 * "Project" custom post type, role cards = Query Loop over a "Job" post type.
 */
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Icon, type IconName } from '../components/ui/Icon';
import { Section, SectionHead } from '../components/ui/Section';
import { TowerArt } from '../components/ui/TowerArt';
import { Accent } from '../components/ui/Accent';

/* Pattern: project-types → core/columns (3) of Cover/Image + Group */
export function ProjectTypes({
  id,
  eyebrow,
  title,
  intro,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: { title: string; text: string; scope: string[]; image: string; imageAlt: string; to: string }[];
}) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <div className="wb-types">
        {items.map((t, i) => (
          <article className="wb-type" key={t.title}>
            <div className="wb-type__media">
              <img src={t.image} alt={t.imageAlt} loading="lazy" />
              <span className="wb-type__no">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="wb-type__body">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <ul className="wb-tags" aria-label="Typical scope">
                {t.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <Link className="wb-card__link" to={t.to}>
                See the service
                <Icon name="arrow" size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* Pattern: site-log → Query Loop (Project post type), tower line-art as the featured image */
export function SiteLog({
  id,
  eyebrow,
  title,
  intro,
  items,
  cta,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: { no: string; name: string; meta?: string }[];
  cta: { no: string; name: string; meta?: string; to: string };
}) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <div className="wb-log">
        {items.map((p, i) => (
          <article className="wb-log__item" key={p.no}>
            <span className="wb-log__no">#{p.no}</span>
            <TowerArt variant={i} />
            <h3>{p.name}</h3>
            <p>{p.meta ?? 'Scope & results on request'}</p>
          </article>
        ))}
        <Link className="wb-log__item wb-log__item--cta" to={cta.to}>
          <span className="wb-log__no">#{cta.no}</span>
          <TowerArt variant={items.length} />
          <h3>{cta.name}</h3>
          <p>
            {cta.meta}
            <Icon name="arrow" size={14} />
          </p>
        </Link>
      </div>
    </Section>
  );
}

/* Pattern: featured-builds → shown only when real case studies are supplied */
export function CaseStudies({
  items,
}: {
  items: { title: string; place: string; scope: string; result: string; image: string; imageAlt: string }[];
}) {
  if (!items.length) return null;
  return (
    <Section variant="alt">
      <SectionHead eyebrow="Featured builds" title="Case *studies.*" />
      <div className="wb-types">
        {items.map((c) => (
          <article className="wb-type" key={c.title}>
            <div className="wb-type__media">
              <img src={c.image} alt={c.imageAlt} loading="lazy" />
            </div>
            <div className="wb-type__body">
              <h3>{c.title}</h3>
              <p className="wb-type__place">{c.place}</p>
              <p>{c.scope}</p>
              <p className="wb-type__result">{c.result}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* Pattern: role-cards → Query Loop (Job post type) or Columns of Groups */
export function RoleCards({
  id,
  eyebrow,
  title,
  intro,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: { icon: IconName; title: string; text: string; skills: string[] }[];
}) {
  return (
    <Section id={id} variant="alt">
      <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
      <div className="wb-roles">
        {items.map((r) => (
          <article className="wb-role" key={r.title}>
            <span className="wb-card__icon">
              <Icon name={r.icon} size={24} />
            </span>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
            <ul className="wb-tags" aria-label="Skills">
              {r.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* Pattern: hiring-band → core/group (two columns): text + role chips + Apply button */
export function HiringBand({
  eyebrow,
  title,
  text,
  roles,
  openings,
  cta,
}: {
  eyebrow: string;
  title: string;
  text: string;
  roles: string[];
  /** real postings, if any — shown instead of the generic role chips */
  openings?: { title: string; place: string; type: string }[];
  cta: { label: string; to: string };
}) {
  const hasOpenings = !!openings?.length;
  return (
    <section className="wb-hiring">
      <div className="wb-container wb-hiring__inner">
        <div>
          <span className="wb-eyebrow">{eyebrow}</span>
          <h2>
            <Accent text={title} />
          </h2>
          <p>{text}</p>
        </div>
        <div>
          <ul className="wb-hiring__chips" aria-label={hasOpenings ? 'Open positions' : 'Roles on our crews'}>
            {hasOpenings
              ? openings!.map((o) => (
                  <li key={o.title}>
                    {o.title}
                    <small>
                      {o.place} · {o.type}
                    </small>
                  </li>
                ))
              : roles.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <Button to={cta.to}>{cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
