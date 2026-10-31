import { APPLY_URL } from '../data';
import { ArrowUpRight, Book, Bulb, Film } from './Icons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const TRACKS = [
  {
    index: '01',
    kicker: 'For video creators & digital storytellers',
    title: 'Video Creators Track',
    description:
      'For video creators, digital storytellers, and creatives ready to showcase their talent, create engaging content, grow their audience, and build a stronger brand.',
    image: '/images/track1.jpg',
    alt: 'Video creator at work — Video Creators Track',
    Icon: Film,
  },
  {
    index: '02',
    kicker: 'For writers, authors & digital publishers',
    title: 'Ebook Creators Track',
    description:
      'For writers, authors, educators, and aspiring digital publishers ready to transform their knowledge, experiences, and ideas into valuable ebooks.',
    image: '/images/track2.jpg',
    alt: 'Writer creating an ebook — Ebook Creators Track',
    Icon: Book,
  },
  {
    index: '03',
    kicker: 'For aspiring entrepreneurs & business owners',
    title: 'Business Idea Track',
    description:
      'For aspiring entrepreneurs and early-stage business owners ready to showcase their ideas, strengthen their business models, and build sustainable enterprises.',
    image: '/images/trac3.jpg',
    alt: 'Entrepreneur developing a business idea — Business Idea Track',
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
            sub="Choose the track that best matches your creativity or entrepreneurial ambition."
          />
        </Reveal>

        <div className="tracks__grid">
          {TRACKS.map((track, index) => {
            const { Icon } = track;
            return (
              <Reveal key={track.title} className="track-slot" delay={index * 120}>
                <article className="track-card">
                  <div className="track-card__media">
                    <img
                      src={track.image}
                      alt={track.alt}
                      width="1280"
                      height="853"
                      loading="lazy"
                      decoding="async"
                    />
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
                    <p className="track-card__prize">Compete for ₦500,000!</p>

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

        <Reveal className="tracks__note" delay={100}>
          All track winners are subject to the official competition rules and judging process.
        </Reveal>
      </div>
    </section>
  );
}
