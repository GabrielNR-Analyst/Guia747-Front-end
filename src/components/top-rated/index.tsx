// Imports
import Link from "next/link";
import Image from "next/image";
import { GridCard } from "../grid-card";
import { Coffee, Star } from "lucide-react"
import type { TopRatedLocalesProps } from "@/pages/city";

// Interfaces
interface TopRatedProps {
  data: TopRatedLocalesProps[]
}

export function TopRated({
  data
}: TopRatedProps) {
  return (
    <section className=" mx-auto max-w-7xl mb-8">
      
      <h2 className="text-heading-xll font-barlow text-textTitle 
        mx-auto max-w-7xl px-4 sm:px-6 ls:px-80 mt-28 mb-8"
      >
        Top avaliados
      </h2>

      <GridCard>
        {data.map((item) => (
          <main className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-200" >
          <div className="relative">
            <Link href={`/city`}>
              <Image 
                src={item.image} 
                alt=''
                width={300}
                height={175} 
                className="w-full h-44 object-cover"
              />
            </Link>

              {/* Cardzinho de Favorito / Avaliação */}
              <div className="absolute top-2 left-2 bg-brandOrange rounded-full px-3 py-1 flex items-center space-x-1 text-red text-sm font-semibold">
                {/* Ícone de estrela (pode usar uma biblioteca de ícones como lucide-react ou um SVG simples) */}
                <Star size={14} color="white" fill="white"/>
                <span className="text-white text-sm font-barlow">
                  {item.topRated}
                </span>
              </div>

            <h3 className="text-heading-sm font-barlow text-textTitle m-3">
              {item.title}
            </h3>

            <hr className="text-shape02 text-[1px]"/>
            <div className="flex justify-between items-center">
              <p className="text-heading-xs font-barlow text-text m-3">
                {item.categories}
              </p>
              <Coffee 
                size={18}
                color="#F25D27"
                className="mr-4"
              />
            </div>
          </div>
          </main>
        ))}
      </GridCard>
    </section>
  )
}