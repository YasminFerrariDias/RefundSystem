import { type ReactNode, useState } from "react";
import { RefundContext } from "./RefundContext";
import { ApiRefunds } from "../../services/api";
import { useQuery, useMutation } from "@tanstack/react-query";

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

  const [searchResults, setSearchResults] = useState<null | typeof data>(null)

  const { mutate: searchRefunds } = useMutation({
    mutationFn: async (value: string) => {
      const response = await ApiRefunds.getSearch(value)
      return response.data.refunds.data
    },
    onSuccess: (results) => {
      setSearchResults(results)
    },
    onError: () => {
      setSearchResults([])
    }
  })

  const refunds = data ?? []

  return (
    <RefundContext.Provider value={{ refunds, isLoading, error, refetch, searchResults, searchRefunds }}>
      {children}
    </RefundContext.Provider>
  )
}