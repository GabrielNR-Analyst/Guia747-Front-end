// Imports
import Link from "next/link";
import Image from "next/image";
import { GridCard } from "../grid-card";
import { Coffee } from "lucide-react";
import { Input } from "../ui/input";
import type { LocalesProps } from "@/pages/city";
import { useMemo, useState } from "react";


// Interfaces
interface ExploreProps {
  data: LocalesProps[];
}


export function Explore({
  data
}: ExploreProps) {
  // UseState
  const [searchTerm, setSearchTerm] = useState<string>('');


  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // UseMemo
  const filteredLocales = useMemo(() => {
    if (!searchTerm) {
      return data; // Se não houver termo de busca, retorna todos os dados
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return data.filter(item =>
      item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.categories.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.slug.toLowerCase().includes(lowerCaseSearchTerm) // Opcional: buscar por slug
    );
  }, [data, searchTerm]); // Dependências: re-filtra quando 'data' ou 'searchTerm' mudam


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

        <div className="w-[250px]">
          <Input 
            placeholder="Qual local você procura?"
            value={searchTerm}
            onChange={onSearchChange}
            className="bg-white"
          />
        </div>
      </section> 

      <GridCard>
        {/* {data.map((item) => (
          <main className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-200" key={item.id}>
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
        ))} */}


          {/* Usar os dados filtrados para mapear */}
          {filteredLocales.map((item) => (
          <main className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-200" key={item.id}>
            <div className="relative">
              <Link href={`/locales/${item.slug}`}> {/* Sugestão: usar o slug para o link do local */}
                <Image 
                  src={item.image} 
                  alt={item.title} // Adicionar alt para acessibilidade
                  width={300}
                  height={175} 
                  className="w-full h-44 object-cover"
                />
              </Link>

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
        {/* Mensagem se não houver resultados */}
        {filteredLocales.length === 0 && searchTerm && (
          <p className="col-span-full text-center text-gray-500">
            Nenhum local encontrado para "{searchTerm}".
          </p>
        )}
      </GridCard>
    </>
  )
}