import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,transform,opacity] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-forest text-paper hover:bg-forest-deep",
        invert: "bg-paper text-forest hover:bg-paper-2",
        outline:
          "border border-line bg-transparent text-ink hover:bg-paper-2 hover:border-muted",
        ghost: "text-ink hover:bg-paper-2",
        link: "text-sage underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-md px-5",
        sm: "h-9 rounded-sm px-3 text-xs tracking-wide uppercase",
        lg: "h-12 rounded-lg px-7",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
