import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import InsightPage from "./pages/InsightPage";
import NotFound from "./pages/NotFound";

// Client-side navigation keeps the old scroll position by default. Start new pages at the
// top, jump to #section links, and leave back/forward to the browser's own restoration.
// Query changes (the ?type= filter) don't scroll.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (navigationType === "POP") return;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType]);

  return null;
};

// Shared by the browser (BrowserRouter) and the build-time prerender (StaticRouter).
// Every route also needs a page in scripts/prerender.mjs: Vercel serves static files only.
export const AppRoutes = () => (
  <>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<InsightPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
    <Analytics />
  </BrowserRouter>
);

export default App;
