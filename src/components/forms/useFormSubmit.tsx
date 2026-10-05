import { useState } from 'react';
import { siteInfo } from '../../content/site';

/**
 * Shared submit logic for the Contact and Careers forms.
 * Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) to receive submissions.
 * In WordPress each <form> is replaced by a form plugin block (Contact Form 7, WPForms,
 * Gravity Forms…) — the field lists are the spec.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export type FormStatus = 'idle' | 'sending' | 'sent' | 'unconfigured' | 'error';

export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>('idle');

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

  return { status, onSubmit };
}

export function FormStatusNote({ status, sentText }: { status: FormStatus; sentText: string }) {
  const { phone, phoneHref } = siteInfo.contact;
  return (
    <div aria-live="polite">
      {status === 'sent' && <p className="wb-form__note">{sentText}</p>}
      {status === 'error' && (
        <p className="wb-form__note">
          Something went wrong sending your message. Please call us at <a href={phoneHref}>{phone}</a>.
        </p>
      )}
      {status === 'unconfigured' && (
        <p className="wb-form__note">
          This form isn&rsquo;t connected to an inbox yet. For now, please call us at{' '}
          <a href={phoneHref}>{phone}</a>.
        </p>
      )}
    </div>
  );
}
