import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-subtle px-5">
      <div className="text-center">
        <p className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">404</p>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has moved.</p>
        <Button asChild size="lg">
          <a href="/">Back to ericnjiraini.com</a>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
