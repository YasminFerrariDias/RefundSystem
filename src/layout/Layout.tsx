import {  type ReactNode } from "react";
import { Header } from "./components/Header";

interface LayoutProps {
  children: ReactNode
}

export function Layout({children}: LayoutProps) {
  return (
    <>
    <Header /> 
    {children}
    </>
  )
}