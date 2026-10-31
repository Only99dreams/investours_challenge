import { APPLY_URL } from '../data';
import { ArrowUpRight, Calendar, Gift, Star, Trophy } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const PRIZES = [
  {
    title: 'Video Creators Track',
    amount: '₦500,000',
    note: 'Cash prize for the Video Creators Track winner.',
  },
  {
    title: 'Ebook Creators Track',
    amount: '₦500,000',
    note: 'Cash prize for the Ebook Creators Track winner.',
  },
  {
    title: 'Business Idea Track',
    amount: '₦500,000',
    note: 'Cash prize for the Business Idea Track winner.',
  },
];

const RUNNER_REWARDS = [
  'One Investours-branded T-shirt',
  'One-year Investours platform subscription',
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
            sub="Three track winners. Six runners-up. ₦1,500,000 in total cash prizes."
          />
        </Reveal>

        <Reveal className="prizes__grid">
          {PRIZES.map(({ title, amount, note }) => (
            <article className="prize-card prize-card--gold" key={title}>
              <span className="prize-card__label">
                <span className="prize-card__dot" />
                Track winner
              </span>
              <span className="prize-card__trophy">
                <Trophy size={26} />
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
              <span className="finale__eyebrow">Grand Finale · AI Wealth Conference (AIWC)</span>
              <h3>9 January 2027</h3>
              <p className="finale__note">
                The top qualifying entries advance to the live finale at AIWC, where the panel of
                judges selects the winners.
              </p>
            </div>
          </div>

          <div className="runners">
            <span className="finale__icon">
              <Gift size={24} />
            </span>
            <div>
              <span className="finale__eyebrow">Six runners-up · Additional rewards</span>
              <h3>
                <Star size={18} /> Runner-up Rewards
              </h3>
              <ul className="runners__list">
                {RUNNER_REWARDS.map((reward) => (
                  <li key={reward}>{reward}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="prizes__legal" delay={100}>
          Additional participation benefits, eligibility conditions, and rewards are subject to the
          official Competition Terms &amp; Conditions.
        </Reveal>

        <Reveal className="prizes__cta" delay={120}>
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
