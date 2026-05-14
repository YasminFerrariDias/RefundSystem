import type { ReactNode } from "react"
import { RefundProvider } from "./Refund/RefundProvider"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RefundProvider>
        {children}
      </RefundProvider>
    </QueryClientProvider>
  )
}

