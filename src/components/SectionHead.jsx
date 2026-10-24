import { Sparkle } from './Icons';

export default function SectionHead({ kicker, title, sub, dark = false }) {
  return (
    <div className={`sec-head ${dark ? 'sec-head--dark' : ''}`}>
      {kicker && (
        <span className={`kicker ${dark ? 'kicker--gold' : ''}`}>
          <Sparkle size={13} />
          {kicker}
        </span>
      )}
      <h2 className="h2">{title}</h2>
      {sub && <p className="sec-head__sub">{sub}</p>}
    </div>
  );
}
