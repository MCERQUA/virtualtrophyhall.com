import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a demo of VirtualTrophyHall's digital hall-of-fame displays and software. We'll follow up within one business day.",
};

export default function ContactPage() {
  return (
    <LeadForm
      formName="demo"
      title="Request Your "
      titleAccent="Demo"
      subtitle="Tell us about your school or organization and current trophy case or archive. We'll follow up within one business day to schedule a consultation."
      submitLabel="Request My Demo"
      showInfoColumn
      orgField
    />
  );
}
