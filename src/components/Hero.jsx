import { APPLY_URL } from '../data';
import { ArrowRight, ArrowUpRight, Trophy } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img
          className="hero__bg-img"
          src="/images/image1.jpg"
          alt=""
          width="1280"
          height="854"
          fetchPriority="high"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow">Investours Creativity &amp; Enterprise Challenge</span>

        <h1 className="hero__title">
          Turn Your Creativity or Business Idea into a <span className="nowrap">World-Class</span>{' '}
          Brand!
        </h1>

        <p className="hero__sub">
          Are you a video creator, aspiring ebook author, entrepreneur, or early-stage business
          owner? The Investours Creativity &amp; Enterprise Challenge gives you an opportunity to
          showcase your talent, transform your ideas into valuable products, access mentorship, and
          compete for exciting cash prizes and rewards.
        </p>

        <div className="hero__prize-badge">
          <span className="hero__prize-trophy">
            <Trophy size={34} />
          </span>
          <div className="hero__prize-amount">₦1,500,000</div>
          <p className="hero__prize-label">In total cash prizes</p>
          <p className="hero__prize-split">Three Tracks. Three Winners. Six Runners-up.</p>
        </div>

        <div className="hero__actions">
          <a
            className="btn btn--gold btn--lg"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
            <ArrowUpRight size={18} />
          </a>
          <a className="btn btn--outline-gold btn--lg" href="#tracks">
            Choose Your Track
            <ArrowRight size={18} />
          </a>
        </div>

        <p className="hero__note">
          Open to everyone aged 18 and above. No campus or NYSC affiliation required.
        </p>
      </div>
    </section>
  );
}
