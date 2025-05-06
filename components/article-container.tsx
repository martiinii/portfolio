import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const ArticleContainer = ({
  className,
  ...props
}: ComponentProps<"article">) => {
  return (
    <article
      className={cn("flex flex-col gap-4 w-full text-lg", className)}
      {...props}
    />
  );
};
