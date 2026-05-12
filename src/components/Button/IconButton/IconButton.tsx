import type { VariantProps } from "tailwind-variants";
import { iconButtonVariant } from "./IconButton.variants";
import React from "react";
import { Icon } from "../../Icon/Icon";

interface IconButtonProps
  extends VariantProps<typeof iconButtonVariant>,
  React.ComponentProps<"button"> {
  as?: keyof React.JSX.IntrinsicElements

  onChange?: () => Event
  icon: React.ElementType
  iconColor?: "white" | "green100"
}

export function IconButton({ as = "button", buttonColor, icon, iconColor, className, onChange, ...props }: IconButtonProps) {
  return React.createElement(
    as,
    {
      onChange,
      className: iconButtonVariant({ buttonColor, className }),
      ...props
    },
    <Icon icon={icon} size="md" iconColor={iconColor} />
  )
}
