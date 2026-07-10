import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { DemoLibrary } from "@/components/demo/DemoLibrary";
import { demoItems } from "@/lib/demo-data";

export default function DemoPage() {
  useEffect(() => {
    document.title = "Demo Video Library - SmartGuard";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our library of AI-powered CCTV intelligence demonstrations across various industries and use cases.");
    }
  }, []);

  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-6 hero-gradient">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Video Library</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gradient">See SmartGuard in Action</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our library of AI-powered CCTV intelligence demonstrations across various industries and use cases.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <DemoLibrary demos={demoItems} />
      </section>
    </SiteLayout>
  );
}
