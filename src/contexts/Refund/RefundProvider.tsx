import { useState, type ReactNode } from "react";
import { RefundContext } from "./RefundContext";
import type { RefundType } from "../../types/refundType";
import { ApiRefunds } from "../../services/api";
import { useCallback } from "react"
import { ToastError } from "../../components/Toast";

interface RefundProviderProps {
  children: ReactNode
}

export function RefundProvider({ children }: RefundProviderProps) {
  const [refunds, setRefunds] = useState<RefundType[]>([])

  const loadRefunds = useCallback(async () => {
    const response = await ApiRefunds.getAll()

    try {
      setRefunds(response.data.refunds.data)

    } catch (error) {
      console.log(error)

      ToastError('Erro ao buscar as solicitações!')
    }
  }, [])

  const deleteRefund = async (id: string) => {
    await ApiRefunds.deleteRefund(id)
    await loadRefunds()
  }

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund, loadRefunds }}>
      {children}
    </RefundContext.Provider>
  )
}