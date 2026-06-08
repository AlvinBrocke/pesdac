'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /**
   * How strongly the element lags behind scroll.
   * 0.3 means the element translates at 30% of scroll distance —
   * it moves slower than the page, giving a "depth behind" feel.
   */
  speed?: number;
  /**
   * "bg" — element is absolutely positioned and extended vertically to
   *   cover the parallax travel range. Use for section backgrounds.
   * "drift" — element stays in normal flow and subtly floats.
   *   Use for content blocks to add depth between columns.
   */
  mode?: 'bg' | 'drift';
};

export default function ScrollParallax({
  children,
  className,
  style,
  speed = 0.25,
  mode = 'drift',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function update() {
      if (!el) return;

      if (mode === 'bg') {
        const parent = el.parentElement;
        if (!parent) return;
        // parentTop is 0 at page-top; goes negative as user scrolls.
        // We translate the background DOWN (positive) so it moves slower
        // than the page — the further the section is scrolled off the top,
        // the more the background lags, creating depth.
        const parentTop = parent.getBoundingClientRect().top;
        el.style.transform = `translateY(${(-parentTop * speed).toFixed(2)}px)`;
      } else {
        // drift: offset from viewport centre
        const rect = el.getBoundingClientRect();
        const elementMidY = rect.top + rect.height / 2;
        const viewportMidY = window.innerHeight / 2;
        const offset = (elementMidY - viewportMidY) * speed;
        el.style.transform = `translateY(${offset.toFixed(2)}px)`;
      }

      tickingRef.current = false;
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        rafRef.current = requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // set initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed, mode]);

  const bgStyle: CSSProperties =
    mode === 'bg'
      ? {
          position: 'absolute',
          top: '-28%',
          bottom: '-28%',
          left: 0,
          right: 0,
          willChange: 'transform',
          pointerEvents: 'none',
        }
      : { willChange: 'transform' };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...bgStyle, ...style }}
    >
      {children}
    </div>
  );
}
