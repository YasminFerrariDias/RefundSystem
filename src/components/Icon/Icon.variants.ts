import { tv } from "tailwind-variants"

export const iconVariant = tv({
  variants: {
    size: {
      sm: "w-[18] h-[18]",
      md: "w-[24] h-[24]",
      lg: "w-[110] h-[110]",
    },
    iconColor: {
      white: "text-white",
      green100: "text-green-100",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "green100"
  }
})
