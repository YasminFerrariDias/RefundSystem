import type { VariantProps } from "tailwind-variants";
import { iconVariant } from "./Icon.variants";
import React from "react";

interface IconProps
  extends VariantProps<typeof iconVariant>,
  React.ComponentProps<"svg"> {
  icon: React.ElementType;
}

export function Icon({ icon = "svg", size, iconColor, children, className, ...props }: IconProps) {
  return React.createElement(
    icon,
    {
      className: iconVariant({ size, iconColor, className }),
      ...props
    },
    children
  )
}

