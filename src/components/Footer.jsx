import { APPLY_URL, NAV_LINKS } from '../data';
import { Mail, Phone, Pin } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#top" aria-label="Investours — back to top">
              <img src="/images/investours_logo.jpg" alt="Investours" />
            </a>
            <p className="footer__name">Investours Creativity &amp; Enterprise Challenge</p>
            <p className="footer__org">Organised by Investours World Limited.</p>
            <a
              className="footer__terms"
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Competition Terms &amp; Conditions — available below the registration form
            </a>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#register">Register</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <Phone size={16} />
                <span>
                  <a href="tel:08061414339">08061414339</a>
                  <br />
                  <a href="tel:09158873366">09158873366</a>
                </span>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:admin@investours.app">admin@investours.app</a>
              </li>
              <li>
                <Pin size={16} />
                <address>
                  Suite A26, DEO Shopping Mall,
                  <br />
                  Gwagwalada, Abuja.
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Investours World Limited. All rights reserved.</p>
          <p className="footer__motto">From creative ideas to world-class enterprises.</p>
        </div>
      </div>
    </footer>
  );
}
