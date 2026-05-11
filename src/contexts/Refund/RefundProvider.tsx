/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, type ReactNode  } from "react";
import { RefundContext } from "./RefundContext";
import type { RefundType } from "../../Features/types/refundType";
import { ApiRefunds } from "../../services/api";

interface RefundProviderProps {
  children: ReactNode
}

export function RefundProvider({ children }: RefundProviderProps) {
  const [refunds, setRefunds] = useState<RefundType[]>([])

  const loadRefunds = async () => {
    const response = await ApiRefunds.getAll()
    setRefunds(Array.isArray(response.data) ? response.data : response.data.data || [])
  }

  const deleteRefund = async (id: string) => {
    await ApiRefunds.deleteRefund(id)
    await loadRefunds()
  }

  useEffect(() => {
    loadRefunds()
  }, [])

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund, loadRefunds }}>
      {children}
    </RefundContext.Provider>
  )
}