import { useState } from 'react';
import { contactPage, home, siteInfo } from '../content/site';
import { Icon } from '../components/ui/Icon';
import { Section } from '../components/ui/Section';
import { CtaBand, Faq, PageHero, QuickActions, Split, Steps } from '../sections/Blocks';

/**
 * Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) to receive submissions.
 * In WordPress this whole <form> is replaced by a form plugin shortcode/block
 * (Contact Form 7, WPForms, Gravity Forms…) — the field list below is the spec.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'unconfigured' | 'error';

const projectTypes = [
  'Tower erection / building',
  'Antenna & line installation',
  'Rooftop installation / co-locate',
  'Site civil work',
  'Testing & documentation',
  'Other',
];

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!FORM_ENDPOINT) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="wb-form" id={contactPage.form.id} onSubmit={onSubmit}>
      <h2>{contactPage.form.title}</h2>
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

      <div aria-live="polite">
        {status === 'sent' && (
          <p className="wb-form__note">Thank you — your request has been sent. We will be in touch.</p>
        )}
        {status === 'error' && (
          <p className="wb-form__note">
            Something went wrong sending your request. Please call us at{' '}
            <a href={siteInfo.contact.phoneHref}>{siteInfo.contact.phone}</a>.
          </p>
        )}
        {status === 'unconfigured' && (
          <p className="wb-form__note">
            This form isn&rsquo;t connected to an inbox yet. For now, please call us at{' '}
            <a href={siteInfo.contact.phoneHref}>{siteInfo.contact.phone}</a>.
          </p>
        )}
      </div>
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
