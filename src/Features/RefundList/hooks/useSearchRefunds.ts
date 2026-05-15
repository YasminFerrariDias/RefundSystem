import { useState } from "react"
import { ApiRefunds } from "../../../services/api"
import { useQuery } from "@tanstack/react-query"

export const useSearchRefund = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const { data, isLoading } = useQuery({
    queryKey: ['refunds-search', searchTerm],
    queryFn: () => ApiRefunds.getSearch(searchTerm),
    enabled: searchTerm.length > 0
  })

  const searchResults = data?.data?.refunds?.data || null

  return { searchTerm, setSearchTerm, searchResults, isLoading }
}
