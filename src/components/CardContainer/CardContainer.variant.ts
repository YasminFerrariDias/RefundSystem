import { tv } from "tailwind-variants";

export const cardContainerVariant = tv({
  base: `
    rounded-2xl shadow-lg flex flex-col bg-white p-[40px]
  `,
  variants: {
    size: {
      sm: "w-[512px] h-[224px] ",
      md: "w-[512px] h-[388px]",
      lg: "w-[512px] h-[504px]",
      xl: "w-4/5 max-h-4/5 overflow-y-auto"
    }
  },
  defaultVariants: {
    size: "xl"
  }
})
