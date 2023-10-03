'use client'
import { useParams } from "next/navigation"
import { FaAngleLeft } from "react-icons/fa6"
import { useRouter } from 'next/navigation'
import Indicadores from "@/components/Cards/Indicadores"


const getDataFromId = (id) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL + id}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default async function IdPage() {
  const params = useParams()
  const router = useRouter()
  const data = await getDataFromId(params.id)
  const last_update = new Date(data.last_update)

  if (data.code === 'error') {
    return (
      <main className="flex justify-center mt-10">
        <h1 className="text-2xl font-semibold">{data.detail}</h1>
      </main>
    )
  }

  return (
    <main className="md:px-32 md:py-6 p-4">
      <button className="flex mb-4 font-semibold text-sm items-center gap-1 border border-gray-300 text-gray-500 rounded p-2 hover:border-gray-400 transition-all" onClick={() => router.back()}><FaAngleLeft /> Volver atrás</button>
      <div className="bg-white shadow rounded">
        <div className="flex justify-between font-semibold text-2xl px-10 py-6 text-gray-600">
          <h1>{data.description}</h1>
          <h1>{data.id}</h1>
        </div>
        <hr />
        <div className="flex md:flex-row flex-col">
          <div className="flex-1 m-8">
            <div>
              {
                data.class == "Pulverizadora" &&
                <Indicadores tipo={"pulverizadora"} datos={data.data} />
              }
              {
                data.class == "Cosechadora" &&
                <Indicadores tipo={"cosechadora"} datos={data.data} />
              }
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div>
                <h2 className="font-semibold">Empresa</h2>
                <p className="font-semibold text-[var(--color-primary)]">{data.company}</p>
              </div>
              <div>
                <h2 className="font-semibold">Clase</h2>
                <p>{data.class}</p>
              </div>
              <div>
                <h2 className="font-semibold">Estado</h2>
                {data.moving ? <p className="flex gap-2"><span className="status-moving-true"></span>En movimiento</p> : <p className="flex gap-2"><span className="status-moving-false"></span>Detenido</p>}
              </div>
              <div>
                <h2 className="font-semibold">Última actualización</h2>
                <p className="flex flex-col">
                  {last_update.toLocaleString()}
                </p>
              </div>
            </div>

          </div>
          <div className="flex-auto">
            <div className="flex flex-col gap-10 m-8">
              <div className="border solid border-[var(--background-light-gray)] rounded-lg">
                <h1 className="bg-[var(--background-light-gray)] text-center font-semibold">General</h1>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Cosechando</p>
                  <p className="w-1/2">{data.data.general["cosechando"] != (null || undefined) ? data.data.general["cosechando"] : "-"}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Batería Interna</p>
                  <p className="w-1/2">{data.data.general["batería interna"] != (null || undefined) ? data.data.general["batería interna"] : "-"}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Batería Vehículo</p>
                  <p className="w-1/2">{data.data.general["batería vehiculo"] != (null || undefined) ? data.data.general["batería vehiculo"] : "-"}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Uso Combustible</p>
                  <p className="w-1/2">{data.data.general["uso combustible"] != (null || undefined) ? data.data.general["uso combustible"] : "-"}</p>
                </div>
              </div>
              {data.class === "Pulverizadora" &&
                <div className="border solid border-[var(--background-light-gray)] rounded-lg">
                  <h1 className="bg-[var(--background-light-gray)] text-center font-semibold">Clima</h1>
                  <div className="flex flex-row gap-4">
                    <p className="w-1/2 text-right">Temperatura</p>
                    <p className="w-1/2">{data.data.clima["temperatura"] != (null || undefined) ? data.data.clima["temperatura"] : "-"}</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <p className="w-1/2 text-right">Humedad</p>
                    <p className="w-1/2">{data.data.clima["humedad"] != (null || undefined) ? data.data.clima["humedad"] : "-"}</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <p className="w-1/2 text-right">Dirección del Viento</p>
                    <p className="w-1/2">{data.data.clima["direccion viento"] != (null || undefined) ? data.data.clima["direccion viento"] : "-"}</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <p className="w-1/2 text-right">Velocidad del Viento</p>
                    <p className="w-1/2">{data.data.clima["velocidad viento"] != (null || undefined) ? data.data.clima["velocidad viento"] : "-"}</p>
                  </div>
                </div>
              }
              <div className="border solid border-[var(--background-light-gray)] rounded-lg">
                <h1 className="bg-[var(--background-light-gray)] text-center font-semibold">Operación</h1>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Velocidad</p>
                  <p className="w-1/2">{data.data["operación"]["velocidad"] != (null || undefined) ? data.data["operación"]["velocidad"] : "-"}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Presión</p>
                  <p className="w-1/2">{data.data["operación"]["presión"] != (null || undefined) ? data.data["operación"]["presión"] : "-"}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Producto / Hectárea</p>
                  <p className="w-1/2">{data.data["operación"]["producto / hectarea"] != (null || undefined) ? data.data["operación"]["producto / hectarea"] : "-"}</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="w-1/2 text-right">Ancho</p>
                  <p className="w-1/2">{data.data["operación"]["ancho"] != (null || undefined) ? data.data["operación"]["ancho"] : "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )



}
