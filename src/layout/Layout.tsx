import { type ReactNode } from "react";
import { Header } from "./components/Header";

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-400 h-full w-full">
      <Header />
      {children}
    </div>
  )
}