import React, { memo } from "react";
import { cn } from "@/lib/utils";

export const Container = memo(({
  children,
  className,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={cn("mx-auto max-w-6xl px-4 sm:px-6 md:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Container.displayName = "Container";
