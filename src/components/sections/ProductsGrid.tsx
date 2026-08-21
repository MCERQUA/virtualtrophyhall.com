"use client";
import Link from "next/link";
import {
  MonitorSmartphone,
  LayoutGrid,
  ScanLine,
  Palette,
  Smartphone,
  RefreshCcw,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { PRODUCTS } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  MonitorSmartphone,
  LayoutGrid,
  ScanLine,
  Palette,
  Smartphone,
  RefreshCcw,
};

export function ProductsGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Products &amp; Services
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Everything Needed To Build Your Archive
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hardware, software, digitization, and design — as much or as little as your program needs.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => {
            const Icon = ICONS[product.icon] ?? MonitorSmartphone;
            return (
              <StaggerItem key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block h-full p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{product.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {product.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
