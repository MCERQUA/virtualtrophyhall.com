import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BUSINESS, NAV_ITEMS, FOOTER_LINKS } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "VirtualTrophyHall — Digital Hall of Fame Displays for Schools",
    template: "%s | VirtualTrophyHall",
  },
  description:
    "VirtualTrophyHall builds interactive touchscreen digital hall-of-fame and trophy-case displays for schools and sports programs. Request a demo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: "VirtualTrophyHall",
    title: "VirtualTrophyHall — Digital Hall of Fame Displays for Schools",
    description:
      "Interactive touchscreen digital hall-of-fame and trophy-case displays and software for schools, sports programs, and organizations.",
    images: [
      { url: "/og/default.jpg", width: 1200, height: 630, alt: "VirtualTrophyHall — Digital Hall of Fame Displays" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VirtualTrophyHall — Digital Hall of Fame Displays for Schools",
    description: "Interactive touchscreen digital hall-of-fame displays and software for schools and sports programs.",
    images: ["/og/default.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VirtualTrophyHall",
  url: BUSINESS.url,
  description: BUSINESS.description,
  email: BUSINESS.email,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          <Navbar businessName={BUSINESS.name} navItems={NAV_ITEMS} cta={{ label: "Request a Demo", href: "/contact" }} />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer
            businessName={BUSINESS.name}
            description="Interactive touchscreen digital hall-of-fame and trophy-case displays and software for schools, sports programs, and organizations."
            email={BUSINESS.email}
            address={BUSINESS.location}
            links={FOOTER_LINKS}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
