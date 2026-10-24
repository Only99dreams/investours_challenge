import { APPLY_URL } from '../data';
import { ArrowUpRight, Bulb, Film } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const TRACKS = [
  {
    index: '01',
    kicker: 'For creators & storytellers',
    title: 'Creative Content Track',
    description:
      'For content creators, digital storytellers, and creatives ready to showcase their work, grow their audience, and build a stronger brand.',
    tags: ['Content creators', 'Digital storytellers', 'Brand builders'],
    image: '/images/image3.jpg',
    alt: 'Creator filming with a ring light — Creative Content Track',
    Icon: Film,
  },
  {
    index: '02',
    kicker: 'For founders & builders',
    title: 'Business Idea Track',
    description:
      'For aspiring entrepreneurs and early-stage business owners ready to showcase their ideas, strengthen their business models, and build sustainable enterprises.',
    tags: ['Aspiring founders', 'Early-stage owners', 'Problem solvers'],
    image: '/images/image2.jpg',
    alt: 'Entrepreneur planning a business model — Business Idea Track',
    Icon: Bulb,
  },
];

export default function Tracks() {
  return (
    <section className="section tracks" id="tracks">
      <div className="container">
        <Reveal>
          <SectionHead
            title={
              <>
                Choose your <em>track</em>
              </>
            }
            sub="Two paths. One goal: building something great."
          />
        </Reveal>

        <div className="tracks__grid">
          {TRACKS.map((track, index) => {
            const { Icon } = track;
            return (
              <Reveal key={track.title} className="track-slot" delay={index * 120}>
                <article className="track-card">
                  <div className="track-card__media">
                    <img src={track.image} alt={track.alt} loading="lazy" />
                    <span className="track-card__shade" />
                    <span className="track-card__index">Track {track.index}</span>
                    <span className="track-card__icon">
                      <Icon size={20} />
                    </span>
                  </div>

                  <div className="track-card__body">
                    <span className="track-card__kicker">{track.kicker}</span>
                    <h3>{track.title}</h3>
                    <p>{track.description}</p>

                    <ul className="track-card__tags">
                      {track.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    <a
                      className="btn btn--violet track-card__cta"
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enter this track
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
