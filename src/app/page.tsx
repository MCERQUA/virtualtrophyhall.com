import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { TESTIMONIALS, FAQS } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Trusted By Schools & Athletic Programs"
        title="Turn Your Trophy Case Into A "
        titleAccent="Searchable Digital Hall of Fame"
        subtitle="We digitize your program's history and install an interactive touchscreen display that visitors actually stop to use — searchable, always current, and built to preserve decades of achievement."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
        secondaryCTA="See Products"
        secondaryHref="/products"
        layout="split-right"
        heroImage="/images/hero-kiosk-hallway.jpg"
        heroImageAlt="An elegant touchscreen digital hall-of-fame kiosk mounted in a school hallway"
      />
      <TrustBar />
      <ProductsGrid />
      <HowItWorks />
      <WhyUs />
      <Testimonials
        label="What Programs Say"
        title="Trusted By Athletic "
        titleAccent="Departments"
        testimonials={TESTIMONIALS.map((t) => ({ name: t.name, role: t.handle, text: t.quote }))}
      />
      <FAQ
        eyebrow="Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before requesting a demo."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Ready To Digitize Your History?"
        description="Request a demo and we'll walk through what a digital hall of fame could look like for your program."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
        secondaryText="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
