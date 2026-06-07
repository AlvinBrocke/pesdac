'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Extra class names merged onto the wrapper */
  className?: string;
  /** Seconds before the fade-up transition starts (non-stagger mode) */
  delay?: number;
  /** When true, adds stagger-grid class — CSS handles per-child delays */
  stagger?: boolean;
};

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  stagger = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? 'stagger-grid' : 'animate-fade-up'} ${className}`.trim()}
      style={!stagger ? ({ '--anim-delay': `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
