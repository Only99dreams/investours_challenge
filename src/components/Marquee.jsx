import { Sparkle } from './Icons';

const ITEMS = [
  '₦1,500,000+ prize pool',
  'Creative Content Track',
  'Business Idea Track',
  'Mentorship & bootcamps',
  '30% revenue sharing',
  'Grand Finale at AIWC 1.0',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            <Sparkle size={12} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
