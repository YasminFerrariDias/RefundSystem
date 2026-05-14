import { ApiRefunds } from "../../../services/api"
import { useQuery } from "@tanstack/react-query"
import type { RefundType } from "../../../types/refundType"

export const useRefund = (id: string | undefined) => {
  const { data, isLoading, error, refetch } = useQuery<RefundType>({
    enabled: !!id,
    queryKey: ['refund', id],
    queryFn: async () => {
      const response = await ApiRefunds.getOne(id!)
      return response.data.refund
    }
  })
  return { data, isLoading, error, refetch }
}
