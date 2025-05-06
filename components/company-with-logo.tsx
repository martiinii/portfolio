import type Image from "next/image";
import type { ComponentProps } from "react";
import { LogoImage } from "./logo-image";

type CompanyWithLogoProps = Pick<
  ComponentProps<typeof Image>,
  "alt" | "src"
> & {
  company: string;
  position: string;
};
export const CompanyWithLogo = ({
  src,
  alt,
  company,
  position,
}: CompanyWithLogoProps) => {
  return (
    <div className="flex gap-3 text-2xl font-medium md:items-center tracking-tight">
      <LogoImage alt={alt} src={src} className="size-8 rounded-sm shadow-sm" />
      <div>
        <span>{position}</span>
        <span className="text-muted-foreground/80">, {company}</span>
      </div>
    </div>
  );
};
