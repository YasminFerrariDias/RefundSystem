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
      const response = await ApiRefunds.getAll()
      return response.data.refunds.data
    }
  })

  const refunds = data ?? []

  return (
    <RefundContext.Provider value={{ refunds, isLoading, error, refetch }}>
      {children}
    </RefundContext.Provider>
  )
}