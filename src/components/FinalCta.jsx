import { APPLY_URL } from '../data';
import { ArrowUpRight, Sparkle } from './Icons';
import Reveal from './Reveal';

export default function FinalCta() {
  return (
    <section className="section cta" id="register">
      <div className="cta__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container">
        <Reveal className="cta__inner">
          <span className="kicker kicker--gold">
            <Sparkle size={13} />
            Applications are open
          </span>

          <h2 className="h2">
            Your talent or idea deserves a <em>chance</em>.
          </h2>

          <p className="cta__sub">
            Whether you&rsquo;re a creator with a story to tell or an entrepreneur with an idea worth
            building, this is your opportunity to take the next step.
          </p>

          <p className="cta__tagline">From creative ideas to world-class enterprises.</p>

          <a
            className="btn btn--gold btn--lg"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register now
            <ArrowUpRight size={18} />
          </a>

          <p className="cta__legal">
            Participation is subject to eligibility requirements and the official Competition Terms
            &amp; Conditions. Download and review the Terms &amp; Conditions through the link
            provided below the registration form.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
