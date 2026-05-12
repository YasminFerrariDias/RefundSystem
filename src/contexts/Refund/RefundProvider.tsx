import { useState, type ReactNode } from "react";
import { RefundContext } from "./RefundContext";
import type { RefundType } from "../../types/refundType";
import { ApiRefunds } from "../../services/api";
import { useCallback } from "react"
import { Bounce, toast } from "react-toastify";

interface RefundProviderProps {
  children: ReactNode
}

export function RefundProvider({ children }: RefundProviderProps) {
  const [refunds, setRefunds] = useState<RefundType[]>([])

  const loadRefunds = useCallback(async () => {
    const response = await ApiRefunds.getAll()

    try {
      setRefunds(response.data.refuds.data)

    } catch (error) {
      console.log(error)

      toast.error('Erro ao buscar as solicitações!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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