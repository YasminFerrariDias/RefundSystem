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

export interface RefundType {
  id: string
  title: string
  category: string
  value: number
  receiptUrl: string
}