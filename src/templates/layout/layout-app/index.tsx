// Imports
import { useRouter } from "next/router";
import { HeaderApp } from "./components/header-app"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react";

// Interface
interface LayoutProps {
  children: React.ReactNode
}

// Function
export function LayoutApp({
  children
}: LayoutProps) {

  const router = useRouter();

  const [localSearchTerm, setLocalSearchTerm] = useState<string>('');

  useEffect(() => {
    if (router.query.q) {
      setLocalSearchTerm(router.query.q as string);
    }
  }, [router.query.q]); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalSearchTerm(value); 

   
    router.push({
      pathname: router.pathname,
      query: value ? { q: value } : {}, 
    }, undefined, { shallow: true });
  };


  return (
    <div className="bg-slate-white">
      <HeaderApp searchTerm={localSearchTerm} onSearchChange={handleSearchChange}/>
      <div className="bg-background flex flex-col min-h-screen pb-5">
        <main className="max-w-[1120px] mx-auto ">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}