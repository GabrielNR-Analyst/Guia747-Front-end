import Link from "next/link";
import Image from "next/image";
import { GridCard } from "../grid-card";
import { Coffee } from "lucide-react";

export function Explore() {
  return (
    <>
      <section className="container relative flex items-center justify-between mt-24 mb-10 mx-auto max-w-7xl px-4 sm:px-6 ls:px-80">
        <h1 className="text-heading-xll font-barlow text-textTitle">
          Conheça todos
        </h1>

        <div className="flex gap-5 items-center border-b border-shape02">
          <span className="text-base font-heebo leading-6 font-bold text-textTitle border-b-2 border-brandOrange">
            Todos
          </span>

          <span className="text-body-md font-heebo text-text ">
            Pontos turisticos
          </span>

          <span className="text-body-md font-heebo text-text">
            Comida e bebida
          </span>

          <span className="text-body-md font-heebo text-text">
            Eventos
          </span>
        </div>
      </section> 

      <GridCard>
        <main className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-200" >
          <div className="relative">
            <Link href={`/city`}>
              <Image 
                src='/aguas-mornas.png' 
                alt=''
                width={300}
                height={175} 
                className="w-full h-44 object-cover"
              />
            </Link>

            <h3 className="text-heading-sm font-barlow text-textTitle m-3">
              Doce e Companhia
            </h3>

            <hr className="text-shape02 text-[1px]"/>
            <div className="flex justify-between items-center">
              <p className="text-heading-xs font-barlow text-text m-3">
                Comida e bebida
              </p>
              <Coffee 
                size={18}
                color="#F25D27"
                className="mr-4"
              />
            </div>
          </div>
        </main>

      
      </GridCard>
    </>
  )
}