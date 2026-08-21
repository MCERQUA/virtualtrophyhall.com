import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/sections/BlogPostLayout";

export const metadata: Metadata = {
  title: "Planning a Hall of Fame Display for Your School: A Budget Checklist",
  description:
    "What to budget for when planning an interactive hall-of-fame display — hardware, content, installation, and ongoing support.",
};

export default function Post() {
  return (
    <BlogPostLayout title="Planning a Hall of Fame Display for Your School: A Budget Checklist" date="August 8, 2026">
      <p>
        Budgeting for a digital hall-of-fame project is easier when you know the real cost
        categories upfront, instead of getting a single number that doesn't explain what's
        actually included. Here's what typically goes into a project.
      </p>

      <h2>Hardware</h2>
      <p>
        The touchscreen display itself is usually the largest single line item — cost scales with
        screen size, mounting type (wall-mounted vs. freestanding kiosk), and whether it needs to
        be rated for high-traffic or semi-outdoor areas. Get a specific recommendation based on
        your actual space rather than budgeting for a generic "big screen."
      </p>

      <h2>Content digitization</h2>
      <p>
        If you have an existing archive to digitize — trophies, photos, paper records — this is
        typically priced separately from the display itself and scales with archive size. A
        program with a single filing cabinet of records costs meaningfully less to digitize than
        one with decades of scattered, uncatalogued history.
      </p>

      <h2>Software</h2>
      <p>
        The content management software that powers your display and any web/mobile companion
        access is usually a separate line item, sometimes bundled with the hardware and sometimes
        billed as an ongoing subscription. Ask specifically whether software is a one-time cost or
        recurring.
      </p>

      <h2>Custom design</h2>
      <p>
        A branded layout matching your school colors and identity costs more than a generic
        template, but makes a real difference in how the final product looks and feels. Decide
        upfront whether custom branding matters enough to budget for, or whether a solid default
        template is good enough for launch.
      </p>

      <h2>Installation</h2>
      <p>
        Physical installation — mounting the display, running power and network connections,
        configuring the software on-site — is typically included in a project quote but worth
        confirming explicitly, especially for wall-mounted installations that may need
        electrical or structural work.
      </p>

      <h2>Ongoing support</h2>
      <p>
        Decide whether your staff will manage content updates themselves (lower ongoing cost) or
        whether you want an assisted-update support plan (higher ongoing cost, less staff time
        required). Neither is wrong — it depends on whether you have staff time to dedicate to it
        each season.
      </p>

      <h2>A simple way to budget</h2>
      <p>
        Rather than asking "what does this cost," ask for a quote broken into these categories
        specifically. That makes it much easier to see where you can scale a project up or down —
        starting with a smaller display and less digitization now, and expanding later, is a
        completely normal way to phase a project within budget.
      </p>
    </BlogPostLayout>
  );
}
