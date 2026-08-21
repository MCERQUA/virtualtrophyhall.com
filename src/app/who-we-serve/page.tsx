import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { CTA } from "@/components/sections/CTA";
import { GraduationCap, Trophy, Building2, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "VirtualTrophyHall builds digital hall-of-fame displays for high schools, colleges, youth sports leagues, and organizations.",
};

const SEGMENTS = [
  {
    icon: GraduationCap,
    title: "High Schools & Colleges",
    body: "Athletic departments replacing outdated trophy cases with a display that engages students, families, and alumni visiting campus.",
  },
  {
    icon: Trophy,
    title: "Youth Sports Leagues",
    body: "Leagues wanting a shared digital archive across seasons, teams, and age groups — accessible to every family, not just visitors to one building.",
  },
  {
    icon: Building2,
    title: "Colleges & Universities",
    body: "Larger programs with decades of history across multiple sports, needing a scalable archive that grows with new seasons and honorees.",
  },
  {
    icon: Users2,
    title: "Clubs & Membership Organizations",
    body: "Country clubs, alumni associations, and membership organizations recognizing members, champions, and milestones over time.",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <Hero
        badge="Who We Serve"
        title="Built For Programs With "
        titleAccent="History Worth Preserving"
        subtitle="From a single high school gym lobby to a multi-sport college athletics department, our products scale to fit the size of your archive."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SEGMENTS.map((s) => (
              <StaggerItem key={s.title}>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border h-full">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.1}>
            <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Not sure if your program is the right fit? Most organizations with an existing
              trophy case, awards wall, or box of uncatalogued history are good candidates —
              request a demo and we&apos;ll talk through your specific situation.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="See What's Possible For Your Program"
        description="Request a demo and we'll show you what a digital hall of fame could look like for your organization."
        primaryCTA="Request a Demo"
        primaryHref="/contact"
      />
    </>
  );
}
