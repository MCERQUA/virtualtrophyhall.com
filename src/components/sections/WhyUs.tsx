"use client";
import { Search, RefreshCcw, Users, Landmark } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const REASONS = [
  {
    icon: Search,
    title: "Actually searchable",
    body: "Find any honoree, record, or season in seconds instead of scanning a glass case shelf by shelf.",
  },
  {
    icon: RefreshCcw,
    title: "Always up to date",
    body: "New records and honorees go in the same week they happen — no re-lettering plaques or waiting on a case key.",
  },
  {
    icon: Users,
    title: "Engages students and alumni",
    body: "A touchscreen invites interaction in a way a static case never did — visitors stop, search, and share.",
  },
  {
    icon: Landmark,
    title: "Preserves your legacy",
    body: "Decades of history digitized and backed up — no longer at risk from a flood, fire, or forgotten storage closet.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why VirtualTrophyHall
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            More Than A Display Upgrade
          </h2>
          <p className="mt-4 text-lg text-background/70">
            A digital hall of fame changes how your program's history gets used, not just how it looks.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{reason.title}</h3>
                  <p className="mt-2 text-sm text-background/70 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
