import { tv } from "tailwind-variants";

export const cardContainerVariant = tv({
  base: `
    rounded-2xl shadow-lg flex flex-col bg-white p-[40px]
  `,
  variants: {
    size: {
      sm: "w-[512px] h-[224px] overflow-y-auto",
      md: "w-[512px] h-[388px] overflow-y-auto",
      lg: "w-[512px] h-[504px] overflow-y-auto",
      xl: "inset-0 absolute ml-20 mr-20 mb-20 mt-35"
    }
  },
  defaultVariants: {
    size: "xl"
  }
})
