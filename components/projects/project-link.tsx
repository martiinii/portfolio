import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { Button } from "../ui/button";
import type { ProjectLink as ProjectLinkType } from "./projects.data";

const linkIcons: Record<ProjectLinkType["type"], IconType> = {
  github: FiGithub,
  external: ExternalLink,
};

export const ProjectLink = ({ href, type }: ProjectLinkType) => {
  const Icon = linkIcons[type];

  return (
    <Button asChild size={"icon"} variant={"outline"}>
      <Link href={href} target={"_blank"}>
        <Icon />
        <span className="sr-only">{type} link</span>
      </Link>
    </Button>
  );
};
