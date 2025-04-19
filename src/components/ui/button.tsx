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
          "border bg-background shadow-xs hover:bg-fancy hover:text-fancy-foreground dark:bg-fancy/30 dark:border-fancy dark:hover:bg-fancy/50",
        ghost:
          "hover:bg-fancy hover:text-fancy-foreground dark:hover:bg-fancy/50",
        link: "text-primary underline-offset-4 hover:underline hover:decoration-tertiary dark:text-secondary dark:hover:decoration-accent",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        secondaryOutline:
          "border border-secondary bg-transparent shadow-xs hover:bg-secondary hover:text-secondary-foreground hover:border-secondary dark:bg-tertiary/30 dark:border-secondary dark:hover:bg-secondary/50",
        secondaryGhost:
          "border-transparent bg-transparent text-secondary hover:border-secondary",
        secondaryLink:
          "border-transparent text-secondary underline-offset-4 hover:underline ",
        destructive:
          "bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        destructiveOutline:
          "border border-destructive bg-transparent shadow-xs hover:bg-destructive hover:text-destructive-foreground hover:border-destructive",
        destructiveGhost:
          "border-transparent bg-transparent text-destructive hover:border-destructive",
        destructiveLink:
          "border-transparent text-destructive underline-offset-4 hover:underline hover:decoration-foreground",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        accentOutline:
          "border border-accent bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground hover:border-accent dark:bg-accent/30 dark:border-accent dark:hover:bg-accent/50",
        accentGhost:
          "border-transparent bg-transparent text-accent hover:border-accent",
        accentLink:
          "border-transparent text-accent underline-offset-4 hover:underline hover:decoration-secondary",
        tertiary:
          "bg-tertiary text-tertiary-foreground shadow-xs hover:bg-tertiary/90",
        tertiaryOutline:
          "border border-tertiary bg-transparent shadow-xs hover:bg-tertiary hover:text-tertiary-foreground hover:border-tertiary dark:bg-tertiary/30 dark:border-tertiary dark:hover:bg-tertiary/50",
        tertiaryGhost:
          "border-transparent bg-transparent text-tertiary hover:border-tertiary",
        tertiaryLink:
          "border-transparent text-tertiary underline-offset-4 hover:underline",
        fancy: "bg-fancy text-fancy-foreground shadow-xs hover:bg-fancy/90",
        fancyOutline:
          "border border-fancy bg-transparent shadow-xs hover:bg-fancy hover:text-fancy-foreground hover:border-fancy dark:bg-fancy/30 dark:border-fancy dark:hover:bg-fancy/50",
        fancyGhost:
          "border-transparent bg-transparent text-fancy hover:border-fancy",
        fancyLink:
          "border-transparent text-fancy underline-offset-4 hover:underline",
        disabled:
          "border-transparent bg-muted/45 text-muted-foreground/50 cursor-not-allowed",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
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
