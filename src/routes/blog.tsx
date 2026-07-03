import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AI Security, Workplace Safety & CCTV Monitoring | SmartGuard" },
      { name: "description", content: "Insights on AI security, CCTV monitoring, workplace safety, operations and industry guides from the SmartGuard team." },
      { property: "og:title", content: "SmartGuard Blog" },
      { property: "og:description", content: "AI security, CCTV monitoring, workplace safety." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

import { blogArticles } from "@/lib/blog-data";

function BlogPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-8 hero-gradient">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Blog</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient">Insights on AI security & monitoring</h1>
          <p className="mt-4 text-lg text-muted-foreground">Field notes from teams running SmartGuard across retail, warehouse, factory and beyond.</p>
        </div>
      </section>
      <section className="container-page py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogArticles.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="glass-panel p-6 group hover:border-primary/30 transition-colors flex flex-col h-full">
            <div className="text-xs uppercase tracking-widest text-primary">{p.category}</div>
            <h2 className="mt-3 text-lg font-semibold group-hover:text-primary-glow transition-colors">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground flex-grow">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium">Read article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></span>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
