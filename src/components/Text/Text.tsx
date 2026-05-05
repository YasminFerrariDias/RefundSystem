import type { VariantProps } from "tailwind-variants";
import { textVariant } from "./Text.variants";
import React from "react";

interface TextProps
  extends VariantProps<typeof textVariant>,
  React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements
}

export function Text({ as = "p", size, textColor, decoration, children, className, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariant({ size, textColor, decoration, className }),
      ...props
    },
    children
  )
} 