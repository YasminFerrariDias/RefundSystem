import { useEffect, useState } from "react"
import { ApiRefunds } from "../../../services/api"
import type { RefundType } from "../../types/refundType"

export const useRefund = (id: string | undefined) => {
  const [ refund, setRefund ] = useState<RefundType | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    if (!id) return

    ApiRefunds.getOne(id)
      .then(response => {
        setRefund(response.data)
        setIsLoading(false)
      })
      .catch(erro => {
        setError(erro)
        setIsLoading(false)
      })
  }, [id])

  return { refund, isLoading, error }
}