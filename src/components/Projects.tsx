import { motion, type Variants } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, ExternalLink, Github, Globe2, TrendingUp, MapPin,
  LayoutDashboard, ShieldCheck, GitMerge, Activity, Sigma
} from 'lucide-react';
import { ReactNode } from 'react';
import { profile } from '@/lib/profile';

// ── SVG Thumbnails (UNCHANGED for UI consistency) ────────────────────────────

// 1. PayGo Market Entry — funnel stages + rising score line
const PayGoThumbnail = () => (
  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="pg2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="pg3" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
      </linearGradient>
      <linearGradient id="pgLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="8" fill="#0f0f1a" />
    {[28, 52, 76].map((y, i) => (
      <line key={i} x1="16" y1={y} x2="304" y2={y} stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
    ))}
    <rect x="20" y="22" width="190" height="22" rx="3" fill="url(#pg1)" />
    <rect x="20" y="52" width="128" height="22" rx="3" fill="url(#pg2)" />
    <rect x="20" y="82" width="76"  height="22" rx="3" fill="url(#pg3)" />
    <text x="216" y="37" fill="#a5b4fc" fontSize="9" fontFamily="monospace">Market Pool 100%</text>
    <text x="154" y="67" fill="#c4b5fd" fontSize="9" fontFamily="monospace">Credit-Scored 67%</text>
    <text x="102" y="97" fill="#ddd6fe" fontSize="9" fontFamily="monospace">Low-Churn 40%</text>
    <polyline
      points="20,134 55,128 95,122 135,115 175,108 215,100 258,91 300,82"
      fill="none" stroke="url(#pgLine)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="300" cy="82" r="3.5" fill="#a78bfa" />
    <text x="20" y="139" fill="#6366f1" fontSize="7" fontFamily="monospace" opacity="0.6">MARKET ENTRY SCORE ↗</text>
  </svg>
);

// 2. Kenya Clean Cooking — country outline + county deficit bars
const CleanCookingThumbnail = () => (
  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="140" rx="8" fill="#0a1628" />
    <polygon
      points="92,14 115,10 136,18 154,32 160,54 165,76 153,100 136,116 114,122 92,114 75,94 68,70 72,46 82,26"
      fill="#14532d" stroke="#22c55e" strokeWidth="1.4" opacity="0.85"
    />
    {[
      { cx: 102, cy: 50, r: 15, o: 0.9  },
      { cx: 134, cy: 74, r: 11, o: 0.75 },
      { cx: 112, cy: 98, r: 8,  o: 0.65 },
      { cx: 90,  cy: 80, r: 6,  o: 0.5  },
      { cx: 124, cy: 40, r: 5,  o: 0.45 },
      { cx: 146, cy: 60, r: 4,  o: 0.35 },
    ].map((d, i) => (
      <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#f97316" opacity={d.o} />
    ))}
    <text x="174" y="18" fill="#86efac" fontSize="8" fontFamily="monospace">ACCESS DEFICIT %</text>
    {[
      { label: "Turkana",  val: 92 },
      { label: "Mandera",  val: 88 },
      { label: "Wajir",    val: 84 },
      { label: "Marsabit", val: 79 },
      { label: "Samburu",  val: 71 },
    ].map((d, i) => (
      <g key={i}>
        <text x="174" y={34 + i * 20} fill="#94a3b8" fontSize="8" fontFamily="monospace">{d.label}</text>
        <rect x="222" y={23 + i * 20} width={d.val * 0.88} height="11" rx="2" fill="#f97316" opacity={0.4 + i * 0.07} />
        <text x={226 + d.val * 0.88} y={34 + i * 20} fill="#fb923c" fontSize="8" fontFamily="monospace">{d.val}%</text>
      </g>
    ))}
    <text x="174" y="134" fill="#22c55e" fontSize="7.5" fontFamily="monospace" opacity="0.6">47 COUNTIES MAPPED</text>
  </svg>
);

// 3. Executive Dashboard — KPI tiles + 12-month revenue bars
const ExecDashThumbnail = () => (
  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="140" rx="8" fill="#0c1220" />
    {[
      { x: 8,   color: "#0ea5e9", label: "Revenue",   val: "$2.4M",  delta: "+12%", pts: "8,54 20,48 34,50 48,41 60,36 72,30" },
      { x: 112, color: "#10b981", label: "Customers", val: "18,420", delta: "+8%",  pts: "8,54 20,49 34,45 48,42 60,38 72,32" },
      { x: 216, color: "#f59e0b", label: "Churn",     val: "3.2%",   delta: "-1.1%",pts: "8,34 20,38 34,37 48,42 60,45 72,48" },
    ].map((k) => (
      <g key={k.label} transform={`translate(${k.x},8)`}>
        <rect width="98" height="64" rx="6" fill="#141e30" stroke={k.color} strokeOpacity="0.3" strokeWidth="1" />
        <text x="8" y="18" fill="#94a3b8" fontSize="8" fontFamily="monospace">{k.label}</text>
        <text x="8" y="34" fill={k.color} fontSize="13" fontWeight="bold" fontFamily="monospace">{k.val}</text>
        <text x="8" y="47" fill={k.color} fontSize="9" fontFamily="monospace" opacity="0.8">{k.delta} MoM</text>
        <polyline points={k.pts} fill="none" stroke={k.color} strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ))}
    {[40, 55, 48, 70, 62, 80, 74, 88, 76, 92, 84, 98].map((h, i) => (
      <rect key={i} x={8 + i * 26} y={140 - h * 0.44} width="20" height={h * 0.44} rx="2"
        fill="#0ea5e9" opacity={0.18 + (i / 12) * 0.62} />
    ))}
    <text x="8" y="139" fill="#0ea5e9" fontSize="7" fontFamily="monospace" opacity="0.45">MONTHLY REVENUE — 12 MONTHS</text>
  </svg>
);

// 4. Data Governance — 4-stage pipeline + health indicators + quality score bar
const GovernanceThumbnail = () => (
  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="govNode" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
      <linearGradient id="govBar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>
    <rect width="320" height="140" rx="8" fill="#0d0d1f" />
    {[
      { x: 12,  label: "Ingest",   sub: "Raw Sources" },
      { x: 88,  label: "Validate", sub: "Schema Check" },
      { x: 164, label: "Govern",   sub: "Stewardship" },
      { x: 240, label: "Serve",    sub: "Consumers" },
    ].map((n, i) => (
      <g key={i}>
        <rect x={n.x} y="34" width="72" height="48" rx="6" fill="url(#govNode)" opacity={0.6 + i * 0.09} />
        <text x={n.x + 36} y="54" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">{n.label}</text>
        <text x={n.x + 36} y="69" fill="#c4b5fd" fontSize="7.5" fontFamily="monospace" textAnchor="middle">{n.sub}</text>
        {i < 3 && (
          <>
            <line x1={n.x + 74} y1="58" x2={n.x + 86} y2="58" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3,2" />
            <polygon points={`${n.x + 86},54 ${n.x + 92},58 ${n.x + 86},62`} fill="#7c3aed" />
          </>
        )}
      </g>
    ))}
    {[
      { x: 48,  color: "#22c55e", label: "✓ 98.4%" },
      { x: 124, color: "#22c55e", label: "✓ Clean" },
      { x: 200, color: "#f59e0b", label: "⚠ 2 open" },
      { x: 276, color: "#22c55e", label: "✓ 6 teams" },
    ].map((s) => (
      <text key={s.label} x={s.x} y="100" fill={s.color} fontSize="7.5" fontFamily="monospace" textAnchor="middle">{s.label}</text>
    ))}
    <rect x="12" y="112" width="296" height="8" rx="4" fill="#1e1b4b" />
    <rect x="12" y="112" width="266" height="8" rx="4" fill="url(#govBar)" opacity="0.85" />
    <text x="12"  y="132" fill="#818cf8" fontSize="7.5" fontFamily="monospace">DATA QUALITY SCORE</text>
    <text x="308" y="132" fill="#a5b4fc" fontSize="7.5" fontFamily="monospace" textAnchor="end">90 / 100</text>
  </svg>
);

// 5. Data Quality & Integration — stacked pass/fail bars by team
const DataQualityThumbnail = () => (
  <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="110" rx="8" fill="#0f172a" />
    <text x="12" y="14" fill="#64748b" fontSize="8" fontFamily="monospace">DATA VALIDATION BY TEAM</text>
    {[
      { label: "Sales",   pass: 95, fail: 5  },
      { label: "Ops",     pass: 88, fail: 12 },
      { label: "Finance", pass: 99, fail: 1  },
      { label: "HR",      pass: 76, fail: 24 },
    ].map((d, i) => (
      <g key={i}>
        <text x="12" y={32 + i * 20} fill="#94a3b8" fontSize="9" fontFamily="monospace">{d.label}</text>
        <rect x="62" y={20 + i * 20} width={d.pass * 1.7} height="12" rx="2" fill="#22c55e" opacity="0.7" />
        <rect x={62 + d.pass * 1.7} y={20 + i * 20} width={d.fail * 1.7} height="12" rx="2" fill="#ef4444" opacity="0.65" />
        <text x={68 + (d.pass + d.fail) * 1.7} y={32 + i * 20} fill="#94a3b8" fontSize="8" fontFamily="monospace">{d.pass}%</text>
      </g>
    ))}
    <rect x="12" y="98" width="8" height="8" rx="1" fill="#22c55e" opacity="0.7" />
    <text x="24" y="106" fill="#64748b" fontSize="7.5" fontFamily="monospace">Pass</text>
    <rect x="58" y="98" width="8" height="8" rx="1" fill="#ef4444" opacity="0.65" />
    <text x="70" y="106" fill="#64748b" fontSize="7.5" fontFamily="monospace">Fail</text>
  </svg>
);

// 6. Data Team Productivity — sprint velocity bars + KPI pills
const TeamProductivityThumbnail = () => (
  <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="velBar" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.95" />
      </linearGradient>
    </defs>
    <rect width="280" height="110" rx="8" fill="#071122" />
    <text x="12" y="13" fill="#64748b" fontSize="8" fontFamily="monospace">SPRINT VELOCITY (TASKS CLOSED)</text>
    {[18, 22, 19, 25, 28, 24, 30, 27, 32, 29].map((v, i) => (
      <rect key={i} x={12 + i * 23} y={70 - v * 1.5} width="16" height={v * 1.5} rx="2" fill="url(#velBar)" />
    ))}
    {[1, 3, 5, 7, 9].map((s, i) => (
      <text key={i} x={20 + i * 46} y="82" fill="#475569" fontSize="7" fontFamily="monospace" textAnchor="middle">S{s}</text>
    ))}
    {[
      { x: 12,  color: "#10b981", label: "SLA Met",  val: "94%" },
      { x: 102, color: "#f59e0b", label: "Backlog",  val: "12"  },
      { x: 192, color: "#6366f1", label: "Avg Lead", val: "2.3d" },
    ].map((k) => (
      <g key={k.label}>
        <rect x={k.x} y="88" width="84" height="18" rx="4" fill={k.color} fillOpacity="0.15" stroke={k.color} strokeOpacity="0.4" strokeWidth="0.8" />
        <text x={k.x + 8} y="100" fill={k.color} fontSize="8" fontFamily="monospace">{k.label}: {k.val}</text>
      </g>
    ))}
  </svg>
);

// 7. Africa SDG Scorecard — country × goal heatmap + regional averages
const sdgGoals = [1, 2, 3, 4, 7, 8, 13];
const sdgRows = [
  { code: 'KEN', v: [0.6, 0.5, 0.7, 0.8, 0.7, 0.6, 0.9] },
  { code: 'RWA', v: [0.4, 0.5, 0.8, 0.7, 0.5, 0.8, 0.9] },
  { code: 'GHA', v: [0.7, 0.8, 0.6, 0.7, 0.8, 0.5, 0.7] },
  { code: 'NGA', v: [0.3, 0.4, 0.3, 0.5, 0.6, 0.4, 0.8] },
  { code: 'ETH', v: [0.5, 0.3, 0.6, 0.4, 0.3, 0.8, 0.9] },
  { code: 'ZAF', v: [0.8, 0.7, 0.6, 0.9, 0.9, 0.3, 0.2] },
];
const sdgCell = (v: number) => (v >= 0.66 ? '#22c55e' : v >= 0.4 ? '#f59e0b' : '#ef4444');

const SdgThumbnail = () => (
  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="140" rx="8" fill="#0b1120" />
    <text x="12" y="16" fill="#64748b" fontSize="8" fontFamily="monospace">SDG SCORECARD · 2015–2030</text>
    {sdgGoals.map((g, j) => (
      <text key={g} x={58 + j * 21} y="30" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">{g}</text>
    ))}
    {sdgRows.map((row, i) => (
      <g key={row.code}>
        <text x="12" y={44 + i * 16} fill="#94a3b8" fontSize="8" fontFamily="monospace">{row.code}</text>
        {row.v.map((v, j) => (
          <rect key={j} x={49 + j * 21} y={35 + i * 16} width="18" height="12" rx="2"
            fill={sdgCell(v)} opacity={0.35 + v * 0.55} />
        ))}
      </g>
    ))}
    <text x="214" y="30" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">REGIONAL AVG</text>
    {[
      { label: 'North',   val: 71 },
      { label: 'South',   val: 66 },
      { label: 'East',    val: 62 },
      { label: 'West',    val: 54 },
      { label: 'Central', val: 47 },
    ].map((d, i) => (
      <g key={d.label}>
        <text x="214" y={46 + i * 16} fill="#64748b" fontSize="7.5" fontFamily="monospace">{d.label}</text>
        <rect x="254" y={38 + i * 16} width={d.val * 0.75} height="9" rx="2" fill="#38bdf8" opacity={0.85 - i * 0.1} />
      </g>
    ))}
    <text x="214" y="132" fill="#22c55e" fontSize="7.5" fontFamily="monospace" opacity="0.7">54 COUNTRIES × 7 GOALS</text>
  </svg>
);

// 8. Verification sample size — Monte Carlo spread narrowing as n grows
const mcPoints = (() => {
  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 70 }, (_, i) => {
    const t = i / 69;
    const spread = 34 * (1 - t) + 4;
    return { x: 24 + t * 240, y: 58 + (rand() - 0.5) * 2 * spread };
  });
})();

const MonteCarloThumbnail = () => (
  <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="110" rx="8" fill="#0c0f1d" />
    <text x="12" y="13" fill="#64748b" fontSize="8" fontFamily="monospace">VERIFICATION RATE vs SAMPLE SIZE</text>
    <path d="M24,20 Q140,50 264,54" fill="none" stroke="#a78bfa" strokeOpacity="0.5" strokeDasharray="3,2" />
    <path d="M24,96 Q140,66 264,62" fill="none" stroke="#a78bfa" strokeOpacity="0.5" strokeDasharray="3,2" />
    <line x1="24" y1="58" x2="264" y2="58" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="1" />
    {mcPoints.map((p, i) => (
      <circle key={i} cx={p.x} cy={p.y} r="1.8" fill="#c4b5fd" opacity="0.75" />
    ))}
    <text x="24" y="106" fill="#475569" fontSize="7" fontFamily="monospace">n = 30</text>
    <text x="264" y="106" fill="#475569" fontSize="7" fontFamily="monospace" textAnchor="end">n = 1,000</text>
  </svg>
);

// ── TYPES ────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  demo?: string;
  icon: ReactNode;
  thumbnail: ReactNode;
  thumbBg: string; // matches the thumbnail's own background so letterboxing is seamless
  featured?: boolean;
}

// ── PROJECT DATA ─────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 'paygo',
    name: 'PayGo Cookstove Market Entry',
    tagline: 'Market sizing, credit risk and churn for a four-country launch',
    description:
      'Three linked models for a PayGo cookstove company choosing between Kenya, Uganda, Tanzania and Ethiopia: a market-entry scorecard built on DHS, Findex and GSMA data, a default-risk model (logistic regression, random forest, XGBoost), and survival-based churn prediction. The customer ledger is simulated from GOGLA benchmarks.',
    tags: ['Python', 'XGBoost', 'Survival Analysis', 'Market Sizing', 'Geospatial'],
    url: `${profile.github}/paygo-cookstove-market-entry`,
    icon: <TrendingUp className="w-5 h-5" />,
    thumbnail: <PayGoThumbnail />,
    thumbBg: '#0f0f1a',
    featured: true,
  },
  {
    id: 'sdg',
    name: 'Africa SDG Scorecard',
    tagline: 'Live dashboard: 54 countries × 7 Sustainable Development Goals',
    description:
      'An interactive scorecard tracking progress on 7 SDGs across all 54 African countries from 2015 to 2030, built on UN, World Bank, WHO, FAO and UNESCO open data. It includes a sortable heatmap, charts, country deep-dives and written analysis.',
    tags: ['React', 'Python', 'Recharts', 'Open Data', 'SDGs'],
    url: `${profile.github}/africa-sdg-scorecard`,
    demo: 'https://africa-sdg-scorecard.vercel.app',
    icon: <Globe2 className="w-5 h-5" />,
    thumbnail: <SdgThumbnail />,
    thumbBg: '#0b1120',
    featured: true,
  },
  {
    id: 'clean-cooking',
    name: 'Kenya Clean Cooking Gap',
    tagline: 'County-level geospatial study using DHS 2022 data',
    description:
      "Maps clean cooking access across Kenya's 47 counties. Electricity reaches 77% of households, yet only about 31% cook with clean fuels. The analysis ranks counties by access deficit and shows where LPG expansion and e-cooking pilots would do the most good per unit of capital.",
    tags: ['Python', 'GeoPandas', 'DHS 2022', 'Geospatial Analysis', 'Energy Access'],
    url: `${profile.github}/kenya-clean-cooking-gap`,
    icon: <MapPin className="w-5 h-5" />,
    thumbnail: <CleanCookingThumbnail />,
    thumbBg: '#0a1628',
    featured: true,
  },
  {
    id: 'exec-dashboard',
    name: 'Executive Insights Dashboard',
    tagline: 'From raw data to a boardroom-ready story',
    description:
      'A data storytelling project that turns sales, customer, product and regional data into a KPI dashboard and a five-slide strategy deck, with views tailored to the CEO, COO, CMO and CFO.',
    tags: ['Power BI', 'R', 'Data Storytelling', 'Executive Reporting'],
    url: `${profile.github}/Executive-Dashboard--From-Data-to-Decision`,
    icon: <LayoutDashboard className="w-5 h-5" />,
    thumbnail: <ExecDashThumbnail />,
    thumbBg: '#0c1220',
    featured: true,
  },
  {
    id: 'governance',
    name: 'Data Governance Framework',
    tagline: 'Policies, stewardship and quality rules, ready to adopt',
    description:
      'A governance kit covering data policies, a stewardship RACI matrix, quality rules, a compliance checklist, data dictionary templates and monitoring scripts for schema drift.',
    tags: ['Data Governance', 'Data Quality', 'Stewardship', 'Compliance'],
    url: `${profile.github}/Data-Governance-Framework`,
    icon: <ShieldCheck className="w-5 h-5" />,
    thumbnail: <GovernanceThumbnail />,
    thumbBg: '#0d0d1f',
  },
  {
    id: 'data-quality',
    name: 'Data Quality & Integration',
    tagline: 'Validation and onboarding across teams',
    description:
      'SQL and R validation scripts plus intake and mapping templates that let new teams plug into shared reporting without breaking it.',
    tags: ['SQL', 'R', 'Data Validation', 'Data Integration'],
    url: `${profile.github}/Data-Quality-and-Integration-Across-Teams`,
    icon: <GitMerge className="w-5 h-5" />,
    thumbnail: <DataQualityThumbnail />,
    thumbBg: '#0f172a',
  },
  {
    id: 'monte-carlo',
    name: 'Verification Sample Size Simulation',
    tagline: 'Monte Carlo study of sampling stability',
    description:
      "An R simulation that finds the smallest sample that gives a stable sales verification rate, by resampling each agent's records at increasing sizes and testing how the variance shrinks.",
    tags: ['R', 'Monte Carlo', 'data.table', 'Sampling'],
    url: `${profile.github}/Sample-Size-vs-Verification-Outcome-Monte-Carlo-Simulation`,
    icon: <Sigma className="w-5 h-5" />,
    thumbnail: <MonteCarloThumbnail />,
    thumbBg: '#0c0f1d',
  },
  {
    id: 'team-productivity',
    name: 'Data Team Productivity Tracker',
    tagline: 'KPIs for running a data team',
    description:
      'A framework for measuring a data team on velocity, on-time delivery, quality and utilisation, with Power BI and Smartsheet dashboard guides and a weekly report template.',
    tags: ['KPIs', 'Power BI', 'Smartsheet', 'Team Performance'],
    url: `${profile.github}/Data-Team-Productivity-Tracker`,
    icon: <Activity className="w-5 h-5" />,
    thumbnail: <TeamProductivityThumbnail />,
    thumbBg: '#071122',
  },
];

// ── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// ── CARD ─────────────────────────────────────────────────────────────────────

const ProjectCard = ({ project, compact = false }: { project: Project; compact?: boolean }) => (
  <motion.article
    variants={cardVariants}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className={`${compact ? 'bg-card/60' : 'bg-card/80 backdrop-blur-sm'} border border-border rounded-xl overflow-hidden flex flex-col h-full hover:shadow-card transition-shadow`}
  >
    <div
      className={`w-full ${compact ? 'aspect-[28/11] max-h-36' : 'aspect-[16/7] max-h-56'}`}
      style={{ backgroundColor: project.thumbBg }}
      aria-hidden="true"
    >
      {project.thumbnail}
    </div>

    <div className={`${compact ? 'p-5' : 'p-5 sm:p-6'} flex flex-col flex-1`}>
      <div className="flex items-start gap-3 mb-2">
        <div className={`${compact ? 'p-1.5 rounded-md' : 'p-2 rounded-lg'} bg-primary/10 text-primary shrink-0`}>
          {project.icon}
        </div>
        <h3 className={`${compact ? 'text-lg font-semibold' : 'text-xl font-bold'} text-foreground leading-snug pt-0.5`}>
          {project.name}
        </h3>
      </div>

      <p className={`${compact ? 'text-xs' : 'text-sm'} text-primary font-medium mb-3`}>
        {project.tagline}
      </p>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Actions: full-size tap targets */}
      <div className="mt-auto flex flex-wrap gap-2">
        {project.demo && (
          <Button asChild className="h-10 flex-1 sm:flex-none">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink /> Live demo
            </a>
          </Button>
        )}
        <Button asChild variant="outline" className="h-10 flex-1 sm:flex-none">
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${project.name} on GitHub`}>
            <Github /> View code
          </a>
        </Button>
      </div>
    </div>
  </motion.article>
);

// ── COMPONENT ────────────────────────────────────────────────────────────────

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-subtle">

      <div className="container mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-foreground">
            Data Analytics Projects & Case Studies
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Case studies, dashboards and frameworks built with Python, R, SQL and Power BI, mostly drawn
            from clean energy and international development.
          </p>
        </motion.div>

        {/* FEATURED PROJECTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 gap-5 sm:gap-8 mb-8 md:mb-10"
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* SECONDARY PROJECTS */}
        <h3 className="text-lg font-semibold text-foreground mb-4">More frameworks & experiments</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button asChild variant="ghost" size="lg" className="hover:text-primary">
            <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
              All repositories on GitHub <ArrowRight />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
