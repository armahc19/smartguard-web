import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { ArrowRight, Brain, MapPin, Cog, MessageCircle, Mail } from "lucide-react";



export default function DemoPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-6 hero-gradient">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Live demo</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient">See the alert flow in action</h1>
          <p className="mt-4 text-lg text-muted-foreground">A simulated camera view showing detection → zone match → rule → alert, exactly the way SmartGuard runs in production.</p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="glass-panel overflow-hidden grid lg:grid-cols-[1.4fr_1fr]">
          <div className="relative bg-black/60 min-h-[400px]">
            <Scene />
          </div>
          <div className="p-8 border-t lg:border-t-0 lg:border-l border-border/60">
            <div className="text-xs uppercase tracking-widest text-primary flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary pulse-dot" /> Live
            </div>
            <h2 className="mt-3 text-2xl font-semibold">Alert pipeline</h2>
            <p className="mt-2 text-sm text-muted-foreground">Every event flows through the same 5-step pipeline.</p>
            <ol className="mt-6 space-y-3 text-sm">
              {[
                { icon: Brain, label: "AI detects person", meta: "person · 0.97" },
                { icon: MapPin, label: "Enters virtual zone", meta: "Zone A · restricted" },
                { icon: Cog, label: "Rule engine fires", meta: "Rule #12 · after-hours" },
                { icon: MessageCircle, label: "WhatsApp delivered", meta: "Security lead" },
                { icon: Mail, label: "Email delivered", meta: "Ops manager" },
              ].map((s, i) => (
                <li key={s.label} className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-primary/10 text-primary border border-primary/25 text-xs">{i + 1}</span>
                    <span className="inline-flex items-center gap-2"><s.icon className="h-4 w-4 text-primary" /> {s.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{s.meta}</span>
                </li>
              ))}
            </ol>
            <Link to="/contact" className="btn-primary mt-8 w-full">Book a live walkthrough <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Scene() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-[linear-gradient(180deg,#0a1420_0%,#0d1a26_100%)]">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 3px)" }} />
      <div className="absolute top-3 left-3 text-[10px] font-mono text-primary/80">
        <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> CAM 03 · LIVE</span>
      </div>
      <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="zoneGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.75 0.19 155)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.75 0.19 155)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <polygon points="60,180 340,180 300,80 100,80" fill="url(#zoneGrad2)" stroke="oklch(0.75 0.19 155)" strokeWidth="1.2" strokeDasharray="4 3" />
        <text x="70" y="98" fontSize="8" fill="oklch(0.75 0.19 155)" fontFamily="monospace">ZONE A · RESTRICTED</text>
      </svg>
      <motion.div
        initial={{ x: "-10%" }}
        animate={{ x: ["-10%", "55%", "55%", "-10%"] }}
        transition={{ duration: 6, times: [0, 0.45, 0.6, 1], repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[22%] left-0 w-[14%]"
      >
        <div className="relative aspect-[1/2.2] w-full">
          <div className="absolute inset-0 border-2 border-primary rounded-sm shadow-[0_0_20px_rgba(74,222,128,0.35)]" />
          <div className="absolute -top-5 left-0 text-[9px] font-mono px-1 py-0.5 rounded bg-primary text-primary-foreground">person · 0.97</div>
          <div className="absolute inset-1 rounded-sm" style={{ background: "linear-gradient(180deg, oklch(0.6 0.05 240 / 0.7), oklch(0.4 0.03 240 / 0.7))" }} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 0] }}
        transition={{ duration: 6, times: [0, 0.45, 0.5, 0.85, 1], repeat: Infinity }}
        className="absolute bottom-4 right-4 max-w-[240px] rounded-lg border border-primary/40 bg-background/90 backdrop-blur px-3 py-2 shadow-[0_0_30px_rgba(74,222,128,0.25)]"
      >
        <div className="text-[10px] uppercase tracking-widest text-primary font-semibold">Alert</div>
        <div className="text-xs mt-0.5">Unauthorized entry — Zone A</div>
        <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">Rule #12 · 0.42s</div>
      </motion.div>
    </div>
  );
}
