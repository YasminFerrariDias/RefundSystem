import { createContext } from "react";
import type { RefundType } from "../../types/refundType";

interface RefundContextProps {
  refunds: RefundType[] // pega a lista 
  deleteRefund: (id: string) => Promise<void>
  loadRefunds: () => Promise<void>
}

export const RefundContext = createContext({} as RefundContextProps) 
