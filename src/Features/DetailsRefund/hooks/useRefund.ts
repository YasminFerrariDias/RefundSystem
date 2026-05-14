import { ApiRefunds } from "../../../services/api"
import { useQuery } from "@tanstack/react-query"
import type { RefundType } from "../../../types/refundType"

export const useRefund = (id: string | undefined) => {
  const { data, isLoading, error, refetch } = useQuery<RefundType>({
    queryKey: ['refund', id],
    queryFn: async () => {
      if (!id) return null
      const response = await ApiRefunds.getOne(id)
      return response.data.refund
    }
  })
  return { data, isLoading, error, refetch }
}
