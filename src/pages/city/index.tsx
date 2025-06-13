// Imports
import { CityInfo } from "@/components/city-info";
import { Explore } from "@/components/explore";
import { Highlight } from "@/components/highlight";
import { TopRated } from "@/components/top-rated";
import { LayoutApp } from "@/templates/layout/layout-app";


// Interfaces
export interface LocalesProps {
  id: string
  slug: string
  image: string
  title: string
  categories: string
}

export interface TopRatedLocalesProps extends LocalesProps {
  topRated: number
}


// Data
const topRatedLocales: TopRatedLocalesProps[] = [
  { 
    id: '1',
    slug: 'doce-e-companhia',
    image: '/locales/doce-e-companhia.png',
    title: 'Doce & Companhia',
    categories: 'Comida e Bebida',
    topRated: 4.7
  },
  { 
    id: '2',
    slug: 'lagoa-da-conceição',
    image: '/locales/lagoa-da-conceicao.png',
    title: 'Lagoa da Conceição',
    categories: 'Pontos Turístico',
    topRated: 5.0
  },
  { 
    id: '3',
    slug: 'praia-do-campeche',
    image: '/locales/praia-do-campeche.png',
    title: 'Praia do Campeche',
    categories: 'Pontos Turístico',
    topRated: 4.9
  },
  { 
    id: '4',
    slug: 'expo-tatto-floripa',
    image: '/locales/expo-tattoo-floripa.png',
    title: 'Expo Tatto Floripa',
    categories: 'Eventos Organizados',
    topRated: 4.8
  },
]

const locales: LocalesProps[] = [
  { 
    id: '1',
    slug: 'doce-e-companhia',
    image: '/locales/doce-e-companhia.png',
    title: 'Doce & Companhia',
    categories: 'Comida e Bebida',
  },
  { 
    id: '2',
    slug: 'lagoa-da-conceição',
    image: '/locales/lagoa-da-conceicao.png',
    title: 'Lagoa da Conceição',
    categories: 'Pontos Turístico',
  },
  { 
    id: '3',
    slug: 'praia-do-campeche',
    image: '/locales/praia-do-campeche.png',
    title: 'Praia do Campeche',
    categories: 'Pontos Turístico',
  },
  { 
    id: '4',
    slug: 'expo-tatto-floripa',
    image: '/locales/expo-tattoo-floripa.png',
    title: 'Expo Tatto Floripa',
    categories: 'Eventos Organizados',
  },
]


// Function
export default function City() {
  return (
    <LayoutApp>
       <div className="min-h-screen min-w-full">

        {/* Secao Banner Gerar Component */}
        <img src="/cities/banner-florianopolis.png" className="w-full object-cover h-[340px]"/>

        <CityInfo />
        <TopRated data={topRatedLocales}/>
        <Highlight />
        <Explore data={locales}/>
        </div>

    </LayoutApp>
   
  )
}