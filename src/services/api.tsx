import axios from "axios"
import type { Refund } from "../types/refund"

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL})

export const ApiRefunds = {
  getAll: () => api.get("/refunds"),
  getOne: (id: string) => api.get(`/refunds/${id}`),  
  getSearch: (q: string, page: number = 1) => api.get(`/refunds?q=${q}&page=${page}`),  
  postCreate: (data: Refund) => api.post("/refunds", data),
  deleteRefund: (id: string) => api.delete(`/refunds/${id}`),
}

export const ApiReceipts = {
  upload: (file: File) => {
    const formData = new FormData()
    formData.append("receiptFile", file)
    return api.post("/receipts", formData)
  },
  download: (id: string) => api.get(`/receipts/download/${id}`)
}
