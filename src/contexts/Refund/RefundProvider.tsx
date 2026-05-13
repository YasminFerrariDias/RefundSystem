import { type ReactNode } from "react";
import { RefundContext } from "./RefundContext";
import { ApiRefunds } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../lib/react-query";

interface RefundProviderProps {
  children: ReactNode
}

export function RefundProvider({ children }: RefundProviderProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['refunds'],
    queryFn: async () => {
      const response = await ApiRefunds.getAll()
      return response.data.refunds.data
    }
  })

  const refunds = data || []

  const deleteRefund = async (id: string) => {
    await ApiRefunds.deleteRefund(id)
    await queryClient.invalidateQueries({ queryKey: ['refunds'] })
  }

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund, isLoading, error }}>
      {children}
    </RefundContext.Provider>
  )
}