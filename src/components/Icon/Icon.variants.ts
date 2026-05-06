import { tv } from "tailwind-variants"

export const iconVariant = tv({
  variants: {
    size: {
      sm: "w-[18px] h-[18px]",
      md: "w-[24px] h-[24px]",
      lg: "w-[110px] h-[110px]",
    },
    iconColor: {
      white: "text-white",
      green100: "text-green-100",
      green200: "text-green-200",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "green100"
  }
})
