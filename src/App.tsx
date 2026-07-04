import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/index";
import BlogPage from "./routes/blog";
import ArticlePage from "./routes/blog_.$slug";
import ContactPage from "./routes/contact";
import DemoPage from "./routes/demo";
import FeaturesPage from "./routes/features";
import IndustriesPage from "./routes/industries";
import PricingPage from "./routes/pricing";
import { useEffect } from "react";
import { reportLovableError } from "./lib/lovable-error-reporting";

const queryClient = new QueryClient();

export default function App() {
  // Simulating the error reporting boundary
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      reportLovableError(error.error, { boundary: "react_router_root" });
    };
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 404
        </div>
        <h1 className="text-4xl font-bold text-gradient">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <a href="/" className="btn-primary">Go home</a>
        </div>
      </div>
    </div>
  );
}
