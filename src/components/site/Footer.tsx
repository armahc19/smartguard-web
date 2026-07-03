import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Mail } from "lucide-react";

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
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-md border border-border hover:border-primary/40 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:hello@smartguard.ai" aria-label="Email" className="p-2 rounded-md border border-border hover:border-primary/40 transition-colors">
              <Mail className="h-4 w-4" />
            </a>
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
          <p>Made for teams that take security seriously.</p>
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
