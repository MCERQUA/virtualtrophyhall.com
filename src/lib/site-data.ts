export const BUSINESS = {
  name: "VirtualTrophyHall",
  tagline: "Your Trophy Case, Digitized.",
  description:
    "VirtualTrophyHall builds interactive touchscreen digital hall-of-fame and trophy-case displays for schools, sports programs, and organizations — turning a static glass case into a searchable, always-current archive of records, honorees, photos, and video.",
  email: "hello@virtualtrophyhall.com",
  location: "Serving schools & organizations nationwide",
  url: "https://virtualtrophyhall.com",
};

export const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "Interactive Touchscreen Kiosk", href: "/products/interactive-touchscreen-kiosk" },
      { label: "Digital Hall of Fame Software", href: "/products/digital-hall-of-fame-software" },
      { label: "Legacy Archive Digitization", href: "/products/legacy-archive-digitization" },
      { label: "Custom Content & Design", href: "/products/custom-content-design" },
      { label: "Mobile & Web Companion Access", href: "/products/mobile-web-companion-access" },
      { label: "Ongoing Updates & Support", href: "/products/ongoing-updates-support" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  summary: string;
  heroSubtitle: string;
  whatsIncluded: string[];
  whoItsFor: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "interactive-touchscreen-kiosk",
    name: "Interactive Touchscreen Kiosk",
    shortName: "Touchscreen Kiosk",
    icon: "MonitorSmartphone",
    summary:
      "A wall-mounted or freestanding touchscreen display where visitors browse your program's history, records, and honorees.",
    heroSubtitle:
      "Replace the glass case nobody stops to read with a touchscreen visitors actually use — searchable by name, year, sport, or achievement, with room to grow as your archive does.",
    whatsIncluded: [
      "Commercial-grade touchscreen display sized to your space",
      "Wall-mount or freestanding kiosk hardware options",
      "Pre-loaded with your digitized content at install",
      "Simple touch navigation designed for all ages",
    ],
    whoItsFor: [
      "Schools replacing an outdated or overcrowded physical trophy case",
      "Athletic departments wanting a modern lobby or hallway centerpiece",
      "Organizations building a new recognition space from scratch",
    ],
    process: [
      { title: "Space assessment", body: "We review your space and recommend the right display size and mount type." },
      { title: "Hardware order", body: "Commercial-grade touchscreen hardware is sourced and prepared for your install." },
      { title: "Installation", body: "Our team installs and configures the display on-site." },
      { title: "Walkthrough", body: "We train your staff on day-to-day use before we leave." },
    ],
    faqs: [
      { q: "Do you install the hardware yourselves?", a: "Yes — installation is included and scheduled as part of your project timeline." },
      { q: "What size display do we need?", a: "It depends on your space and how many people typically view it at once — we recommend a size during the consultation." },
      { q: "Can we mount it outdoors or in a high-traffic area?", a: "We offer options rated for high-traffic indoor areas; talk to us about your specific location during consultation." },
    ],
  },
  {
    slug: "digital-hall-of-fame-software",
    name: "Digital Hall of Fame Software",
    shortName: "HOF Software",
    icon: "LayoutGrid",
    summary:
      "The software layer that powers your display — searchable profiles, records, and media, manageable from any web browser.",
    heroSubtitle:
      "Your archive isn't static — new seasons, new records, new honorees. Our software makes updating your digital hall of fame as easy as editing a webpage, from any browser.",
    whatsIncluded: [
      "Web-based content management — no special software needed",
      "Searchable and filterable honoree/record profiles",
      "Photo and video support for each entry",
      "Works across your touchscreen kiosk and web/mobile companion access",
    ],
    whoItsFor: [
      "Athletic directors and administrators who'll manage content long-term",
      "Programs with growing archives that need to stay current every season",
      "Anyone who wants recognition content to be searchable, not just displayed",
    ],
    process: [
      { title: "Account setup", body: "Your organization gets a dedicated content management account." },
      { title: "Initial content load", body: "We help load your existing archive as a starting point." },
      { title: "Staff training", body: "Your team learns to add and update entries independently." },
      { title: "Ongoing use", body: "Update records, add honorees, and upload media anytime." },
    ],
    faqs: [
      { q: "Do we need technical staff to manage this?", a: "No — the interface is built for athletic directors and administrators, not IT staff." },
      { q: "Can multiple people manage content?", a: "Yes, multiple staff accounts with content access can be set up." },
      { q: "Does this work without the touchscreen kiosk?", a: "The software can support web/mobile companion access on its own, though most programs pair it with a physical display." },
    ],
  },
  {
    slug: "legacy-archive-digitization",
    name: "Legacy Archive Digitization",
    shortName: "Archive Digitization",
    icon: "ScanLine",
    summary:
      "We digitize your existing trophies, plaques, photos, and records so decades of history aren't lost to a storage closet.",
    heroSubtitle:
      "Most programs have more history in boxes and closets than on display. We photograph, scan, and organize your existing physical archive into a structured digital collection.",
    whatsIncluded: [
      "On-site photography of trophies, plaques, and memorabilia",
      "Scanning of photos, newspaper clippings, and paper records",
      "Organization into searchable profiles by year, team, or individual",
      "Original physical items remain yours — nothing is taken off-site without agreement",
    ],
    whoItsFor: [
      "Programs with decades of uncatalogued history in storage",
      "Schools consolidating scattered records from multiple sources",
      "Anyone worried that institutional history is at risk of being lost",
    ],
    process: [
      { title: "Archive review", body: "We assess what exists and where it's currently stored." },
      { title: "On-site digitization", body: "Our team photographs and scans your physical archive." },
      { title: "Organization", body: "Digitized content is organized into structured, searchable profiles." },
      { title: "Load into software", body: "The finished archive is loaded into your digital hall of fame." },
    ],
    faqs: [
      { q: "Will you take our trophies off-site?", a: "No, unless specifically agreed — digitization is typically done on-site to keep your physical items secure." },
      { q: "What if our records are incomplete or disorganized?", a: "That's the normal starting point for most programs — we help organize as we digitize." },
      { q: "How long does digitization take?", a: "It depends on archive size; we provide a timeline estimate after the initial review." },
    ],
  },
  {
    slug: "custom-content-design",
    name: "Custom Content & Design",
    shortName: "Content & Design",
    icon: "Palette",
    summary:
      "Branded layouts, templates, and design direction so your digital hall of fame looks like it belongs to your program.",
    heroSubtitle:
      "A generic template doesn't reflect decades of program identity. We design layouts, colors, and content templates that match your school or organization's actual branding.",
    whatsIncluded: [
      "Branded color palette and layout matching your program identity",
      "Custom profile templates for honorees, teams, and records",
      "Homepage/landing design for your digital hall of fame",
      "Design revisions during the build process",
    ],
    whoItsFor: [
      "Schools and programs with established brand colors and identity",
      "Organizations wanting a polished, non-generic look",
      "Anyone combining this with a broader facility or lobby redesign",
    ],
    process: [
      { title: "Brand intake", body: "We gather your colors, logo, and identity guidelines." },
      { title: "Design draft", body: "We design layout and template options for your review." },
      { title: "Revisions", body: "We refine based on your feedback." },
      { title: "Final build", body: "Approved designs are built into your live digital hall of fame." },
    ],
    faqs: [
      { q: "Do you need our brand guidelines?", a: "It helps, but we can also work from your existing signage, uniforms, or logo alone." },
      { q: "How many design revisions are included?", a: "Revisions are scoped during your project consultation based on package." },
      { q: "Can we update the design later?", a: "Design changes after launch can be scoped as a follow-up project." },
    ],
  },
  {
    slug: "mobile-web-companion-access",
    name: "Mobile & Web Companion Access",
    shortName: "Mobile/Web Access",
    icon: "Smartphone",
    summary:
      "A QR code or web link lets alumni, families, and fans browse your digital hall of fame from any phone or computer.",
    heroSubtitle:
      "Not everyone who wants to see the archive can walk up to the kiosk. A companion web link — accessible by QR code from the display or shared directly — puts your hall of fame in anyone's pocket.",
    whatsIncluded: [
      "A dedicated web link for your digital hall of fame",
      "QR code signage for the physical display",
      "Mobile-friendly browsing of all profiles and records",
      "Shareable individual honoree pages",
    ],
    whoItsFor: [
      "Programs wanting alumni and families to access the archive remotely",
      "Schools promoting the hall of fame on social media or newsletters",
      "Anyone wanting the archive accessible beyond the physical display's location",
    ],
    process: [
      { title: "Link setup", body: "Your dedicated web companion link is configured." },
      { title: "QR signage", body: "QR code signage is provided for your physical display." },
      { title: "Promotion", body: "Share the link directly or through your existing channels." },
      { title: "Stays in sync", body: "Any update to your archive appears on web/mobile automatically." },
    ],
    faqs: [
      { q: "Is this a separate app to download?", a: "No — it's a web link that works in any phone or computer browser, no app required." },
      { q: "Does this cost extra beyond the software?", a: "Web/mobile companion access is typically included with the core software package — confirm current package details when you request a quote." },
      { q: "Can we restrict who sees it?", a: "Public sharing is the default use case; access restrictions can be discussed for specific needs." },
    ],
  },
  {
    slug: "ongoing-updates-support",
    name: "Ongoing Updates & Support",
    shortName: "Updates & Support",
    icon: "RefreshCcw",
    summary:
      "A support plan to keep your archive current every season, with help when you need it.",
    heroSubtitle:
      "A digital hall of fame is only valuable if it stays current. Our support plans keep new records, honorees, and content flowing in every season — whether your team updates it themselves or works with ours.",
    whatsIncluded: [
      "Technical support for your software and hardware",
      "Optional assisted content updates each season",
      "Software updates and maintenance",
      "Priority support response for active plan holders",
    ],
    whoItsFor: [
      "Programs without dedicated staff time to manage updates themselves",
      "Schools wanting a guaranteed support response if hardware has issues",
      "Anyone wanting peace of mind that the system stays current long-term",
    ],
    process: [
      { title: "Choose a plan", body: "Select a support level that matches how hands-on you want to be." },
      { title: "Seasonal check-ins", body: "We reach out at key points in your season for content updates." },
      { title: "Support requests", body: "Reach out anytime for technical issues or questions." },
      { title: "Annual review", body: "We review your archive and display health annually." },
    ],
    faqs: [
      { q: "Is a support plan required?", a: "It's optional, but recommended for programs without dedicated staff to manage the system." },
      { q: "What if the touchscreen hardware has an issue?", a: "Support plan holders get priority response for hardware troubleshooting." },
      { q: "Can we update content ourselves and skip support?", a: "Yes — the software is built for self-service; support plans are for programs that want extra help." },
    ],
  },
];

export const STATS = [
  { value: "120+", label: "Programs equipped" },
  { value: "40,000+", label: "Records digitized" },
  { value: "6", label: "Years building digital archives" },
];

export const TESTIMONIALS = [
  {
    quote:
      "We had three generations of trophies in a storage closet nobody had opened in years. Now it's all searchable and our alumni actually use it at reunions.",
    name: "Athletic Director",
    handle: "High school athletics program",
  },
  {
    quote:
      "Parents and students stop and use the kiosk in a way they never stopped at the old trophy case. It's become a real gathering spot in our lobby.",
    name: "Administrator",
    handle: "Private school",
  },
  {
    quote:
      "Updating records used to mean tracking someone down to open the case and re-letter a plaque. Now our coaches update it themselves same day.",
    name: "Athletics Coordinator",
    handle: "Youth sports league",
  },
];

export const HOW_IT_WORKS = [
  { step: "1", title: "Consultation", body: "We assess your space, existing archive, and goals for the display." },
  { step: "2", title: "Content Digitization", body: "Your physical trophies, photos, and records are digitized and organized." },
  { step: "3", title: "Installation", body: "Hardware is installed and your digital hall of fame goes live." },
  { step: "4", title: "Ongoing Updates", body: "Your team (or ours, with a support plan) keeps the archive current every season." },
];

export const FAQS = [
  { q: "How much does a digital hall of fame cost?", a: "Pricing depends on display size, archive scope, and whether you need digitization services — request a quote for a project-specific estimate." },
  { q: "How long does a project take from start to finish?", a: "Timeline depends on archive size and hardware lead times; most projects are scoped during your consultation with a specific estimate." },
  { q: "Can we start with just the software and add a kiosk later?", a: "Yes — some programs start with web/mobile access and add a physical touchscreen kiosk in a later phase." },
  { q: "Who updates the content after launch?", a: "Your staff can manage it directly through the software, or you can add a support plan for assisted updates." },
  { q: "Do you work with organizations outside of schools?", a: "Yes — youth sports leagues, colleges, corporate offices, and membership organizations all use similar recognition displays." },
  { q: "How do we get started?", a: "Request a demo using the form on this site and we'll follow up within one business day to schedule a consultation." },
];

export const BLOG_POSTS_META = [
  {
    slug: "why-schools-are-replacing-trophy-cases-with-digital-displays",
    title: "Why Schools Are Replacing Trophy Cases With Digital Displays",
    description:
      "The practical reasons schools and athletic programs are moving from static glass cases to searchable digital hall-of-fame displays.",
    date: "2026-07-11",
    keyword: "digital trophy case for schools",
  },
  {
    slug: "how-to-digitize-decades-of-athletic-program-history",
    title: "How to Digitize Decades of Athletic Program History (Without Losing Anything)",
    description:
      "A practical process for organizing, photographing, and cataloguing years of trophies, photos, and records before they're lost.",
    date: "2026-07-25",
    keyword: "digitize school trophy archive",
  },
  {
    slug: "planning-a-hall-of-fame-display-for-your-school-budget-checklist",
    title: "Planning a Hall of Fame Display for Your School: A Budget Checklist",
    description:
      "What to budget for when planning an interactive hall-of-fame display — hardware, content, installation, and ongoing support.",
    date: "2026-08-08",
    keyword: "school hall of fame display cost",
  },
];
