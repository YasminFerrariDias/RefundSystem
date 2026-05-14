import { useState } from "react"
import type { Refund } from "../../../types/refund"
import { ApiRefunds } from "../../../services/api"
import { useMutation } from "@tanstack/react-query"
import { ToastError } from "../../../components/Toast"

export const useSearchRefund = () => {
  const [searchResults, setSearchResults] = useState<Refund[] | null>(null)

  const { mutate } = useMutation({
    mutationFn: async (value: string) => await ApiRefunds.getSearch(value),
    onSuccess: (search) => {
      setSearchResults(search.data.refunds.data)
    },
    onError: () => {
      ToastError('Erro ao executar a pesquisa!')
    }
  })

  return {searchResults, searchRefunds: mutate}
}