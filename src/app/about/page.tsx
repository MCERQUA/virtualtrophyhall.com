import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { STATS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About VirtualTrophyHall",
  description:
    "VirtualTrophyHall builds interactive digital hall-of-fame displays for schools and sports programs — here's why we build it this way.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        title="Preserving Program History "
        titleAccent="Beyond A Glass Case"
        subtitle="Physical trophy cases run out of room, get forgotten, and eventually stop growing. VirtualTrophyHall exists to make sure a program's history stays visible, searchable, and current — for as long as the program exists."
        layout="split-right"
        heroImage="/images/about-archive-team.jpg"
        heroImageAlt="A team reviewing digitized archive photos and old trophies on a table"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <FadeIn>
            <p>
              Most trophy cases stop growing not because a program stops winning, but because
              there&apos;s no more room, no one has the case key, or updating a plaque means
              tracking down a specific vendor. Meanwhile, decades of photos, records, and
              memorabilia pile up in storage closets that nobody opens.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p>
              VirtualTrophyHall combines interactive touchscreen hardware, web-based content
              software, and hands-on digitization services so programs can build — and actually
              maintain — a real digital archive. We install the display, help digitize your
              existing history, and hand you software simple enough that your staff can update it
              every season without calling us first.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              Whether you&apos;re starting with a single touchscreen in a school hallway or
              building a multi-sport archive for a college athletics department, the goal is the
              same: history that&apos;s actually used, not just stored.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-card/60">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <WhyUs />

      <CTA
        title="Let's Talk About Your Program"
        description="Request a demo and we'll walk through what a digital hall of fame could look like for you."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
      />
    </>
  );
}
