import { useCallback, useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Expand } from './Icons';
import Lightbox from './Lightbox';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const navigate = useCallback((direction) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    });
  }, []);

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <Reveal>
          <SectionHead
            dark
            title={
              <>
                Moments from our previous <em>competition</em>
              </>
            }
            sub="A look back at our previous competition at the NYSC orientation camp, where we engaged young people and celebrated creativity, ideas, and entrepreneurship."
          />
        </Reveal>

        <Reveal className="gallery__grid" delay={60}>
          {GALLERY_ITEMS.map((photo, index) => (
            <button
              type="button"
              className="shot"
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`View photo ${index + 1}: ${photo.caption}`}
              style={{ '--focus': photo.focus }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width="1080"
                height="810"
                loading="lazy"
                decoding="async"
              />
              <span className="shot__overlay" />
              <span className="shot__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="shot__caption">
                {photo.caption}
                <span className="shot__expand" aria-hidden="true">
                  <Expand size={15} />
                </span>
              </span>
            </button>
          ))}
        </Reveal>

        <Reveal className="gallery__hint" delay={100}>
          <Expand size={14} />
          Select any photo to view it full-size.
        </Reveal>
      </div>

      <Lightbox
        items={GALLERY_ITEMS}
        index={activeIndex}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </section>
  );
}
