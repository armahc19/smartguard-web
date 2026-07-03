import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldAlert,
  UserX,
  HardHat,
  DoorClosed,
  EyeOff,
  Brain,
  Camera,
  MapPin,
  Cog,
  Bell,
  LayoutDashboard,
  MessageCircle,
  Mail,
  CheckCircle2,
  Zap,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartGuard — AI That Watches Your CCTV Cameras" },
      {
        name: "description",
        content:
          "Turn any CCTV into an intelligent monitoring system. Real-time person detection, virtual zones, custom rules, and instant WhatsApp & email alerts.",
      },
      { property: "og:title", content: "SmartGuard — AI CCTV Monitoring Platform" },
      { property: "og:description", content: "AI that watches your cameras so your team doesn't have to." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionWorkflow />
      <FeaturesGrid />
      <IndustriesPreview />
      <DemoSimulator />
      <PricingPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container-page relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI monitoring layer for existing CCTV
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient">
            AI That Watches Your Cameras So Your Team Doesn't Have To
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Monitor CCTV cameras in real time using intelligent detection, virtual zones, configurable rules, and instant alerts — on the cameras you already own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Book Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/demo" className="btn-ghost">
              <Play className="h-4 w-4" /> Watch Demo
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["No hardware replacement", "Works with any RTSP camera", "Deploy in hours"].map((t) => (
              <div key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 lg:mt-20"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-60" />
          <div className="glass-panel overflow-hidden rounded-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">smartguard.ai / command-center</span>
            </div>
            <img
              src={heroImg}
              alt="SmartGuard AI CCTV monitoring dashboard with live camera feeds and detection overlays"
              width={1600}
              height={1104}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Trust bar ---------------- */
function TrustBar() {
  const industries = ["Factories", "Warehouses", "Retail", "Schools", "Offices", "Construction"];
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by businesses that care about security, safety and operations
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((i) => (
            <span
              key={i}
              className="text-sm md:text-base font-display font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Problem ---------------- */
function ProblemSection() {
  const problems = [
    { icon: UserX, title: "Unauthorized Access", desc: "People entering restricted zones after hours or without clearance go unnoticed." },
    { icon: HardHat, title: "Safety Violations", desc: "PPE breaches and unsafe behaviour on the floor slip past manual review." },
    { icon: DoorClosed, title: "Restricted Area Entry", desc: "Server rooms, cashier areas and loading bays lack real-time enforcement." },
    { icon: EyeOff, title: "Missed Incidents", desc: "Critical events are only discovered hours later during footage review." },
    { icon: Brain, title: "Human Monitoring Fatigue", desc: "Guards watching 32-camera walls miss up to 95% of events after 20 minutes." },
    { icon: ShieldAlert, title: "Costly Losses", desc: "Shrinkage, theft, and safety incidents cost businesses millions each year." },
  ];
  return (
    <Section
      eyebrow="The problem"
      title="You have the cameras. Nobody is really watching."
      description="Passive CCTV creates a false sense of security. Recordings help after the fact — they don't prevent incidents."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-panel p-6 group hover:border-primary/30 transition-colors"
          >
            <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-destructive/10 text-destructive border border-destructive/20">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Solution workflow ---------------- */
function SolutionWorkflow() {
  const steps = [
    { icon: Camera, label: "Camera", note: "Any RTSP feed" },
    { icon: Brain, label: "AI Detection", note: "Person & object" },
    { icon: MapPin, label: "Zone Engine", note: "Polygon zones" },
    { icon: Cog, label: "Rule Engine", note: "If/then logic" },
    { icon: Bell, label: "Alert", note: "WhatsApp • Email" },
    { icon: LayoutDashboard, label: "Dashboard", note: "Live incidents" },
  ];
  return (
    <Section
      eyebrow="The solution"
      title="An intelligent layer on top of your existing CCTV"
      description="SmartGuard plugs into your current cameras and turns raw footage into real-time understanding and action."
    >
      <div className="glass-panel mt-12 p-6 lg:p-10">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-stretch">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="relative flex flex-col items-center text-center p-4 rounded-xl border border-border/60 bg-background/40"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary border border-primary/25">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm font-semibold">{s.label}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{s.note}</div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-primary/60">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Features grid ---------------- */
function FeaturesGrid() {
  const features = [
    {
      icon: Brain,
      title: "Person Detection",
      desc: "Detect people entering camera scenes in real time with high-accuracy vision models.",
    },
    {
      icon: MapPin,
      title: "Virtual Zones",
      desc: "Draw polygon-based zones directly on live camera views — restricted areas, loading bays, cashier zones, server rooms.",
    },
    {
      icon: Cog,
      title: "Rule Engine",
      desc: "Build no-code rules: if person enters Zone A → trigger WhatsApp alert, email, log incident and create event.",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      desc: "Route alerts to WhatsApp, email and the dashboard in under a second — no more delayed responses.",
    },
    {
      icon: LayoutDashboard,
      title: "Live Dashboard",
      desc: "Camera status, active alerts, incidents, analytics, rules and cameras — one unified command center.",
    },
    {
      icon: Zap,
      title: "Custom AI Models",
      desc: "Enterprise: PPE detection, product detection, vehicle detection and bespoke models tuned for your operation.",
    },
  ];
  return (
    <Section
      eyebrow="Features"
      title="Everything you need to run intelligent monitoring"
      description="Enterprise-grade capabilities out of the box — no ML team required."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-panel p-6 group hover:border-primary/30 transition-colors"
          >
            <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary border border-primary/25 group-hover:scale-105 transition-transform">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            <Link
              to="/features"
              className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:text-primary-glow"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Industries ---------------- */
function IndustriesPreview() {
  const list = [
    { title: "Retail", desc: "Reduce shrinkage, monitor cashier areas, detect loitering." },
    { title: "Warehouse", desc: "Loading-bay safety, restricted zones, after-hours access." },
    { title: "Factories", desc: "PPE compliance, production line safety, restricted rooms." },
    { title: "Schools", desc: "Perimeter monitoring, unauthorized entry, campus safety." },
    { title: "Construction", desc: "Site safety, PPE detection, equipment zones." },
    { title: "Offices", desc: "After-hours monitoring, server rooms, access enforcement." },
  ];
  return (
    <Section
      eyebrow="Industries"
      title="Built for the environments where every second counts"
      description="Purpose-tuned deployments across the operations that trust SmartGuard."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {list.map((i, idx) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="glass-panel p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-lg font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
            <Link to="/industries" className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:text-primary-glow">
              Explore use cases <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Demo simulator ---------------- */
function DemoSimulator() {
  return (
    <Section
      eyebrow="Live demo"
      title="See the alert flow in real time"
      description="Watch a person enter a virtual zone. AI detects, the rule engine fires, an alert lands — instantly."
    >
      <div className="glass-panel mt-12 overflow-hidden">
        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          <div className="relative bg-black/60 aspect-video lg:aspect-auto min-h-[320px] overflow-hidden">
            <SimulatorScene />
          </div>
          <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border/60">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
              <span className="h-2 w-2 rounded-full bg-primary pulse-dot" /> Live
            </div>
            <h3 className="mt-3 text-2xl font-semibold">Zone Violation Detected</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Camera 03 — Warehouse A · Restricted Zone
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <SimStep icon={Brain} label="AI detected person" status="0.42s" />
              <SimStep icon={MapPin} label="Entered Zone A" status="polygon match" />
              <SimStep icon={Cog} label="Rule triggered" status="After-hours access" />
              <SimStep icon={MessageCircle} label="WhatsApp sent" status="Security lead" />
              <SimStep icon={Mail} label="Email dispatched" status="Ops manager" />
            </div>
            <Link to="/contact" className="btn-primary mt-8 w-full">
              Book a live walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SimStep({ icon: Icon, label, status }: { icon: typeof Brain; label: string; status: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-3 py-2.5"
    >
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-primary/10 text-primary border border-primary/25">
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-xs text-muted-foreground font-mono">{status}</span>
    </motion.div>
  );
}

function SimulatorScene() {
  // A stylized "camera view" with a moving person and a polygon zone that pulses on entry.
  return (
    <div className="relative w-full h-full min-h-[320px] bg-[linear-gradient(180deg,#0a1420_0%,#0d1a26_100%)]">
      {/* faux scanlines */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 3px)",
        }}
      />
      <div className="absolute top-3 left-3 text-[10px] font-mono text-primary/80">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> CAM 03 · LIVE
        </span>
      </div>
      <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground">
        1920×1080 · 30fps
      </div>

      {/* polygon zone */}
      <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="zoneGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.75 0.19 155)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.75 0.19 155)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <polygon
          points="60,180 340,180 300,80 100,80"
          fill="url(#zoneGrad)"
          stroke="oklch(0.75 0.19 155)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <text x="70" y="98" fontSize="8" fill="oklch(0.75 0.19 155)" fontFamily="monospace">
          ZONE A · RESTRICTED
        </text>
      </svg>

      {/* moving person with bounding box */}
      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: ["-10%", "55%", "55%", "-10%"] }}
        transition={{ duration: 6, times: [0, 0.45, 0.6, 1], repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[22%] left-0 w-[14%]"
      >
        <div className="relative aspect-[1/2.2] w-full">
          <div className="absolute inset-0 border-2 border-primary rounded-sm shadow-[0_0_20px_rgba(74,222,128,0.35)]" />
          <div className="absolute -top-5 left-0 text-[9px] font-mono px-1 py-0.5 rounded bg-primary text-primary-foreground">
            person · 0.97
          </div>
          <div
            className="absolute inset-1 rounded-sm"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.6 0.05 240 / 0.7), oklch(0.4 0.03 240 / 0.7))",
            }}
          />
        </div>
      </motion.div>

      {/* alert popup */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 0] }}
        transition={{ duration: 6, times: [0, 0.45, 0.5, 0.85, 1], repeat: Infinity }}
        className="absolute bottom-3 right-3 max-w-[220px] rounded-lg border border-primary/40 bg-background/90 backdrop-blur px-3 py-2 shadow-[0_0_30px_rgba(74,222,128,0.25)]"
      >
        <div className="text-[10px] uppercase tracking-widest text-primary font-semibold">Alert</div>
        <div className="text-xs mt-0.5">Unauthorized entry — Zone A</div>
        <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">Rule #12 · 0.42s</div>
      </motion.div>
    </div>
  );
}

/* ---------------- Pricing preview ---------------- */
function PricingPreview() {
  const tiers = [
    {
      name: "Starter",
      price: "$149",
      period: "/mo",
      tag: "For small businesses",
      cta: "Book Demo",
      to: "/contact",
      features: ["Person detection", "Virtual zones", "Rule engine", "Live dashboard", "Up to 4 cameras"],
    },
    {
      name: "Standard",
      price: "$399",
      period: "/mo",
      tag: "Growing operations",
      highlight: true,
      cta: "Book Demo",
      to: "/contact",
      features: [
        "Everything in Starter",
        "WhatsApp alerts",
        "Email alerts",
        "Up to 20 cameras",
        "Analytics & reports",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      tag: "Custom deployment",
      cta: "Contact Sales",
      to: "/contact",
      features: [
        "Custom AI models",
        "PPE, product & vehicle detection",
        "API integration",
        "Unlimited cameras",
        "Dedicated support",
      ],
    },
  ];
  return (
    <Section
      eyebrow="Pricing"
      title="Simple, transparent pricing"
      description="Start with what you need. Scale as your operation grows."
    >
      <div className="grid gap-4 lg:grid-cols-3 mt-12">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative glass-panel p-8 flex flex-col ${
              t.highlight ? "border-primary/50 shadow-[0_0_60px_-20px_oklch(0.75_0.19_155/0.5)]" : ""
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </div>
            )}
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.tag}</div>
              <h3 className="mt-2 text-2xl font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient-primary">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.period}</span>
              </div>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to={t.to}
              className={`mt-8 ${t.highlight ? "btn-primary" : "btn-ghost"} justify-center w-full`}
            >
              {t.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "SmartGuard replaced hours of camera-wall monitoring. Alerts arrive on WhatsApp before we'd have even noticed the incident.",
      name: "Priya S.",
      role: "Head of Security",
      company: "National retail chain",
    },
    {
      quote:
        "We deployed on 48 cameras in a weekend. Zone-based rules stopped after-hours access to our loading bays completely.",
      name: "Marcus D.",
      role: "Operations Director",
      company: "Regional warehouse group",
    },
    {
      quote:
        "PPE detection on the factory floor cut safety incidents by 37% in the first quarter. The custom model was worth every rupee.",
      name: "Anwar K.",
      role: "Plant Manager",
      company: "Industrial manufacturing",
    },
  ];
  return (
    <Section eyebrow="Testimonials" title="Trusted by security and operations leaders">
      <div className="grid gap-4 lg:grid-cols-3 mt-12">
        {items.map((t) => (
          <div key={t.name} className="glass-panel p-6 flex flex-col">
            <div className="text-primary text-2xl leading-none">"</div>
            <p className="mt-3 text-sm text-foreground/90 flex-1">{t.quote}</p>
            <div className="mt-6 pt-4 border-t border-border/60">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">
                {t.role} · {t.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Does SmartGuard replace our existing CCTV?",
      a: "No. SmartGuard is an intelligent monitoring layer that connects to your existing cameras via RTSP. No hardware replacement required.",
    },
    {
      q: "Which cameras are supported?",
      a: "Any camera that supports RTSP or ONVIF — which is virtually every modern IP CCTV camera from Hikvision, Dahua, Axis, Uniview and others.",
    },
    {
      q: "How are alerts delivered?",
      a: "Alerts route to WhatsApp, email and the live dashboard in under a second. Enterprise plans support webhook and API integrations.",
    },
    {
      q: "Is cloud deployment available?",
      a: "Yes. We offer cloud, on-premise and hybrid deployments depending on your data residency and latency requirements.",
    },
    {
      q: "Can custom AI models be added?",
      a: "Absolutely. Enterprise customers can add PPE detection, product detection, vehicle detection, and bespoke models trained on your data.",
    },
  ];
  return (
    <Section eyebrow="FAQ" title="Answers to common questions">
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="glass-panel group p-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <span className="font-semibold text-base">{f.q}</span>
              <span className="h-6 w-6 rounded-full border border-border flex items-center justify-center text-primary transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="container-page py-20">
      <div className="relative overflow-hidden glass-panel p-10 lg:p-16 text-center">
        <div className="absolute inset-0 -z-10 opacity-70 hero-gradient" />
        <h2 className="text-3xl md:text-5xl font-bold text-gradient max-w-2xl mx-auto">
          Give your team eyes that never blink.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Book a 20-minute demo. We'll show SmartGuard running on a live feed and configure a rule together.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn-primary">
            Book Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="btn-ghost">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reusable Section ---------------- */
function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">{title}</h2>
        {description && <p className="mt-4 text-muted-foreground text-lg">{description}</p>}
      </div>
      {children}
    </section>
  );
}

// Small ReactNode import to keep JSX happy
import type { ReactNode } from "react";
