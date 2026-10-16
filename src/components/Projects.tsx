import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink, TrendingUp, MapPin,
  LayoutDashboard, ShieldCheck, GitMerge, Activity
} from 'lucide-react';
import { ReactNode } from 'react';

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

// ── TYPES ────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  icon: ReactNode;
  thumbnail: ReactNode;
  featured?: boolean;
}

// ── PROJECT DATA (SEO-OPTIMIZED COPY) ────────────────────────────────────────

const projects: Project[] = [
  {
    id: '1',
    name: 'PayGo Market Entry Analysis (Credit Risk & Market Sizing)',
    tagline: 'End-to-end data analytics simulation for energy finance decisions',
    description:
      'A full data analytics system combining market sizing, credit risk modeling, and churn prediction using Python and statistical methods. Built to simulate a real-world PayGo energy company market entry decision pipeline and support data-driven investment strategy.',
    tags: ['Python', 'SQL', 'Credit Risk Modeling', 'Churn Prediction', 'Market Sizing'],
    url: 'https://github.com/EricNjiraini/paygo-market-entry',
    icon: <TrendingUp className="w-5 h-5" />,
    thumbnail: <PayGoThumbnail />,
    featured: true,
  },
  {
    id: '2',
    name: 'Kenya Clean Cooking Gap Analysis (Geospatial Data Study)',
    tagline: 'County-level energy access and policy impact analysis',
    description:
      'A geospatial data analytics project that maps and quantifies clean cooking access gaps across Kenya at county level. Built using Python to identify underserved regions and support policy makers, investors, and energy access programs.',
    tags: ['Geospatial Analysis', 'Python', 'Data Visualization', 'Energy Access', 'Policy Analytics'],
    url: 'https://github.com/EricNjiraini/kenya-clean-cooking-gap',
    icon: <MapPin className="w-5 h-5" />,
    thumbnail: <CleanCookingThumbnail />,
    featured: true,
  },
  {
    id: '3',
    name: 'Executive Insights Dashboard (Power BI Business Intelligence)',
    tagline: 'Executive-level reporting and decision intelligence system',
    description:
      'A Power BI business intelligence dashboard designed for executive reporting and strategic decision-making. Converts raw operational data into clear insights for performance tracking, business analysis, and leadership reporting.',
    tags: ['Power BI', 'Business Intelligence', 'Data Visualization', 'Executive Reporting'],
    url: 'https://github.com/EricNjiraini/executive-dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    thumbnail: <ExecDashThumbnail />,
    featured: true,
  },
  {
    id: '4',
    name: 'Data Governance Framework (Enterprise Data Management System)',
    tagline: 'Organizational data quality and governance system',
    description:
      'An enterprise data governance framework designed to improve data quality, consistency, security, and usability across teams. Defines standards, validation rules, and stewardship processes for scalable analytics environments.',
    tags: ['Data Governance', 'Data Management', 'Documentation', 'Enterprise Systems'],
    url: 'https://github.com/EricNjiraini/data-governance-framework',
    icon: <ShieldCheck className="w-5 h-5" />,
    thumbnail: <GovernanceThumbnail />,
    featured: true,
  },
  {
    id: '5',
    name: 'Data Quality & Integration Framework (SQL & Python)',
    tagline: 'Cross-team data validation and integration system',
    description:
      'A data engineering and analytics framework for ensuring data quality across multiple teams. Includes validation logic, SQL pipelines, and Python-based automation for reliable and consistent data integration.',
    tags: ['Data Quality', 'SQL', 'Python', 'Data Integration', 'Automation'],
    url: 'https://github.com/EricNjiraini/data-quality-integration',
    icon: <GitMerge className="w-5 h-5" />,
    thumbnail: <DataQualityThumbnail />,
  },
  {
    id: '6',
    name: 'Data Team Productivity Analytics (KPIs & Dashboards)',
    tagline: 'Measuring and optimizing analytics team performance',
    description:
      'A KPI-driven analytics framework that measures data team productivity using dashboards, performance metrics, and reporting systems. Helps organizations track efficiency, backlog health, and delivery performance.',
    tags: ['KPIs', 'Analytics', 'Dashboards', 'Performance Metrics', 'Reporting'],
    url: 'https://github.com/EricNjiraini/data-team-productivity',
    icon: <Activity className="w-5 h-5" />,
    thumbnail: <TeamProductivityThumbnail />,
  },
];

// ── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// ── COMPONENT ────────────────────────────────────────────────────────────────

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">

      <div className="container mx-auto px-6">

        {/* HEADER (SEO IMPROVED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Data Analytics Projects & Case Studies
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data analytics case studies, dashboards, and frameworks built with Python, SQL, Power BI,
            and data governance principles to support business decision-making and operational insights.
          </p>
        </motion.div>

        {/* FEATURED PROJECTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-10"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, translateY: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden flex flex-col"
            >
              <div className="w-full h-36 overflow-hidden">
                {project.thumbnail}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">

                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {project.name}
                      </h3>
                    </div>

                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm text-primary font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SECONDARY PROJECTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {others.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, translateY: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-card/60 border border-border rounded-xl overflow-hidden flex flex-col"
            >
              <div className="w-full h-24 overflow-hidden">
                {project.thumbnail}
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">

                <div>
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.name}
                      </h3>
                    </div>

                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-primary font-medium mb-2">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;