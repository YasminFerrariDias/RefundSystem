import { iconButtonVariant } from "./IconButton.variants";
import React from "react";
import { Icon } from "../../Icon/Icon";

interface IconButtonProps {
  as?: keyof React.JSX.IntrinsicElements
  buttonColor?: "green100" | "transparent" | "green200" | undefined
  onClick?: () => void
  icon: React.ElementType
  iconColor?: "white" | "green100"
  className?: string
  disabled?: boolean
}

export function IconButton({ as = "button", buttonColor, icon, iconColor, className, onClick, disabled, ...props }: IconButtonProps) {
  return React.createElement(
    as,
    {
      onClick,
      disabled,
      className: iconButtonVariant({ buttonColor, className }),
      ...props
    },
    <Icon icon={icon} size="md" iconColor={iconColor} />
  )
}
