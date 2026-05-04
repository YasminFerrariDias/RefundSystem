import React from "react";
import type { VariantProps } from "tailwind-variants";
import { cardContainerVariant } from "./CardContainer.variant";

interface CardContainerProps
  extends VariantProps<typeof cardContainerVariant>,
  React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements
}

export function CardContainer({ as = "div", size, children, className, ...props}: CardContainerProps) {
  return React.createElement(
    as, 
    {
      className: cardContainerVariant({size, className}),
      ...props,
    },
    children
  );
}
