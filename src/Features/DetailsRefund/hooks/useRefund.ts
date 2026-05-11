import { useEffect, useState } from "react"
import { ApiRefunds } from "../../../services/api"

export const useRefund = (id: string) => {
  const [ refund, setRefund ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
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

  return { refund, isLoading, error}
}