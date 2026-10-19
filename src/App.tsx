import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Shared by the browser (BrowserRouter) and the build-time prerender (StaticRouter).
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    {/* Add any additional routes here */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
