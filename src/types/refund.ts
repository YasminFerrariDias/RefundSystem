export interface Refund {
  id: string
  title: string
  category: string
  value: number
  receipt?: { id: string; path: string } | null
}
