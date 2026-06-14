"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const PHOTOS = [
  {
    src: "/church-visit.jpg",
    alt: "Prince Emmanuel SDA Church exterior — Ringway Estates, Osu",
    caption: "Our home in Ringway Estates, Osu",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-UEVCUQjfdIM.jpg",
    alt: "Sabbath worship service at PESDAC",
    caption: "Sabbath worship service",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-3Y9sSsSkEOE.jpg",
    alt: "PESDAC congregation during service",
    caption: "Our congregation in praise",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-AiJ9TQIHZNk.jpg",
    alt: "PESDAC music and worship team",
    caption: "Music & Worship Ministry",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-FZNaChXG_7w.jpg",
    alt: "PESDAC special programme",
    caption: "Special programme service",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-B7rQt9O0UgQ.jpg",
    alt: "PESDAC sermon and teaching",
    caption: "Word and worship",
    width: 1280,
    height: 720,
  },
] as const;

export default function PhotoGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openAt = useCallback((i: number) => {
    setActiveIndex(i);
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
    dialogRef.current?.close();
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) =>
      i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) =>
      i !== null ? (i + 1) % PHOTOS.length : null
    );
  }, []);

  // Sync React state when browser closes the dialog via Escape key
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = () => setActiveIndex(null);
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);

  // Arrow-key navigation
  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, prev, next]);

  const photo = activeIndex !== null ? PHOTOS[activeIndex] : null;

  return (
    <section className="gallery-section">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div className="section-label">Photo Gallery</div>
          <h2 className="section-title">
            Captured moments,
            <br />
            <em>lasting memories</em>
          </h2>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map((p, i) => (
            <figure key={p.src} className="gallery-card">
              <button
                type="button"
                className="gallery-img-wrap gallery-img-btn"
                onClick={() => openAt(i)}
                aria-label={`View full size: ${p.caption}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  className="gallery-img"
                />
                <span className="gallery-caption" aria-hidden="true">
                  {p.caption}
                </span>
              </button>
              <figcaption className="sr-only">{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-submit-strip">
          <p>
            Do you have photos from a church event or programme?{" "}
            <Link
              href="/contact?subject=Gallery+Photo+Submission"
              className="btn-gold"
            >
              Submit a photo
            </Link>
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={photo ? `Viewing: ${photo.caption}` : "Photo lightbox"}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {photo && (
          <div className="lightbox-inner">
            <button
              type="button"
              className="lightbox-close"
              onClick={close}
              aria-label="Close lightbox"
            >
              <i className="ti ti-x" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={prev}
              aria-label="Previous photo"
            >
              <i className="ti ti-chevron-left" aria-hidden="true" />
            </button>

            <div className="lightbox-img-wrap">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 85vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={next}
              aria-label="Next photo"
            >
              <i className="ti ti-chevron-right" aria-hidden="true" />
            </button>

            <p className="lightbox-caption">{photo.caption}</p>

            <p className="lightbox-counter" aria-live="polite">
              {activeIndex !== null ? activeIndex + 1 : 0} / {PHOTOS.length}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
