import * as React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
          {
            "bg-accent text-accent-foreground": variant === "default",
            "bg-secondary text-secondary-foreground": variant === "secondary",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Tag.displayName = "Tag";

export { Tag };




