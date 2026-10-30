import { useEffect, useRef, useState } from "react";
import styles from "./imageCarousel.module.scss";

function ImageCarousel({ slides, label, previousLabel, nextLabel, slideLabel, note }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const preloadedImages = useRef(new Map());

  useEffect(() => {
    if (!slides.length) return;

    const adjacentIndices = new Set([
      (activeIndex - 1 + slides.length) % slides.length,
      (activeIndex + 1) % slides.length,
    ]);

    adjacentIndices.forEach((index) => {
      const { src } = slides[index];
      if (!src || preloadedImages.current.has(src)) return;

      const image = new Image();
      image.src = src;
      preloadedImages.current.set(src, image);
    });
  }, [activeIndex, slides]);

  if (!slides.length) return null;

  const showSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handlePointerDown = (event) => {
    touchStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (touchStartX.current === null) return;

    const distance = event.clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 40) return;

    showSlide(activeIndex + (distance < 0 ? 1 : -1));
  };

  const handlePointerCancel = () => {
    touchStartX.current = null;
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className={styles.carousel} role="region" aria-label={label} aria-roledescription="carousel">
      <div
        className={styles.stage}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <img
          key={activeSlide.src}
          className={styles.image}
          src={activeSlide.src}
          alt={activeSlide.alt}
          decoding="async"
          draggable="false"
        />
        {activeSlide.title && <p className={styles.caption}>{activeSlide.title}</p>}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.previous}`}
          aria-label={previousLabel}
          onClick={() => showSlide(activeIndex - 1)}
        />
        <div className={styles.indicators} aria-label={label}>
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ""}`}
              aria-label={slideLabel(index + 1, slides.length)}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.next}`}
          aria-label={nextLabel}
          onClick={() => showSlide(activeIndex + 1)}
        />
      </div>
      {note && <p className={styles.note}>{activeSlide.alt}</p>}
    </div>
  );
}

export default ImageCarousel;
