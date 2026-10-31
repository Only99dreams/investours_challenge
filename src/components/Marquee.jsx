import { Sparkle } from './Icons';

const ITEMS = [
  '₦1,500,000 in cash prizes',
  'Video Creators Track',
  'Ebook Creators Track',
  'Business Idea Track',
  'Six runner-up rewards',
  'Training & mentorship',
  'Grand Finale at AIWC',
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
