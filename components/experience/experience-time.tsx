import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";

type ExperienceTimeProps = {
  fromDate: Date;
  toDate?: Date;
};
export const ExperienceTime = ({ fromDate, toDate }: ExperienceTimeProps) => {
  const formattedFrom = fromDate.toLocaleDateString("en", {
    month: "short",
    year: "numeric",
  });

  const formattedTo = toDate
    ? toDate.toLocaleDateString("en", {
        month: "short",
        year: "numeric",
      })
    : null;

  const isCurrent = !toDate;

  return (
    <div
      className={cn(
        "flex items-center whitespace-nowrap text-muted-foreground rounded-full w-fit pl-4",
        isCurrent && "bg-secondary text-secondary-foreground",
        !isCurrent && "pl-0",
      )}
    >
      <span>
        {formattedFrom} – {formattedTo || "Present"}
      </span>
      {isCurrent && (
        <Dot className="size-10 -ml-2 -my-1 md:-my-0.5 animate-pulse" />
      )}
    </div>
  );
};
