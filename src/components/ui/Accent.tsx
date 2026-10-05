import { Fragment } from 'react';

/**
 * Two-tone headings: wrap the orange part in asterisks inside the copy,
 *   'We build the *infrastructure* that carries the signal.'
 * → white text with the starred phrase in the primary (orange) colour.
 *
 * WordPress: in the Heading block, select the phrase and set its Text colour to "Primary"
 * (core adds <mark class="has-inline-color has-primary-color">) — same result, no code.
 */
export function Accent({ text }: { text: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span className="wb-accent" key={i}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Plain-text version (for aria-labels, <title>, alt text). */
export const stripAccent = (text: string) => text.replace(/\*(.+?)\*/g, '$1');
