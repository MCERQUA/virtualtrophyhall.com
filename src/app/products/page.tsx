import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Interactive touchscreen kiosks, digital hall-of-fame software, archive digitization, custom design, and ongoing support for schools and sports programs.",
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        badge="Products & Services"
        title="Everything Needed To Build "
        titleAccent="Your Digital Archive"
        subtitle="Hardware, software, digitization, and design — mix and match what your program needs, or let us build the complete package."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
        secondaryCTA="How It Works"
        secondaryHref="/how-it-works"
      />
      <ProductsGrid />
      <HowItWorks />
      <CTA
        title="Not Sure Where To Start?"
        description="Request a demo and we'll recommend the right combination of products for your program and budget."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
      />
    </>
  );
}
