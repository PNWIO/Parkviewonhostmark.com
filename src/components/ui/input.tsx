import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-md border border-line bg-paper px-3 text-base text-ink shadow-none outline-none transition-colors placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
