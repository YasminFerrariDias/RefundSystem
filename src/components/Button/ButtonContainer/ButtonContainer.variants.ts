import { tv } from "tailwind-variants";

export const buttonContainerVariant = tv({
  base: "h-[48px] rounded-[8px]",
  variants: {
    size: {
      fit: "pl-5 pr-5",
      full: "w-full"
    },
    buttonColor: {
      transparent: "bg-transparent",
      green100: "bg-green-100 disabled:opacity-50 transition duration-300 enabled:hover:bg-green-200",
    },
  },
  defaultVariants: {
    size: "fit",
    buttonColor: "green100",
    textColor: "white"
  }
})