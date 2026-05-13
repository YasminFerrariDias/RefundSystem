import { useState, type ReactNode } from "react";
import { RefundContext } from "./RefundContext";
import { ApiRefunds } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ToastError } from "../../components/Toast";
import { useMutation } from "@tanstack/react-query";

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

  const [searchResults, setSearchResults] = useState(null)

  const { mutate } = useMutation({
    mutationFn: async (value: string) => await ApiRefunds.getSearch(value),
    onSuccess: (search) => {
      setSearchResults(search.data.refunds.data)
    },
    onError: () => {
      ToastError('Erro ao executar a pesquisa!')
    }
  })

  const refunds = data || []

  const deleteRefund = async (id: string) => {
    await ApiRefunds.deleteRefund(id)
    await refetch()
  }

  return (
    <RefundContext.Provider value={{ refunds, deleteRefund, isLoading, error, refetch, searchResults, searchRefunds: mutate }}>
      {children}
    </RefundContext.Provider>
  )
}