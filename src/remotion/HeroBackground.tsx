import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

type Props = { frame: number; totalFrames: number };

/** Pure React — no Remotion hooks. Usable both in a Remotion composition
 *  and driven directly by a requestAnimationFrame loop on the web. */
export function HeroBackgroundContent({ frame, totalFrames }: Props) {
  const t = (frame / totalFrames) * Math.PI * 2;

  // Three gold light pools with independent, seamlessly-looping motion
  const pools = [
    {
      x: (72 + Math.sin(t) * 8).toFixed(2),
      y: (28 + Math.cos(t * 0.71) * 10).toFixed(2),
      rx: 62, ry: 55,
      a: (0.13 + Math.sin(t * 1.1) * 0.04).toFixed(3),
    },
    {
      x: (12 + Math.sin(t + 2.09) * 7).toFixed(2),
      y: (80 + Math.cos(t * 0.83) * 8).toFixed(2),
      rx: 48, ry: 42,
      a: (0.07 + Math.sin(t * 0.9 + 1) * 0.025).toFixed(3),
    },
    {
      x: (50 + Math.sin(t * 0.61 + 1) * 14).toFixed(2),
      y: (52 + Math.cos(t * 0.53) * 18).toFixed(2),
      rx: 55, ry: 50,
      a: (0.045 + Math.sin(t * 0.72) * 0.015).toFixed(3),
    },
  ];

  const gradientBg = pools
    .map(
      (p) =>
        `radial-gradient(ellipse ${p.rx}% ${p.ry}% at ${p.x}% ${p.y}%, rgba(201,152,10,${p.a}) 0%, transparent 100%)`,
    )
    .join(', ');

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#3D0C1A', overflow: 'hidden' }}>
      {/* Fabric grain — SVG fractalNoise at low opacity */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="pesdac-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72 0.58"
              numOctaves="4"
              seed={12}
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
            <feComponentTransfer in="grey" result="dimmed">
              <feFuncA type="linear" slope="0.09" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="dimmed" mode="overlay" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="#3D0C1A" filter="url(#pesdac-grain)" />
      </svg>

      {/* Animated gold light pools */}
      <div style={{ position: 'absolute', inset: 0, background: gradientBg }} />

      {/* Edge vignette — darkens corners for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 25%, rgba(8,0,3,0.6) 100%)',
        }}
      />
    </div>
  );
}

/** Full Remotion composition — used by `remotion render` / video export. */
export function HeroBackground() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  return (
    <AbsoluteFill>
      <HeroBackgroundContent frame={frame} totalFrames={durationInFrames} />
    </AbsoluteFill>
  );
}
