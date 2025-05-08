import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

export const ExternalLink = ({
  className,
  target,
  children,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <Link
      target={target || "_blank"}
      className={cn(
        "text-secondary-foreground underline-offset-4 hover:underline inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 hover:[&_svg]:scale-110 [&_svg]:transition-transform outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
