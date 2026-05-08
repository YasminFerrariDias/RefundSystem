import type { ReactNode } from "react"
import { RefundProvider } from "./Refund/RefundProvider"
import { PrimeReactProvider } from "primereact/api"

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <PrimeReactProvider>
      <RefundProvider>
        {children}
      </RefundProvider>
    </PrimeReactProvider >
  )
}

