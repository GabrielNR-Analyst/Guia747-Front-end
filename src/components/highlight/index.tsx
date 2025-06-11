import { Button } from "../ui/button";
import Image from "next/image"

export function Highlight() {
  return (
    <section className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 ls:px-80 mb-8">
      <div className="bg-white grid grid-cols-2">
      <div className="pl-8">
        <div className="mt-6 mb-4 flex justify-between">
          <Button>Destaque</Button>
        </div>

        <h1 className="text-heading-xll font-barlow text-textTitle ">
          Praia dos Ingleses
        </h1>

        
        <p className="text-body-md font-heebo text-text mt-4"> 
          Capital do estado de Santa Catarina no sul do Brasil, 
          é maioritariamente constituída pela Ilha de Santa Catarina, 
          com 54 km de comprimento.
        </p>
      
      </div>

      <Image 
        src="/bannerpequeno.png"
        alt=""
        width={500}
        height={500}
        className="w-full h-full"
      /> 
      </div>
    </section>
    
  )
}