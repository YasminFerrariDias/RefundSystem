import type { ReactNode } from "react"
import { RefundProvider } from "./Refund/RefundProvider"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface AppProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient();

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RefundProvider>
        {children}
      </RefundProvider>
    </QueryClientProvider>
  )
}

