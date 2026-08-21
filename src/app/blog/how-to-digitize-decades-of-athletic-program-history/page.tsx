import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/sections/BlogPostLayout";

export const metadata: Metadata = {
  title: "How to Digitize Decades of Athletic Program History (Without Losing Anything)",
  description:
    "A practical process for organizing, photographing, and cataloguing years of trophies, photos, and records before they're lost.",
};

export default function Post() {
  return (
    <BlogPostLayout title="How to Digitize Decades of Athletic Program History (Without Losing Anything)" date="July 25, 2026">
      <p>
        Most programs put off digitizing their archive because the scope feels overwhelming —
        boxes of photos, scattered records, trophies with no documentation of who won what and
        when. Here's a practical process for tackling it without losing anything in the process.
      </p>

      <h2>Start with an inventory, not the digitizing itself</h2>
      <p>
        Before scanning or photographing anything, walk through every location where program
        history might be stored — the trophy case, storage closets, the athletic director's
        office, even old yearbooks in the library. Make a rough inventory list. You don't need
        details yet, just a sense of what exists and where.
      </p>

      <h2>Sort into three categories</h2>
      <ul>
        <li><strong>Physical trophies and plaques</strong> — photographed in place, not moved unless necessary</li>
        <li><strong>Photos and paper records</strong> — scanned at high resolution, originals preserved</li>
        <li><strong>Undocumented items</strong> — anything without a clear date, team, or name attached, set aside for research</li>
      </ul>

      <h2>Photograph trophies properly</h2>
      <p>
        Good lighting and a clean, consistent background make a real difference in how trophies
        look once displayed digitally. Photograph each item from multiple angles if it has
        engraved text, and capture close-ups of any inscriptions separately so they're legible
        even at small display sizes.
      </p>

      <h2>Scan paper records at high resolution</h2>
      <p>
        Newspaper clippings, programs, and photos degrade over time — scanning at high resolution
        (at least 300 DPI) preserves detail that can be lost if you wait. For fragile items,
        handle minimally and consider scanning rather than photographing to avoid additional wear.
      </p>

      <h2>Fill gaps with institutional memory before it's gone</h2>
      <p>
        Long-tenured coaches, retired staff, and alumni often hold context that isn't written down
        anywhere — who's in an undated photo, what year a record was actually set, the story
        behind an unusual trophy. A short round of interviews with people who remember can fill
        gaps that no amount of scanning will solve on its own.
      </p>

      <h2>Organize before you build the display</h2>
      <p>
        Once digitized, organize content into consistent categories — by year, by team, by
        individual honoree — before loading it into any display system. Consistent organization
        upfront makes the final searchable archive far more usable than trying to reorganize
        after the fact.
      </p>

      <h2>Don't wait for a "complete" archive to start</h2>
      <p>
        Perfect completeness isn't realistic for most programs' older history, and waiting for it
        means never starting. Digitize what you have with good documentation practices, launch
        with that, and keep filling gaps as more information surfaces over time.
      </p>
    </BlogPostLayout>
  );
}
