export type ProjectLink = {
  type: "github" | "external";
  href: string;
};
type Project = {
  title: string;
  description: React.ReactNode;
  links?: ProjectLink[];
};
export const projects: Project[] = [
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
