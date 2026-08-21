import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the VirtualTrophyHall website and demo requests.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: August 2026</p>
          <p>
            These terms govern your use of {BUSINESS.url} and any demo request submitted through
            it. By using this site, you agree to these terms.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Demo Requests &amp; Quotes</h2>
          <p>
            Submitting the demo request form is not a purchase or binding agreement. Project
            scope, pricing, hardware selection, and timelines are confirmed directly with your
            organization following a consultation.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Physical Items During Digitization</h2>
          <p>
            Unless otherwise agreed in writing, physical trophies, photos, and memorabilia remain
            in your organization&apos;s possession and custody at all times during digitization
            services.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Pricing</h2>
          <p>
            Pricing depends on project scope (hardware, digitization volume, design, and support
            level) and is confirmed via a project-specific quote, not listed as a fixed price on
            this site.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Support Plans</h2>
          <p>
            Ongoing support and update plans are optional and billed per the terms agreed at
            signup. Software and displays remain functional without a support plan; support plans
            add assisted updates and priority technical response.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Contact</h2>
          <p>Questions about these terms can be sent to {BUSINESS.email}.</p>
        </div>
      </div>
    </section>
  );
}
