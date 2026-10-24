import { APPLY_URL } from '../data';
import { ArrowUpRight, Sparkle } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const STEPS = [
  {
    title: 'Apply',
    text: 'Submit your creative work or business idea.',
  },
  {
    title: 'Get validated',
    text: 'Share your entry and attract at least five public votes to qualify for the next stage.',
  },
  {
    title: 'Develop',
    text: 'Access bootcamp training, mentorship, and enterprise development opportunities as you qualify.',
  },
  {
    title: 'Compete',
    text: 'The top six qualifying entries advance to the Grand Finale, where the panel of judges selects the winners.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <Reveal>
          <SectionHead
            title={
              <>
                How it <em>works</em>
              </>
            }
            sub="Four clear steps from idea to Grand Finale stage."
          />
        </Reveal>

        <Reveal className="steps">
          {STEPS.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
              <div className="step__body">
                <span className="step__tag">Stage {String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="how__note" delay={80}>
          <span className="how__note-icon">
            <Sparkle size={16} />
          </span>
          <p>
            Public votes help determine progression, but the grand winners are selected by the panel
            of judges.
          </p>
        </Reveal>

        <Reveal className="how__cta" delay={120}>
          <a
            className="btn btn--violet btn--lg"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply &amp; get started
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
