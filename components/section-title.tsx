import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ id, title, subtitle, className }: SectionTitleProps) {
  return (
    <div id={id} className={cn("mb-12 scroll-mt-20", className)}>
      <h2 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}




