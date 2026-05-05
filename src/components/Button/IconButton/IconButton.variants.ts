import { tv } from "tailwind-variants";

export const iconButtonVariant = tv({
  base: "inline-flex p-2 rounded-lg items-center justify-center",
  variants: {
    buttonColor: {
      transparent: "bg-transparent",
      green100: "bg-green-100 disabled:opacity-50 transition duration-300 enabled:hover:bg-green-200",
    },
  },
  defaultVariants: {
    buttonColor: "green100",
  }
})