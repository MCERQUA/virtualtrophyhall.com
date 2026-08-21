import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From consultation to installation to ongoing updates — here's exactly how a VirtualTrophyHall project works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        badge="Our Process"
        title="A Straightforward Path From "
        titleAccent="Storage Closet To Showpiece"
        subtitle="No guesswork about what a project involves — here's the process from first consultation to a live, updatable digital hall of fame."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
      />
      <HowItWorks />
      <WhyUs />
      <FAQ
        eyebrow="Questions"
        title="Process FAQ"
        subtitle="What to expect before you request a demo."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Ready To Start The Process?"
        description="Request a demo and we'll schedule a consultation to talk through your program's specific needs."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
      />
    </>
  );
}
