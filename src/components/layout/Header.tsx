import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, siteInfo } from '../../content/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

/** Reversed (light-on-dark) versions of the client's logo files live in /public/brand. */
export function Logo({ size = 'header' }: { size?: 'header' | 'footer' }) {
  return (
    <Link to="/" className={`wb-logo wb-logo--${size}`} aria-label={`${siteInfo.name} — home`}>
      <img
        src="/brand/logo-full.png"
        alt={`${siteInfo.name} — Wireless Communication Specialist`}
        width={1409}
        height={510}
      />
    </Link>
  );
}

/** → template part: header (core/site-logo + core/navigation + core/buttons) */
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="wb-header">
      <div className="wb-container wb-container--wide wb-header__inner">
        <Logo />

        <nav className="wb-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="wb-header__actions">
          <a className="wb-header__phone" href={siteInfo.contact.phoneHref}>
            <Icon name="phone" size={16} />
            {siteInfo.contact.phone}
          </a>
          <Button to="/contact#bid" size="sm">
            Request a bid
          </Button>
        </div>

        <button
          type="button"
          className="wb-burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <nav id="mobile-menu" className="wb-mobile" aria-label="Mobile" hidden={!open}>
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end>
            {item.label}
          </NavLink>
        ))}
        <Button to="/contact#bid">Request a bid</Button>
        <a className="wb-mobile__phone" href={siteInfo.contact.phoneHref}>
          Call {siteInfo.contact.phone}
        </a>
      </nav>
    </header>
  );
}
