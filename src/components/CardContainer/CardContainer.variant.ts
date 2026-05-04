import { tv } from "tailwind-variants";

export const cardContainerVariant = tv({
  base: `
    m-auto rounded-2xl shadow-lg flex items-center justify-center bg-white
  `,
  variants: {
    size: {
      sm: "w-[512px] h-[224px] ",
      md: "w-[512px] h-[388px]",
      lg: "w-[512px] h-[504px]",
      xl: "w-4/5 h-4/5"
    }
  },
  defaultVariants: {
    size: "xl"
  }
})