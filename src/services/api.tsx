import axios from "axios"

const api = axios.create({ baseURL:"http://localhost:3333"})

export const ApiRefunds = {
  getAll: () => api.get("/refunds"),
  getOne: (id: string) => api.get(`/refunds/${id}`),  
  getSearch: (q: string, page: number = 1) => api.get(`/refunds?q=${q}&page=${page}`),  
  postCreate: (data: unknown) => api.post("/refunds", data),
  deleteRefund: (id: string) => api.delete(`/refunds/${id}`),
}

export const ApiReceipts = {
  upload: (file: File) => {
    const formData = new FormData()
    formData.append("receiptFile", file)
    return api.post("/receipts", formData)
  },
  getOne: (id: string) => api.get(`/receipts/${id}`),  
  delete: (id: string) => api.delete(`/receipts/${id}`), 
  download: (id: string) => api.get(`/receipts/download/${id}`, {
    responseType: "blob"
  })
}
