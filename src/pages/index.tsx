// Imports
import Link from "next/link";
import Image from "next/image";
import { GridCard } from "@/components/grid-card";
import { LayoutApp } from "@/templates/layout/layout-app";


// Function
export default function Home() {
  return (
    <LayoutApp>
      <h1 
        className="text-heading-xl md:text-heading-xll text-cyan-900 font-barlow 
        font-semibold leading-10 p-10"
        >
        Selecione uma cidade
      </h1>

      <GridCard>
        <main className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-200" >
          <div>
            <Link href={`/city`}>
              <Image 
                src='/aguas-mornas.png' 
                alt=''
                width={300}
                height={175} 
                className="w-full h-44 object-cover"
              />
            </Link>
            <h3 className="text-heading-sm m-3 text-cyan-900 font-barlow font-semibold">Águas Mornas</h3>
            <p className="text-heading-xs m-3 text-gray-700 font-heebo font-normal ">02 locais</p>
          </div>
        </main>

        <main className="bg-white">
          <div>
            <Link href={`/city`}>
              <Image 
                src='/aguas-mornas.png' 
                alt=''
                width={300}
                height={175} 
                className="w-full h-44 object-cover" 
              />
            </Link>
            <h3 className="text-heading-sm m-3 text-cyan-900 font-barlow font-semibold">Águas Mornas</h3>
            <p className="text-heading-xs m-3 text-gray-700 font-heebo font-normal ">02 locais</p>
          </div>
        </main>

        <main className="bg-white">
          <div>
            <Link href={`/city`}>
              <Image 
                src='/aguas-mornas.png' 
                alt=''
                width={300}
                height={175} 
                className="w-full h-44 object-cover" 
              />
            </Link>
            <h3 className="text-heading-sm m-3 text-cyan-900 font-barlow font-semibold">Águas Mornas</h3>
            <p className="text-heading-xs m-3 text-gray-700 font-heebo font-normal ">02 locais</p>
          </div>
        </main>

        <main className="bg-white">
          <div>
            <Link href={`/city`}>
              <Image 
                src='/aguas-mornas.png' 
                alt='' 
                width={300}
                height={175} 
                className="w-full h-44 object-cover" 
              />
            </Link>
            <h3 className="text-heading-sm m-3 text-cyan-900 font-barlow font-semibold">Águas Mornas</h3>
            <p className="text-heading-xs m-3 text-gray-700 font-heebo font-normal ">02 locais</p>
          </div>
        </main>
      </GridCard>
    </LayoutApp>
  );
}
