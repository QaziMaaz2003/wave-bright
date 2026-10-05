import { contactPage, home, siteInfo } from '../content/site';
import { FormStatusNote, useFormSubmit } from '../components/forms/useFormSubmit';
import { Accent } from '../components/ui/Accent';
import { Icon } from '../components/ui/Icon';
import { Section } from '../components/ui/Section';
import { CtaBand, Faq, PageHero, QuickActions, Split, Steps } from '../sections/Blocks';

const projectTypes = [
  'Tower erection / building',
  'Antenna & line installation',
  'Rooftop installation / co-locate',
  'Site civil work',
  'Testing & documentation',
  'Other',
];

function ContactForm() {
  const { status, onSubmit } = useFormSubmit();

  return (
    <form className="wb-form" id={contactPage.form.id} onSubmit={onSubmit}>
      <h2>
        <Accent text={contactPage.form.title} />
      </h2>
      <p>{contactPage.form.text}</p>

      <div className="wb-form__row wb-form__row--2">
        <div className="wb-field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="wb-field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="wb-form__row wb-form__row--2">
        <div className="wb-field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="wb-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="wb-field">
        <label htmlFor="type">Project type</label>
        <select id="type" name="project_type" defaultValue="">
          <option value="" disabled>
            Select one…
          </option>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="wb-field">
        <label htmlFor="message">Project details *</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Site location, scope of work, schedule…"
        />
      </div>

      <div>
        <button type="submit" className="wb-btn wb-btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send request'}
          <Icon name="arrow" size={16} />
        </button>
      </div>

      <FormStatusNote status={status} sentText="Thank you — your request has been sent. We will be in touch." />
    </form>
  );
}

export default function Contact() {
  const { contact } = siteInfo;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=14&output=embed`;

  return (
    <>
      <PageHero {...contactPage.hero}>
        <QuickActions items={contactPage.quick} />
      </PageHero>
      <Section>
        <div className="wb-contact">
          <div>
            <div className="wb-info">
              <div className="wb-info__row">
                <span className="wb-info__label">Contact</span>
                <span className="wb-info__value">
                  {contact.person}
                  <small>{contact.role}</small>
                </span>
              </div>
              <div className="wb-info__row">
                <span className="wb-info__label">Address</span>
                <address className="wb-info__value" style={{ fontStyle: 'normal' }}>
                  {contact.addressLines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </address>
              </div>
              <div className="wb-info__row">
                <span className="wb-info__label">Phone</span>
                <a className="wb-info__value" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </div>
              <div className="wb-info__row">
                <span className="wb-info__label">Fax</span>
                <span className="wb-info__value">{contact.fax}</span>
              </div>
            </div>
            <div className="wb-map" id="map">
              <iframe
                title={`Map showing ${contact.addressLines.join(', ')}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
      <Split
        eyebrow={contactPage.include.eyebrow}
        title={contactPage.include.title}
        paragraphs={[contactPage.include.text]}
        list={contactPage.include.list}
        image={contactPage.include.image}
        imageAlt={contactPage.include.imageAlt}
        alt
      />
      <Steps {...contactPage.next} plain />
      <Faq {...home.faq} />
      <CtaBand {...home.cta} />
    </>
  );
}
