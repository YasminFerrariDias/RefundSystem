import type { VariantProps } from "tailwind-variants";
import { buttonContainerVariant } from "./ButtonContainer.variants";
import React from "react";
import { Text } from "../../Text/Text";

interface IconButtonProps
  extends VariantProps<typeof buttonContainerVariant>,
  React.ComponentProps<"button"> {
  as?: keyof React.JSX.IntrinsicElements

  text: string
  textColor?: "white" | "green100"
  decoration?: "bold" 
  sizeText?:
  | "xs"
  | "sm"
  | "smLine"
  | "md"
  | "mdLine"
  | "lg"
  | "lgLine"
}

export function ButtonContainer({ as = "button", buttonColor, text, decoration, sizeText, textColor, className, ...props }: IconButtonProps) {
  return React.createElement(
    as,
    {
      className: buttonContainerVariant({ buttonColor, className }),
      ...props
    },
    <Text children={text} size={sizeText} textColor={textColor} decoration={decoration} />
  )
}
