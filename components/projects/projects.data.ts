export type ProjectLink = {
  type: "github" | "external";
  href: string;
};
type Project = {
  title: string;
  description: string;
  links?: ProjectLink[];
};
export const projects: Project[] = [
  {
    title: "UltraStar",
    description:
      "Download songs for karaoke from database containing 25000+ songs. Automatically scrapes songs metadata and stores it inside database. When selected song is downloaded, it automatically fetches lyrics and matching video from YouTube. Used mostly by me & my friends at parties.",
    links: [
      {
        type: "github",
        href: "https://github.com/martiinii/ultrastar",
      },
    ],
  },
];
