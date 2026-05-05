import { tv } from "tailwind-variants";

export const buttonContainerVariant = tv({
  base: "h-[48px]",
  variants: {
    size: {
      fit: "w-1",
      full: "w-full"
    },
    buttonColor: {
      white: "text-white",
      green100: "text-green-100",
    },
  },
  defaultVariants: {
    size: "fit",
    buttonColor: "green100"
  }
})