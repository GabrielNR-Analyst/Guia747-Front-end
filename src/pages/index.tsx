// Imports
import Link from "next/link";
import Image from "next/image";
import { GridCard } from "@/components/grid-card";
import { LayoutApp } from "@/templates/layout/layout-app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Interfaces
interface CitiesProps {
  id: string,
  slug: string,
  image: string
  title: string
  quantityLocales: number
}

// Data
const cities: CitiesProps[] = [
  { 
    id: '1',
    slug: 'aguas-mornas',
    image: '/cities/aguas-mornas.png',
    title: 'Águas Mornas',
    quantityLocales: 13,
  },
  {
    id: '2',
    slug: 'bombinhas',
    image: '/cities/bombinhas.png',
    title: 'Bombinhas',
    quantityLocales: 43
  },
  { 
    id: '3',
    slug: 'blumenau',
    image: '/cities/blumenau.png',
    title: 'Blumenau',
    quantityLocales: 29
  },
  {
    id: '4',
    slug: 'florianopolis',
    image: '/cities/florianopolis.png',
    title: 'Florianópolis',
    quantityLocales: 98
  },
  { 
    id: '5',
    slug: 'imbituba',
    image: '/cities/imbituba.png',
    title: 'Imbituba',
    quantityLocales: 61,
  },
  {
    id: '6',
    slug: 'jaragua-do-sul',
    image: '/cities/jaragua-do-sul.png',
    title: 'Jaraguá do Sul',
    quantityLocales: 41
  },
  { 
    id: '7',
    slug: 'lages',
    image: '/cities/lages.png',
    title: 'Lages',
    quantityLocales: 19
  },
  {
    id: '8',
    slug: 'rio-do-sul',
    image: '/cities/rio-do-sul.png',
    title: 'Rio do Sul',
    quantityLocales: 27
  },
]


// Function
export default function Home() {
  const router = useRouter();
  // Estado para armazenar os resultados filtrados da busca (pode ser um array vazio)
  const [filteredCities, setFilteredCities] = useState<CitiesProps[]>([]);
  // Estado para verificar se uma busca foi realizada e não encontrou resultados
  const [noResultsFound, setNoResultsFound] = useState<boolean>(false);

  // Efeito para reagir às mudanças na query da URL (termo de busca)
  useEffect(() => {
    const query = router.query.q as string; 

    if (query) {
      // Quando há um termo de busca
      const results = cities.filter((city) =>
        city.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
      setFilteredCities(results); // Atualiza o estado com as cidades filtradas
      setNoResultsFound(results.length === 0); // Define se não houve resultados
    } else {
      // Se não houver termo de busca na URL (ou se foi limpo)
      setFilteredCities(cities); // Exibe todas as cidades
      setNoResultsFound(false); // Reinicia o estado de "sem resultados"
    }
  }, [router.query.q]); // Dependência: executa quando o parâmetro 'q' da URL muda


  return (
    <LayoutApp>
      {/* Condicional para exibir o H1 e os filtros */}
      {!noResultsFound && ( // Só exibe se NÃO houver "sem resultados"
        <div className="relative flex items-center justify-between">
          <h1 
            className="text-heading-xl md:text-heading-xll text-cyan-900 font-barlow 
            font-semibold leading-10 p-10"
            >
            Selecione uma cidade
          </h1>

          <div className="hidden md:flex gap-5 items-center border-b border-shape02 ">
            <span className="filter cursor-pointer text-base font-heebo leading-6 font-bold text-textTitle border-b-2 border-brandOrange">
              Todas
            </span>

            <span className="filter cursor-pointer text-body-md font-heebo text-text ">
              Mais acessadas
            </span>

            <span className="filter cursor-pointer text-body-md font-heebo text-text ">
              A - Z 
            </span>
          </div>
        </div>
      )}
    
      {/* Lógica de renderização dos cards ou da mensagem de "Sem resultados" */}
      {noResultsFound ? ( 
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center w-full px-4"> 
          <span className="text-6xl mb-4">😔</span>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Sem resultados.</h2>
          <p className="text-gray-500">Tente uma nova busca.</p>
        </div>
      ) : (
        <GridCard>
          {filteredCities.map((city: CitiesProps) => (
            <main 
              key={city.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-200" 
            >
              <div>
                <Link href={`/city`}> 
                  <Image 
                    src={city.image} 
                    alt={city.title} 
                    width={300}
                    height={175} 
                    className="w-full h-44 object-cover"
                  />
                </Link>
                <h3 className="text-heading-sm m-3 text-textTitle font-barlow">
                  {city.title}
                </h3>
                <p className="text-heading-xs m-3 text-text font-heebo font-normal">
                  {city.quantityLocales} locais
                </p>
              </div>
            </main>
          ))}
        </GridCard>
      )}
    </LayoutApp>
  );
}
