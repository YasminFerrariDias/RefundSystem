import { tv } from "tailwind-variants";

export const textVariant = tv({
  variants: {
    size: {
      xs: "text-[10px]",
      sm: "text-[12px]",
      smLine: "text-[12px] leading-[16px]",
      md: "text-[14px]",
      mdLine: "text-[14px] leading-[18px]",
      lg: "text-[20px]",
      lgLine: "text-[20px] leading-[24px]",
    },
    textColor: {
      gray100: "text-gray-100",
      gray200: "text-gray-200",
      green100: "text-green-100",
      white: "text-white",
    },
    decoration: {
      regular: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",

      bodySm: "text-[12px] leading-[16px] font-normal",
      bodyMdRegular: "text-[14px] leading-[18px] font-normal",
      subheading: "text-[14px] leading-[18px] font-semibold",
      headingLg: "text-[20px] leading-[24px] font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    textColor: "gray100",
    decoration: "regular"
  }
});
