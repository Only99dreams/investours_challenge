import { APPLY_URL } from '../data';
import { ArrowUpRight, Sparkle } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const STEPS = [
  {
    title: 'Apply',
    text: 'Complete the official registration form and select your preferred track.',
  },
  {
    title: 'Create Your Investours Account',
    text: 'Visit www.investours.app and create your account. Notify the Investours team once your account has been created.',
  },
  {
    title: 'Get Your Entry Published',
    text: 'The Investours team will publish your competition entry on the platform after you notify the team that your account is ready.',
  },
  {
    title: 'Share and Get Validated',
    text: 'Share your published entry with friends, family, and your network to attract valid public votes and qualify for the next stage.',
  },
  {
    title: 'Develop and Compete',
    text: 'Access training, mentorship, and enterprise development opportunities as you progress through the competition.',
  },
  {
    title: 'Reach the Grand Finale',
    text: 'The top nine qualifying entries advance to the Grand Finale, where the panel of judges selects the winners.',
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
            sub="Six clear steps from application to the Grand Finale."
          />
        </Reveal>

        <Reveal className="steps">
          {STEPS.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
              <div className="step__body">
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
            <strong>Important:</strong> Public votes help determine progression, but the grand
            winners are selected by the panel of judges.
          </p>
        </Reveal>

        <Reveal className="how__cta" delay={120}>
          <a
            className="btn btn--violet btn--lg"
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
