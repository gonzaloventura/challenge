import Cards from "@/components/Cards/Cards"
import { redirect } from "next/navigation"

function obtenerBusqueda(query) {
    return fetch(`https://wrk.acronex.com/api/challenge/machines?q=${query}`, { cache: 'no-store' })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default async function MachinesPage({ searchParams }) {
    const params = searchParams
    const search = await obtenerBusqueda(params.q)

    return (
        <div className="flex flex-col gap-10 p-10">
            <h1 className="text-lg md:text-2xl font-semibold">{search.length == (null || undefined) ? 'No se encontraron resultados con "' + params.q + '"' : (search.length === 1 ? 'Se encontró 1 resultado con "' + params.q + '"' : "Se encontraron " + search.length + ' resultados con "' + params.q + '"')}</h1>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {search.code ?
                        <p>No se encontraron máquinas con la descripción ingresada</p>
                        :
                        search.map((item) => {
                            return (
                                <Cards key={item.id} data={item} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}
