import type { VariantProps } from "tailwind-variants";
import { buttonContainerVariant } from "./ButtonContainer.variants";
import React from "react";

interface ButtonContainerProps
  extends VariantProps<typeof buttonContainerVariant>,
  React.ComponentProps<"button"> {
  as?: keyof React.JSX.IntrinsicElements
}

export function Button({ as = "button", size, buttonColor, children, className, ...props }: ButtonContainerProps) {
  return React.createElement(
    as,
    {
      className: buttonContainerVariant({ size, buttonColor, className }),
      ...props
    },
    children
  )
}
