import { createContext } from "react";
import type { RefundType } from "../../types/refundType";

interface RefundContextProps {
  refunds: RefundType[] // pega a lista 
  isLoading: boolean
  error: Error | null 
  refetch: () => void
  searchResults: RefundType[] | null
  searchRefunds: (value: string) => void
}

export const RefundContext = createContext({} as RefundContextProps) 
