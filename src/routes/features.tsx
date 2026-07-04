import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Brain, MapPin, Cog, Bell, LayoutDashboard, Zap, ArrowRight, CheckCircle2 } from "lucide-react";



const features = [
  { icon: Brain, title: "Person Detection", desc: "State-of-the-art vision models detect people entering camera scenes in real time, with confidence scoring and configurable thresholds.", bullets: ["Sub-second latency", "High accuracy in low light", "Runs on your existing cameras"] },
  { icon: MapPin, title: "Virtual Zones", desc: "Draw polygon-based zones directly onto live camera views. Configure per-zone rules for restricted areas, loading bays, cashier zones or server rooms.", bullets: ["Unlimited zones per camera", "Time-of-day schedules", "Directional entry/exit logic"] },
  { icon: Cog, title: "Rule Engine", desc: "Build conditional rules without writing code. Combine detections, zones and schedules to trigger the exact actions you need.", bullets: ["No-code rule builder", "Multi-condition logic", "Per-camera or global rules"] },
  { icon: Bell, title: "Instant Alerts", desc: "Route alerts to the right person on the right channel in under a second — WhatsApp, email, and dashboard notifications.", bullets: ["WhatsApp integration", "Email delivery", "Snooze & escalation"] },
  { icon: LayoutDashboard, title: "Live Dashboard", desc: "Command center for security and operations. Camera health, active alerts, recent incidents, analytics, rules and cameras — one view.", bullets: ["Live camera status", "Incident timeline", "Team roles & permissions"] },
  { icon: Zap, title: "Custom AI Models", desc: "For enterprise deployments: PPE detection, product detection, vehicle detection, and models trained on your specific operation.", bullets: ["PPE compliance", "Vehicle & product detection", "Custom training pipeline"] },
];

export default function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-8 hero-gradient">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Features</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient">Everything you need for intelligent monitoring</h1>
          <p className="mt-4 text-lg text-muted-foreground">Purpose-built capabilities for security and operations teams — from real-time detection to no-code rules and instant alerts.</p>
        </div>
      </section>
      <section className="container-page py-16 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="glass-panel p-8">
            <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary border border-primary/25">
              <f.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{f.title}</h2>
            <p className="mt-2 text-muted-foreground">{f.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="container-page pb-20">
        <div className="glass-panel p-10 text-center hero-gradient">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Ready to see it live?</h2>
          <p className="mt-3 text-muted-foreground">We'll run SmartGuard on a real camera feed and set up a rule with you.</p>
          <Link to="/contact" className="btn-primary mt-6">Book Demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
