import type { IconType } from "react-icons";

export interface RefundType {
  id: string
  title: string
  category: string
  value: number
  receipt?: string
  icon: IconType
  onClick?: () => void 
  className?: string 
}