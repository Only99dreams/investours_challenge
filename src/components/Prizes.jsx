import { APPLY_URL } from '../data';
import { ArrowUpRight, Calendar, Star, Trophy } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const PRIZES = [
  {
    variant: 'gold',
    Icon: Trophy,
    label: 'Track winner',
    title: 'Creative Content Track',
    amount: '₦600,000',
    note: 'Cash / grant for the Track Winner',
  },
  {
    variant: 'gold',
    Icon: Trophy,
    label: 'Track winner',
    title: 'Business Idea Track',
    amount: '₦600,000',
    note: 'Cash / grant for the Track Winner',
  },
  {
    variant: 'silver',
    Icon: Star,
    label: 'Runners-up',
    title: 'Runners-up & special awards',
    amount: '+Rewards',
    note: 'Additional rewards for four runners-up, plus a special Campus/NYSC Champion award under applicable conditions.',
  },
];

export default function Prizes() {
  return (
    <section className="section prizes" id="prizes">
      <div className="container">
        <Reveal>
          <SectionHead
            dark
            title={
              <>
                Prizes &amp; the <em>Grand Finale</em>
              </>
            }
            sub="Two track winners, four runners-up, and one unforgettable live stage."
          />
        </Reveal>

        <Reveal className="prizes__grid">
          {PRIZES.map(({ variant, Icon, label, title, amount, note }) => (
            <article className={`prize-card prize-card--${variant}`} key={title}>
              <span className="prize-card__label">
                <span className="prize-card__dot" />
                {label}
              </span>
              <span className="prize-card__trophy">
                <Icon size={26} />
              </span>
              <h3>{title}</h3>
              <div className="prize-card__amount">{amount}</div>
              <p>{note}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="prizes__lower" delay={80}>
          <div className="finale">
            <span className="finale__icon">
              <Calendar size={24} />
            </span>
            <div>
              <span className="finale__eyebrow">Grand Finale · AIWC 1.0</span>
              <h3>19 December 2026</h3>
              <p className="finale__note">
                Transportation stipends may be provided to finalists who need assistance travelling
                to the Grand Finale, subject to the competition&rsquo;s arrangements.
              </p>
            </div>
          </div>

          <figure className="prizes__poster">
            <img
              src="/images/image1.jpg"
              alt="Official prize pool artwork: ₦1,500,000 plus amazing rewards, with a ₦50,000 Campus/NYSC champion allowance"
              loading="lazy"
            />
            <figcaption>Official prize-pool artwork</figcaption>
          </figure>
        </Reveal>

        <Reveal className="prizes__cta" delay={120}>
          <a
            className="btn btn--gold btn--lg"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Compete for these prizes
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
