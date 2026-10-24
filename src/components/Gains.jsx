import { APPLY_URL } from '../data';
import { ArrowUpRight, Cap, Chart, Coins, Medal, Star } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const GAINS = [
  {
    Icon: Coins,
    title: 'Cash prizes & rewards',
    text: 'Compete for a share of the ₦1,500,000+ prize pool.',
    span: 2,
  },
  {
    Icon: Cap,
    title: 'Training & mentorship',
    text: 'Build your talent, skills, brand, and business potential through expert-led bootcamps.',
    span: 2,
  },
  {
    Icon: Medal,
    title: 'Certification opportunity',
    text: 'Qualify for the Elite Founders & Creators Circle (Stage 3).',
    span: 2,
  },
  {
    Icon: Chart,
    title: '30% platform revenue sharing',
    text: 'Eligible contestants can earn a share of eligible subscription and credit-pack revenue attributable to their validated competition content, subject to the official terms.',
    span: 3,
  },
  {
    Icon: Star,
    title: 'Grand Finale exposure',
    text: 'Top qualifying entries advance to the live finale at the AIWC 1.0 conference.',
    span: 3,
    wide: true,
  },
];

export default function Gains() {
  return (
    <section className="section gains" id="gains">
      <div className="container">
        <Reveal>
          <SectionHead
            dark
            title={
              <>
                What you stand to <em>gain</em>
              </>
            }
            sub="More than a competition — a launchpad for what comes next."
          />
        </Reveal>

        <Reveal className="gains__grid">
          {GAINS.map(({ Icon, title, text, span, wide }, index) => (
            <article
              key={title}
              className={`gain-card gain-card--span-${span} ${wide ? 'gain-card--wide' : ''}`}
            >
              <div className="gain-card__top">
                <span className="gain-card__icon">
                  <Icon size={22} />
                </span>
                <span className="gain-card__num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="gain-card__text">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="gains__cta" delay={80}>
          <a
            className="btn btn--gold btn--lg"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start your application
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
