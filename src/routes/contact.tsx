import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail as MailIcon, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a SmartGuard Demo" },
      { name: "description", content: "Book a demo or talk to sales. See SmartGuard AI CCTV monitoring running on a live feed in 20 minutes." },
      { property: "og:title", content: "Contact SmartGuard" },
      { property: "og:description", content: "Book a demo. We'll show SmartGuard on a live feed." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-8 hero-gradient">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Contact</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient">Book a demo</h1>
          <p className="mt-4 text-lg text-muted-foreground">Tell us about your operation. We'll show SmartGuard running on a live feed and configure a rule with you in 20 minutes.</p>
        </div>
      </section>

      <section className="container-page py-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="glass-panel p-8 space-y-4"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
              <h2 className="mt-4 text-2xl font-semibold">Thanks — we'll be in touch.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Our team responds within one business day.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <label className="block">
                <span className="text-sm font-medium">Industry</span>
                <select name="industry" className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20">
                  <option>Retail</option><option>Warehouse</option><option>Factory</option>
                  <option>School</option><option>Construction</option><option>Office</option>
                  <option>Property management</option><option>Security company</option><option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium">Message</span>
                <textarea name="message" rows={4} className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20" placeholder="How many cameras? Any specific rules you need?" />
              </label>
              <button type="submit" className="btn-primary w-full justify-center">
                Book Demo <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>

        <aside className="space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-lg font-semibold">Talk to us</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2"><MailIcon className="h-4 w-4 text-primary" /> hello@smartguard.ai</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 010-1010</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Global — remote first</div>
            </div>
          </div>
          <div className="glass-panel p-2 overflow-hidden">
            <div className="aspect-[4/3] w-full rounded-lg bg-[linear-gradient(135deg,#0a1420,#0d1a26)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto pulse-dot rounded-full" />
                  <div className="mt-2 text-xs text-muted-foreground">Global HQ · Remote-first</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</span>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
