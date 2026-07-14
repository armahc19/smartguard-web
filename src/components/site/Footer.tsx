import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24 bg-surface/30">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo className="h-8 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The AI monitoring layer for your existing CCTV — real-time detection, virtual zones, and instant alerts.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {/*<a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-md border border-border hover:border-primary/40 transition-colors">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href="mailto:hello@smartguard.ai" aria-label="Email" className="p-2 rounded-md border border-border hover:border-primary/40 transition-colors">
              <Mail className="h-4 w-4" />
            </a>*/}
          </div>
        </div>

        <FooterCol
          title="Product"
          items={[
            { label: "Features", to: "/features" },
            { label: "Pricing", to: "/pricing" },
            { label: "Live Demo", to: "/demo" },
          ]}
        />
        <FooterCol
          title="Industries"
          items={[
            { label: "Warehouse", to: "/industries" },
            { label: "Retail", to: "/industries" },
            { label: "Factories", to: "/industries" },
            { label: "Schools", to: "/industries" },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { label: "Blog", to: "/blog" },
            { label: "Contact", to: "/contact" },
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms", to: "/terms" },
          ]}
        />
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} SmartGuard. All rights reserved.</p>
          <p>Turn your existing CCTV into an AI-powered security system.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
