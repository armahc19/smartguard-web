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

const posts = [
  { slug: "ai-cctv-monitoring", title: "Why AI CCTV monitoring beats human review", cat: "AI Security", excerpt: "Guards watching camera walls miss up to 95% of events after 20 minutes. Here's how AI fixes that." },
  { slug: "virtual-zones-101", title: "Virtual zones 101: from cashier to loading bay", cat: "CCTV Monitoring", excerpt: "The five zone patterns every operation should configure on day one." },
  { slug: "ppe-detection-factory", title: "PPE detection on the factory floor", cat: "Workplace Safety", excerpt: "How custom AI models cut safety incidents by 37% in one plant." },
  { slug: "warehouse-guide", title: "The warehouse operator's guide to AI monitoring", cat: "Industry Guides", excerpt: "Loading-bay accidents, after-hours access, inventory shrinkage — solved with zones and rules." },
  { slug: "alert-fatigue", title: "Beating alert fatigue with smart rules", cat: "Operations", excerpt: "The rule patterns that keep security teams focused on real incidents." },
  { slug: "retail-shrinkage", title: "Reducing retail shrinkage with AI cameras", cat: "AI Security", excerpt: "Zone-based rules for cashier areas, aisles and after-hours." },
];

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
        {posts.map((p) => (
          <Link key={p.slug} to="/blog" className="glass-panel p-6 group hover:border-primary/30 transition-colors">
            <div className="text-xs uppercase tracking-widest text-primary">{p.cat}</div>
            <h2 className="mt-3 text-lg font-semibold group-hover:text-primary-glow transition-colors">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs text-primary">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
