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
    console.log("Dados buscados:", response.data.refunds.data)
    return response.data.refunds.data
  }
})

  const refunds = data || []

const deleteRefund = async (id: string) => {
  console.log("Deletando:", id)
  await ApiRefunds.deleteRefund(id)
  console.log("Deletado, invalidando cache...")
  await refetch()
  console.log("Cache invalidado")
}

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund, isLoading, error, refetch }}>
      {children}
    </RefundContext.Provider>
  )
}