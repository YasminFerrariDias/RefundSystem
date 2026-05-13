import type { ReactNode } from "react"
import { RefundProvider } from "./Refund/RefundProvider"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryClient = new QueryClient() as any;

  return (
    <QueryClientProvider client={queryClient}>
      <RefundProvider>
        {children}
      </RefundProvider>
    </QueryClientProvider>
  )
}

