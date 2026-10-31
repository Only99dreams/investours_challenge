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
            Final call to action
          </span>

          <h2 className="h2">
            Your Talent or Idea Deserves a <em>Chance</em>.
          </h2>

          <p className="cta__sub">
            Whether you&rsquo;re a video creator with a story to tell, an author with knowledge to
            share, or an entrepreneur with an idea worth building, this is your opportunity to take
            the next step.
          </p>

          <p className="cta__tagline">
            Three Tracks. Three Winners. ₦1,500,000 in Cash Prizes.
            <br />
            From Creative Ideas to World-Class Enterprises.
          </p>

          <a
            className="btn btn--gold btn--lg"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
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
