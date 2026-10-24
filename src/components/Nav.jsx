import { useEffect, useState } from 'react';
import { APPLY_URL, NAV_LINKS } from '../data';
import { ArrowUpRight } from './Icons';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Investours — back to top">
          <img src="/images/investours_logo.jpg" alt="Investours" />
        </a>

        <p className="nav__tagline">From Creative Ideas to World-Class Enterprises.</p>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--gold nav__cta"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply now
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a
            className="btn btn--gold nav__mobile-cta"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Apply now
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
