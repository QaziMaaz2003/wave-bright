import { careersPage, roles, siteInfo } from '../content/site';
import { FormStatusNote, useFormSubmit } from '../components/forms/useFormSubmit';
import { Accent } from '../components/ui/Accent';
import { Icon } from '../components/ui/Icon';
import { Section } from '../components/ui/Section';
import { CardGrid, CtaBand, Faq, PageHero, Split, StatsBand } from '../sections/Blocks';
import { HiringBand, RoleCards } from '../sections/ProjectBlocks';

/** Field list = spec for the WordPress form plugin (Contact Form 7 / WPForms / Gravity Forms). */
function ApplyForm() {
  const { status, onSubmit } = useFormSubmit();
  const { apply } = careersPage;

  return (
    <form className="wb-form" id="apply-form" onSubmit={onSubmit}>
      <input type="hidden" name="form" value="careers-application" />
      <h2>
        <Accent text="Application *details*" />
      </h2>
      <p>All fields marked * are required.</p>

      <div className="wb-form__row wb-form__row--2">
        <div className="wb-field">
          <label htmlFor="ap-name">Name *</label>
          <input id="ap-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="wb-field">
          <label htmlFor="ap-phone">Phone</label>
          <input id="ap-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="wb-form__row wb-form__row--2">
        <div className="wb-field">
          <label htmlFor="ap-email">Email *</label>
          <input id="ap-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="wb-field">
          <label htmlFor="ap-location">Where are you based?</label>
          <input id="ap-location" name="location" type="text" placeholder="City, State" autoComplete="address-level2" />
        </div>
      </div>

      <div className="wb-form__row wb-form__row--2">
        <div className="wb-field">
          <label htmlFor="ap-role">Role of interest *</label>
          <select id="ap-role" name="role" defaultValue="" required>
            <option value="" disabled>
              Select one…
            </option>
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
            <option>Other / not sure</option>
          </select>
        </div>
        <div className="wb-field">
          <label htmlFor="ap-exp">Experience</label>
          <select id="ap-exp" name="experience" defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {apply.experience.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="wb-field">
        <label htmlFor="ap-certs">Training &amp; certifications</label>
        <input
          id="ap-certs"
          name="certifications"
          type="text"
          placeholder="e.g. tower climbing, rigging, RF testing, equipment tickets"
        />
      </div>

      <div className="wb-field">
        <label htmlFor="ap-about">About you *</label>
        <textarea
          id="ap-about"
          name="about"
          required
          placeholder="Your experience, the kind of work you want to do, and when you could start…"
        />
      </div>

      <div>
        <button type="submit" className="wb-btn wb-btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send application'}
          <Icon name="arrow" size={16} />
        </button>
      </div>

      <FormStatusNote
        status={status}
        sentText="Thank you — your details have been sent. Our team will be in touch if there is a fit."
      />
    </form>
  );
}

export default function Careers() {
  const { hero, stats, why, roles: rolesSection, openings, hiring, safety, apply, faq, cta } = careersPage;
  const { contact } = siteInfo;

  return (
    <>
      <PageHero {...hero}>
        <StatsBand stats={stats} />
      </PageHero>

      <CardGrid id={why.id} eyebrow={why.eyebrow} title={why.title} intro={why.intro} items={why.items} />

      <RoleCards {...rolesSection} />

      <HiringBand
        eyebrow={hiring.eyebrow}
        title={hiring.title}
        text={hiring.text}
        roles={roles}
        openings={openings}
        cta={{ label: 'Apply', to: '/careers#apply' }}
      />

      <Split
        id={safety.id}
        eyebrow={safety.eyebrow}
        title={safety.title}
        paragraphs={[safety.text]}
        list={safety.list}
        image={safety.image}
        imageAlt={safety.imageAlt}
        reverse
      />

      <Section id={apply.id} variant="alt">
        <div className="wb-contact">
          <div>
            <span className="wb-eyebrow">{apply.eyebrow}</span>
            <h2 className="wb-apply__title">
              <Accent text={apply.title} />
            </h2>
            <p className="wb-apply__text">{apply.text}</p>
            <ol className="wb-anatomy__list wb-apply__steps">
              {apply.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="wb-anatomy__n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="wb-info wb-apply__call">
              <div className="wb-info__row">
                <span className="wb-info__label">Prefer to call?</span>
                <a className="wb-info__value" href={contact.phoneHref}>
                  {contact.phone}
                </a>
                <small className="wb-apply__small">
                  {contact.addressLines.join(', ')} · {contact.person}, {contact.role}
                </small>
              </div>
            </div>
          </div>
          <ApplyForm />
        </div>
      </Section>

      <Faq {...faq} plain />
      <CtaBand {...cta} cta={{ label: 'Contact us', to: '/contact' }} />
    </>
  );
}
