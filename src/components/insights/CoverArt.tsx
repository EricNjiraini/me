import type { ReactNode } from 'react';
import type { CoverMotif } from '@/lib/covers';

// Abstract chart drawings for insight covers. Purely decorative: no real figures.
// Drawn in currentColor on a 120 × 80 grid; the cover sets the colour and opacity.

const heat = [
  0.7, 0.4, 0.85, 0.25, 0.6, 0.35,
  0.3, 0.75, 0.5, 0.8, 0.2, 0.65,
  0.55, 0.2, 0.65, 0.4, 0.85, 0.3,
  0.8, 0.5, 0.3, 0.7, 0.45, 0.6,
];

// Monte Carlo-style cloud that narrows from left to right (seeded, so it's the same every render)
const cloud = (() => {
  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 48 }, (_, i) => {
    const t = i / 47;
    return { x: 8 + t * 104, y: 40 + (rand() - 0.5) * 2 * (30 * (1 - t) + 3) };
  });
})();

const velocity = [20, 26, 22, 32, 36, 30, 42, 38, 48];

const motifs: Record<CoverMotif, ReactNode> = {
  heatmap: heat.map((opacity, i) => (
    <rect key={i} x={4.5 + (i % 6) * 19} y={3.5 + Math.floor(i / 6) * 19} width={16} height={16} rx={2.5} fillOpacity={opacity} />
  )),

  map: (
    <>
      <polygon
        points="43.3,4.7 59,2 73.2,7.4 85.5,17 89.6,31.9 93,46.9 84.8,63.2 73.2,74.1 58.3,78.2 43.3,72.7 31.8,59.1 27,42.8 29.7,26.5 36.5,12.9"
        fillOpacity={0.12}
        stroke="currentColor"
        strokeOpacity={0.6}
        strokeWidth={1.2}
      />
      {[
        [50, 30, 9, 0.8],
        [71, 46, 7, 0.65],
        [57, 62, 5.5, 0.55],
        [42, 48, 4.5, 0.45],
        [64, 22, 3.5, 0.4],
        [79, 36, 3, 0.35],
      ].map(([cx, cy, r, opacity]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fillOpacity={opacity} />
      ))}
    </>
  ),

  funnel: (
    <>
      <rect x={8} y={6} width={104} height={13} rx={2} fillOpacity={0.75} />
      <rect x={8} y={24} width={72} height={13} rx={2} fillOpacity={0.55} />
      <rect x={8} y={42} width={44} height={13} rx={2} fillOpacity={0.4} />
      <polyline points="8,76 26,73 44,70 62,66 80,61 98,55 112,50" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={112} cy={50} r={2.5} />
    </>
  ),

  scatter: (
    <>
      <path d="M8,10 Q60,32 112,37" fill="none" stroke="currentColor" strokeOpacity={0.5} strokeDasharray="3 2" />
      <path d="M8,70 Q60,48 112,43" fill="none" stroke="currentColor" strokeOpacity={0.5} strokeDasharray="3 2" />
      <line x1={8} y1={40} x2={112} y2={40} stroke="currentColor" strokeOpacity={0.6} />
      {cloud.map((point, i) => (
        <circle key={i} cx={point.x} cy={point.y} r={1.6} fillOpacity={0.8} />
      ))}
    </>
  ),

  kpi: (
    <>
      {[6, 44, 82].map((x, i) => (
        <g key={x}>
          <rect x={x} y={4} width={32} height={22} rx={3} fillOpacity={0.18} stroke="currentColor" strokeOpacity={0.5} />
          <polyline
            points={i === 2 ? `${x + 5},12 ${x + 12},15 ${x + 19},14 ${x + 27},20` : `${x + 5},20 ${x + 12},16 ${x + 19},17 ${x + 27},10`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        </g>
      ))}
      {[12, 18, 15, 24, 20, 28, 25, 33, 30, 38].map((h, i) => (
        <rect key={i} x={6 + i * 11} y={78 - h} width={8} height={h} rx={1.5} fillOpacity={0.25 + i * 0.06} />
      ))}
    </>
  ),

  flow: (
    <>
      {[1, 33, 65, 97].map((x, i) => (
        <g key={x}>
          <rect x={x} y={22} width={22} height={16} rx={3} fillOpacity={0.25 + i * 0.15} />
          <circle cx={x + 11} cy={48} r={2.5} fillOpacity={0.7} />
          {i < 3 && (
            <>
              <line x1={x + 23} y1={30} x2={x + 29} y2={30} stroke="currentColor" strokeWidth={1.5} strokeDasharray="2 1.5" />
              <polygon points={`${x + 29},27 ${x + 32},30 ${x + 29},33`} />
            </>
          )}
        </g>
      ))}
      <rect x={1} y={60} width={118} height={6} rx={3} fillOpacity={0.15} />
      <rect x={1} y={60} width={96} height={6} rx={3} fillOpacity={0.6} />
    </>
  ),

  stacked: [92, 80, 104, 66].map((pass, i) => (
    <g key={i}>
      <rect x={4} y={6 + i * 18} width={pass} height={12} rx={2} fillOpacity={0.7} />
      <rect x={4 + pass} y={6 + i * 18} width={112 - pass} height={12} rx={2} fillOpacity={0.25} />
    </g>
  )),

  trend: (
    <>
      {velocity.map((h, i) => (
        <rect key={i} x={6 + i * 12.5} y={76 - h} width={9} height={h} rx={1.5} fillOpacity={0.35} />
      ))}
      <polyline
        points={velocity.map((h, i) => `${10.5 + i * 12.5},${70 - h}`).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={10.5 + 8 * 12.5} cy={70 - 48} r={2.5} />
    </>
  ),
};

const CoverArt = ({ motif, className }: { motif: CoverMotif; className?: string }) => (
  <svg viewBox="0 0 120 80" fill="currentColor" aria-hidden="true" className={className}>
    {motifs[motif]}
  </svg>
);

export default CoverArt;
