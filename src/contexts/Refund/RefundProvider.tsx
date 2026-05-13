import { type ReactNode } from "react";
import { RefundContext } from "./RefundContext";
import { ApiRefunds } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

interface RefundProviderProps {
  children: ReactNode
}

export function RefundProvider({ children }: RefundProviderProps) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['refunds'],
    queryFn: async () => {
        console.log("🔄 Buscando refunds do backend...")
      const response = await ApiRefunds.getAll()
      return response.data.refunds.data
    }
  })

  const refunds = data || []

  const deleteRefund = async (id: string) => {
    await ApiRefunds.deleteRefund(id)
    await refetch()
  }

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund, isLoading, error, refetch }}>
      {children}
    </RefundContext.Provider>
  )
}