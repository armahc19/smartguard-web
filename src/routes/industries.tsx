import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Retail, Warehouse, Factory, Schools | SmartGuard" },
      { name: "description", content: "SmartGuard deployments across retail, warehouse, factories, schools, construction and offices. Purpose-tuned AI monitoring for every environment." },
      { property: "og:title", content: "SmartGuard Industries" },
      { property: "og:description", content: "AI CCTV monitoring across every industry that takes safety seriously." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { name: "Retail", challenges: ["Shrinkage & shoplifting", "Cashier-area incidents", "Loitering in aisles"], solves: ["Zone-based cashier monitoring", "After-hours entry alerts", "Loitering & dwell-time detection"] },
  { name: "Warehouse", challenges: ["Loading-bay accidents", "Unauthorized access", "Inventory theft"], solves: ["Loading-bay safety zones", "Restricted-area enforcement", "After-hours access alerts"] },
  { name: "Factories", challenges: ["PPE non-compliance", "Machine-area safety", "Restricted room access"], solves: ["PPE detection (Enterprise)", "Machine-zone monitoring", "Rule-based room access"] },
  { name: "Schools", challenges: ["Perimeter security", "Unauthorized visitors", "After-hours activity"], solves: ["Perimeter zone alerts", "Visitor detection", "Scheduled monitoring windows"] },
  { name: "Construction", challenges: ["Site safety violations", "Equipment theft", "Restricted zones"], solves: ["PPE compliance detection", "After-hours site alerts", "Equipment-zone rules"] },
  { name: "Offices", challenges: ["Server room access", "After-hours activity", "Reception monitoring"], solves: ["Zone-based server room rules", "Off-hours WhatsApp alerts", "Access-log incidents"] },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-8 hero-gradient">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Industries</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient">Built for the environments where every second counts</h1>
          <p className="mt-4 text-lg text-muted-foreground">From factory floors to school campuses, SmartGuard adapts to the rules and risks of your industry.</p>
        </div>
      </section>
      <section className="container-page py-16 grid gap-6 lg:grid-cols-2">
        {industries.map((i) => (
          <div key={i.name} className="glass-panel p-8">
            <h2 className="text-2xl font-semibold">{i.name}</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-destructive/80">Challenges</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {i.challenges.map((c) => <li key={c} className="text-muted-foreground">• {c}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary">How SmartGuard solves it</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {i.solves.map((s) => (
                    <li key={s} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span>{s}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:text-primary-glow">
              Book demo for {i.name.toLowerCase()} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
