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
      <div className="bg-background h-screen">
        <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}