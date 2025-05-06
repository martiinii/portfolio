import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ComponentProps } from "react";

export const LogoImage = ({
  className,
  alt,
  ...props
}: ComponentProps<typeof Image>) => {
  return (
    <Image
      draggable={false}
      className={cn(
        "rounded-3xl border-white border-4 shadow-lg/20",
        className,
      )}
      placeholder="blur"
      alt={alt}
      {...props}
    />
  );
};
