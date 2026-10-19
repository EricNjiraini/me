import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Production pages are prerendered (scripts/prerender.mjs), so hydrate them; dev starts empty.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
