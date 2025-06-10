import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";

export function HeaderApp() {
  return (
    <div className="flex justify-between items-center gap-4 max-w-[1120px] 
      p-4 mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Logo />
      
      <div className="w-[416px]">
        <Input placeholder="Qual cidade você procura?"/>
      </div>

      <div>
        <Link href="/signIn">
          <Button>Acesso Restrito</Button>
        </Link>
      </div>
      
    </div>
  )
}