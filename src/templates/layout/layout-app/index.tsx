// Imports
import { HeaderApp } from "./components/header-app"
import { Footer } from "@/components/footer"

// Interface
interface LayoutProps {
  children: React.ReactNode
}

// Function
export function LayoutApp({
  children
}: LayoutProps) {
  return (
    <div className="bg-slate-white">
      <HeaderApp />
      <div className="bg-background flex flex-col min-h-screen">
        <main className="max-w-[1120px] mx-auto ">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}