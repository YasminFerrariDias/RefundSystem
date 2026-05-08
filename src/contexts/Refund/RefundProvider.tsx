import { useState, type ReactNode  } from "react";
import { requests } from "../../utils/requests";
import { RefundContext } from "./RefundContext";

interface RefundProviderProps {
  children: ReactNode
}

export function RefundProvider({ children }: RefundProviderProps) {
  const [refunds, setRefunds] = useState(requests)

  function deleteRefund(id: number) {
    const list = refunds.filter(item => item.id !== id)
    setRefunds(list)
  }

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund }}>
      {children}
    </RefundContext.Provider>
  )
}