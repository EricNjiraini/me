/// <reference types="vite/client" />

// Insight files, compiled by scripts/insights-plugin.ts
declare module '*.md' {
  const insight: import('./lib/insights').Insight;
  export default insight;
}
