import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { useRouter } from "next/router";

interface HeaderAppProps {
  searchTerm: string; 
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export function HeaderApp({
  searchTerm,
  onSearchChange
}: HeaderAppProps) {
  const router = useRouter();

  const getCentralContent = () => {
    if(router.pathname === "/") {
      return (
        <div className="w-[416px]">
          <Input 
            placeholder="Qual cidade você procura?"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
    )

    } else if (router.pathname === "/city") {
      return (
        <div className="flex-grow flex justify-center">
          <span className="text-heading-sm font-barlow text-text font-medium">Cidade</span>
        </div>
      )
    } else if (router.pathname === "/locale") {
      return (
        <div className="flex-grow flex justify-center">
          <span className="text-heading-sm font-barlow text-text font-medium">Local</span>
        </div>
      )
    }

    return (
      <div className="flex-grow flex justify-center">
        {/* Pode deixar vazio ou colocar um fallback se houver outras rotas */}
      </div>
    );
  }


  return (
    <div className="flex justify-between items-center gap-4 max-w-[1120px] 
      p-4 mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Logo />
      

      {getCentralContent()}

      <div>
        <Link href="/signIn">
          <Button>Acesso Restrito</Button>
        </Link>
      </div>
      
    </div>
  )
}