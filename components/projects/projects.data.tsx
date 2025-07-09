import LocalSQLLogo from "@/public/icons/localsql.png";
import type Image from "next/image";
import type { ComponentProps } from "react";
import { ExternalLink } from "../external-link";

export type ProjectLink = {
  type: "github" | "external";
  href: string;
};
type Project = {
  imageSrc?: ComponentProps<typeof Image>["src"];
  title: string;
  description: React.ReactNode;
  links?: ProjectLink[];
};
export const projects: Project[] = [
  {
    title: "Local SQL",
    description: (
      <>
        Local SQL is a web-based, local-first modern database browser. Your
        connection details stay on your machine - no data ever leaves your
        computer. Visit{" "}
        <ExternalLink
          href="https://localsql.dev"
          target="_blank"
          rel="noreferrer"
        >
          localsql.dev
        </ExternalLink>{" "}
        to add a connection and start browsing your tables.
      </>
    ),
    links: [
      {
        type: "github",
        href: "https://github.com/martiinii/local-sql",
      },
      {
        type: "external",
        href: "https://localsql.dev",
      },
    ],
    imageSrc: LocalSQLLogo,
  },
  {
    title: "UltraStar",
    description:
      "Automatically fetches lyrics, YouTube videos, and metadata for 25,000+ songs, so your next party can skip the setup and dive straight into the off-key magic. Built to handle everything behind the scenes, it's the tool that turned my friends' and my weekends into full-blown karaoke parties.",
    links: [
      {
        type: "github",
        href: "https://github.com/martiinii/ultrastar",
      },
    ],
  },
];
