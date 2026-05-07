import { tv } from "tailwind-variants";

export const iconButtonVariant = tv({
  base: "inline-flex p-3 rounded-lg items-center justify-center m-0 mt-1",
  variants: {
    buttonColor: {
      transparent: "bg-transparent",
      green100: "bg-green-100 disabled:opacity-50 transition duration-300 enabled:hover:bg-green-200",
      green200: "bg-green-200 disabled:opacity-50 transition duration-300 enabled:hover:bg-green-100",
    },
  },
  defaultVariants: {
    buttonColor: "green100",
  }
})