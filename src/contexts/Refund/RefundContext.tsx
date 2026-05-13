import { createContext } from "react";
import type { RefundType } from "../../types/refundType";

interface RefundContextProps {
  refunds: RefundType[] // pega a lista 
  deleteRefund: (id: string) => Promise<void>
  isLoading: boolean
  error: Error | null 
  refetch: () => void
}

export const RefundContext = createContext({} as RefundContextProps) 
