import type { IconType } from "react-icons/lib";
import type { Refund } from "./refund";

export interface RefundProps extends Refund {
  icon?: IconType
  onClick?: () => void
  className?: string
}
