export interface CreateRefundData {
  title: string
  category: string
  value: number
  receipt?: string | null
}