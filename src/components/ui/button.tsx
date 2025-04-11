import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 disabled:opacity-50 aria-invalid:border-destructive focus-visible:border-ring rounded-md aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 font-medium text-sm whitespace-nowrap transition-all [&_svg]:pointer-events-none disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline dark:text-secondary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        secondaryOutline:
          "border border-secondary bg-transparent shadow-xs hover:bg-teritary hover:text-teritary-foreground hover:border-teritary",
        secondaryGhost:
          "border-transparent bg-transparent text-secondary hover:text-teritary-foreground",
        secondaryLink:
          "border-transparent text-secondary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        destructiveOutline:
          "border border-destructive bg-transparent shadow-xs hover:bg-destructive hover:text-destructive-foreground hover:border-destructive",
        destructiveGhost:
          "border-transparent bg-transparent text-destructive hover:text-destructive-foreground",
        destructiveLink:
          "border-transparent text-destructive underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        accentOutline:
          "border border-accent bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground hover:border-accent",
        accentGhost:
          "border-transparent bg-transparent text-accent hover:text-accent-foreground",
        accentLink:
          "border-transparent text-accent underline-offset-4 hover:underline",
        tertiary:
          "bg-teritary text-teritary-foreground shadow-xs hover:bg-teritary/90",
        tertiaryOutline:
          "border border-teritary bg-transparent shadow-xs hover:bg-teritary hover:text-teritary-foreground hover:border-teritary",
        tertiaryGhost:
          "border-transparent bg-transparent text-teritary hover:text-teritary-foreground",
        tertiaryLink:
          "border-transparent text-teritary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
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
