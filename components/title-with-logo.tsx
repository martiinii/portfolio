import type Image from "next/image";
import type { ComponentProps } from "react";
import { LogoImage } from "./logo-image";

type TitleWithLogoProps = Pick<ComponentProps<typeof Image>, "alt" | "src"> & {
  title: string;
};
export const TitleWithLogo = ({ src, alt, title }: TitleWithLogoProps) => {
  return (
    <div className="flex gap-3 text-2xl font-medium md:items-center tracking-tight">
      <LogoImage alt={alt} src={src} className="size-8 rounded-sm shadow-sm" />
      <span>{title}</span>
    </div>
  );
};
