import type Image from "next/image";
import type { ComponentProps } from "react";

import BetapointLogo from "@/public/icons/betapoint.png";
import GreenWedgeLogo from "@/public/icons/greenwedge.png";
import HaergiLogo from "@/public/icons/haergi.png";
import { ExternalLink } from "../external-link";

type Experience = {
  imageSrc: ComponentProps<typeof Image>["src"];
  company: string;
  position: string;
  description: React.ReactNode;
  dateStart: Date;
  dateEnd?: Date;
};
export const experience: Experience[] = [
  {
    company: "Beta Point",
    position: "AI & Automation Specialist",
    description: "",
    dateStart: new Date("2026-04-01"),
    imageSrc: BetapointLogo,
  },
  {
    company: "Haergi",
    position: "Fullstack developer",
    description: (
      <>
        Developed{" "}
        <ExternalLink href={"https://app.leadme.ai"}>LeadMe</ExternalLink>, an
        event-driven CRM, integrated orders and products with Fakturownia,
        Twilio for SMS notifications and SMTP/IMAP for sending and reading email
        messages. Refactored the frontend into a sustainable and maintainable
        code, as well as UI component library. Built a custom queue system that
        powers automations.
      </>
    ),
    dateStart: new Date("2024-04-01"),
    dateEnd: new Date("2026-03-31"),
    imageSrc: HaergiLogo,
  },
  {
    company: "Green Wedge",
    position: "Fullstack developer",
    description: (
      <>
        Led development of a{" "}
        <ExternalLink href={"https://greenwedge.eco"}>
          sustainability app
        </ExternalLink>{" "}
        offering tree-planting subscriptions with real-time metrics on trees
        planted, CO₂ captured and individual offset percentages. Integrated the
        Imoje (ING) payment gateway, delivered an admin dashboard with full
        customization (plans, pricing, currencies, etc.), and supported
        migration to a VPS.
      </>
    ),
    dateStart: new Date("2023-10-01"),
    dateEnd: new Date("2024-01-31"),
    imageSrc: GreenWedgeLogo,
  },
];
