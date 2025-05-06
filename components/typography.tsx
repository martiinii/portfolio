import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const SectionTitle = ({ className, ...props }: ComponentProps<"h3">) => {
  return (
    <h3
      className={cn("text-muted-foreground text-2xl", className)}
      {...props}
    />
  );
};
