


export function CityInfo() {
  return (
    <section className="grid grid-cols-2 mx-auto max-w-7xl px-4 sm:px-6 ls:px-80 mt-20">
      <div className="">
        <h1 className="text-heading-hgg font-barlow text-textTitle">
          Florianópolis
        </h1>
        <p className="text-body-lg text-textTitle font-heebo mt-10 mb-8">
          Capital do estado de Santa Catarina no sul do Brasil, é majoritariamente constituída pela ilha de Santa Catarina, com 54 km de comprimento. Famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.
        </p>
        
        <span className="text-body-md font-heebo text-text">
          É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.
        </span>

        {/* Stats */}
        <div className="">
          {/* <StatsBox icon="icon-pontos.png" label="67 Pontos Turísticos" />
          <StatsBox icon="icon-comida.png" label="20 Comida e Bebida" />
          <StatsBox icon="icon-eventos.png" label="11 Eventos Organizados" /> */}
        </div>
      </div>
    </section>
  )
}