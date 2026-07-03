import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SmartGuard AI CCTV Monitoring" },
      { name: "description", content: "Simple, transparent pricing for SmartGuard. Starter, Standard and Enterprise plans with custom AI models and unlimited cameras." },
      { property: "og:title", content: "SmartGuard Pricing" },
      { property: "og:description", content: "Three plans. Start small, scale to enterprise." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Starter", price: "$149", period: "/mo", tag: "For small businesses", cta: "Book Demo", features: ["Person detection", "Virtual zones", "Rule engine", "Live dashboard", "Up to 4 cameras", "Community support"] },
  { name: "Standard", price: "$399", period: "/mo", tag: "Growing operations", highlight: true, cta: "Book Demo", features: ["Everything in Starter", "WhatsApp alerts", "Email alerts", "Up to 20 cameras", "Analytics & reports", "Priority support"] },
  { name: "Enterprise", price: "Custom", period: "", tag: "Custom deployment", cta: "Contact Sales", features: ["Custom AI models", "PPE, product & vehicle detection", "API integration", "Unlimited cameras", "SSO & audit logs", "Dedicated support"] },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-8 hero-gradient text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-primary">Pricing</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient max-w-3xl mx-auto">Simple, transparent pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Start with what you need. Scale as your operation grows. No hidden fees.</p>
      </section>
      <section className="container-page py-16 grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`relative glass-panel p-8 flex flex-col ${t.highlight ? "border-primary/50 shadow-[0_0_60px_-20px_oklch(0.75_0.19_155/0.5)]" : ""}`}>
            {t.highlight && (
              <div className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</div>
            )}
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.tag}</div>
            <h2 className="mt-2 text-3xl font-semibold">{t.name}</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-gradient-primary">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.period}</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span>{f}</span></li>
              ))}
            </ul>
            <Link to="/contact" className={`mt-8 ${t.highlight ? "btn-primary" : "btn-ghost"} justify-center w-full`}>
              {t.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>
      <section className="container-page pb-20 text-center">
        <p className="text-muted-foreground">Need help choosing? <Link to="/contact" className="text-primary hover:text-primary-glow">Talk to sales</Link>.</p>
      </section>
    </SiteLayout>
  );
}
