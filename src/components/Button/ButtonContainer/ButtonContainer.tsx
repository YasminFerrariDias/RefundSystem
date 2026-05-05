import type { VariantProps } from "tailwind-variants";
import { buttonContainerVariant } from "./ButtonContainer.variants";
import React from "react";

interface ButtonContainerProps
  extends VariantProps<typeof buttonContainerVariant>,
  React.ComponentProps<"button"> {
  as?: keyof React.JSX.IntrinsicElements
}

export function ButtonContainer({ as = "button", size, buttonColor, textColor, children, className, ...props }: ButtonContainerProps) {
  return React.createElement(
    as,
    {
      className: buttonContainerVariant({ size, buttonColor, textColor, className }),
      ...props
    },
    children
  )
}
