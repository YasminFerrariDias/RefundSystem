import { createContext } from "react";
import type { Refund } from "../../types/refund";

interface RefundContextProps {
  refunds: Refund[] // pega a lista 
  isLoading: boolean
  error: Error | null
  refetch: () => void
}

export const RefundContext = createContext({} as RefundContextProps) 
