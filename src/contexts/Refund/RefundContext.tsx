import { createContext } from "react";
import { requests } from "../../utils/requests";

interface RefundContextProps {
  refunds: typeof requests
  deleteRefund: (id: number) => void
}

export const RefundContext = createContext({} as RefundContextProps) 
