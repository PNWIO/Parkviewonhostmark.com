import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full rounded-lg border border-line bg-paper px-3 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
