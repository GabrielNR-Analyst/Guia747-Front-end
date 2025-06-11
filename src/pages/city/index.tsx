import { CityInfo } from "@/components/city-info";
import { Highlight } from "@/components/highlight";
import { TopRated } from "@/components/top-rated";
import { LayoutApp } from "@/templates/layout/layout-app";


export default function City() {
  return (
    <LayoutApp>
       <div className="min-h-screen min-w-full">

        {/* Secao Banner Gerar Component */}
        <img src="/florianopolis.png" className="w-full object-cover h-[340px]"/>

        <CityInfo />
        <TopRated />
        <Highlight />
         {/* <Featured />
        <Explore /> */}
        </div>

    </LayoutApp>
   
  )
}