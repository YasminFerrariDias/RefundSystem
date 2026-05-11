import type { IconType } from "react-icons";

export type RequesType = {
  id: number;
  name: string;
  category: string;
  icon: IconType
  amount: number
  onClick?: () => void 
  className?: string 
  receiptUrl?: string
}