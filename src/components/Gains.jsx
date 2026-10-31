import { APPLY_URL } from '../data';
import { ArrowUpRight, Bot, Cap, Chart, Coins, Gift, Medal, Star } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const GAINS = [
  {
    Icon: Coins,
    title: 'Cash Prizes',
    text: 'Each of the three track winners receives ₦500,000.',
  },
  {
    Icon: Gift,
    title: 'Runner-up Rewards',
    text: 'Six runners-up receive an Investours-branded T-shirt and a one-year Investours platform subscription each.',
  },
  {
    Icon: Cap,
    title: 'Training & Mentorship',
    text: 'Develop your creative skills, personal brand, business model, or entrepreneurial potential.',
  },
  {
    Icon: Bot,
    title: 'AI-Powered Solutions',
    text: "Explore opportunities to support your creativity and enterprise with Investours' AI-powered solutions, including BookMaker AI.",
  },
  {
    Icon: Medal,
    title: 'Certification Opportunity',
    text: "Qualify for the Elite Founders & Creators Circle, subject to the competition's progression requirements.",
  },
  {
    Icon: Chart,
    title: '30% Platform Revenue Sharing',
    text: 'Eligible contestants can earn a share of eligible subscription and credit-pack revenue attributable to their validated competition content, subject to the official terms.',
  },
  {
    Icon: Star,
    title: 'Grand Finale Exposure',
    text: 'The top qualifying entries advance to the live finale at AI Wealth Conference (AIWC).',
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
          {GAINS.map(({ Icon, title, text, wide }) => (
            <article key={title} className={`gain-card ${wide ? 'gain-card--wide' : ''}`}>
              <div className="gain-card__top">
                <span className="gain-card__icon">
                  <Icon size={22} />
                </span>
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
