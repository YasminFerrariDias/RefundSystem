import { tv } from "tailwind-variants";

export const cardContainerVariant = tv({
  base: `
    rounded-2xl shadow-lg flex flex-col bg-white p-[40px]
    overflow-visible 
  `,
  variants: {
    size: {
      md: "w-[512px]",
      xl: "inset-0 absolute ml-50 mr-50 mb-30 mt-35"
    }
  },
  defaultVariants: {
    size: "xl"
  }
})