import { Link } from 'react-router-dom';
import { footerColumns, siteInfo } from '../../content/site';
import { Logo } from './Header';

/** → template part: footer (core/columns + core/navigation) */
export function Footer() {
  const { contact } = siteInfo;
  return (
    <footer className="wb-footer">
      <div className="wb-container wb-container--wide">
        <div className="wb-footer__grid">
          <div className="wb-footer__brand">
            <Logo size="footer" />
            <p>{siteInfo.tagline}</p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h4>Contact</h4>
            <address>
              {contact.addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <div style={{ marginTop: '0.75rem' }}>
                Phone: <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div>Fax: {contact.fax}</div>
            </address>
          </div>
        </div>

        <div className="wb-footer__bar">
          <span>
            © {new Date().getFullYear()} {siteInfo.name} All rights reserved.
          </span>
          <span>Built to spec. Delivered on time.</span>
        </div>
      </div>
    </footer>
  );
}
