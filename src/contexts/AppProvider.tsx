import type { ReactNode } from "react"
import { RefundProvider } from "./Refund/RefundProvider"

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <RefundProvider>
      {children}
    </RefundProvider>
  )
}

