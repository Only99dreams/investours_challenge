import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Close } from './Icons';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const restoreFocusRef = useRef(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;

    restoreFocusRef.current = document.activeElement;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onNavigate(-1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onNavigate(1);
      }
      if (event.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button');
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (restoreFocusRef.current instanceof HTMLElement) {
        restoreFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const item = items[index];
  const counter = String(index + 1).padStart(2, '0');
  const total = String(items.length).padStart(2, '0');

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" ref={dialogRef}>
      <div className="lb__backdrop" onClick={onClose} aria-hidden="true" />

      <div className="lb__top">
        <span className="lb__label">Gallery</span>
        <span className="lb__count">
          {counter} <span>/ {total}</span>
        </span>
        <button type="button" className="lb__close" onClick={onClose} aria-label="Close photo viewer" ref={closeRef}>
          <Close size={19} />
        </button>
      </div>

      <button
        type="button"
        className="lb__nav lb__nav--prev"
        onClick={() => onNavigate(-1)}
        aria-label="Previous photo"
      >
        <ChevronLeft size={22} />
      </button>

      <figure className="lb__stage">
        <img className="lb__img" src={item.src} alt={item.alt} key={item.src} />
        <figcaption className="lb__caption">{item.caption}</figcaption>
      </figure>

      <button
        type="button"
        className="lb__nav lb__nav--next"
        onClick={() => onNavigate(1)}
        aria-label="Next photo"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
