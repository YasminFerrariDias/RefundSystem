import type { IconType } from "react-icons";

export interface RefundType {
  id: string
  title: string
  category: string
  value: number
  receiptUrl?: string
  icon: IconType
  onClick?: () => void 
  className?: string 
}