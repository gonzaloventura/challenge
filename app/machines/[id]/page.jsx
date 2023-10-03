'use client'
import Cards from "@/components/Cards/Cards"
import { useParams } from "next/navigation"
import {FaAngleLeft} from "react-icons/fa6"
import { useRouter } from 'next/navigation'


const getDataFromId = (id) => {
  return fetch(`https://wrk.acronex.com/api/challenge/machines/${id}`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default async function IdPage() {
  const params = useParams()
  const router = useRouter()
  const data = await getDataFromId(params.id)
  const last_update = new Date(data.last_update)

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
                <div className="grid grid-cols-2 gap-2 px-10 py-4">
                  <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${data.data.indicadores.taponamiento < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(data.data.indicadores.taponamiento >= 0.1 && data.data.indicadores.taponamiento < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(data.data.indicadores.taponamiento >= 0.2 && data.data.indicadores.taponamiento < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(data.data.indicadores.taponamiento >= 0.35 && data.data.indicadores.taponamiento < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(data.data.indicadores.taponamiento >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Taponamiento</h1>
                    <h2 className="font-medium text-4xl">{data.data.indicadores.taponamiento != undefined ? Math.trunc(data.data.indicadores.taponamiento * 100) : 0}%</h2>
                  </div>
                  <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${data.data.indicadores.evaporacion < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(data.data.indicadores.evaporacion >= 0.1 && data.data.indicadores.evaporacion < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(data.data.indicadores.evaporacion >= 0.2 && data.data.indicadores.evaporacion < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(data.data.indicadores.evaporacion >= 0.35 && data.data.indicadores.evaporacion < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(data.data.indicadores.evaporacion >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Evaporación</h1>
                    <h2 className="font-medium text-4xl">{data.data.indicadores.evaporacion != undefined ? Math.trunc(data.data.indicadores.evaporacion * 100) : 0}%</h2>
                  </div>
                  <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${data.data.indicadores.deriva < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(data.data.indicadores.deriva >= 0.1 && data.data.indicadores.deriva < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(data.data.indicadores.deriva >= 0.2 && data.data.indicadores.deriva < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(data.data.indicadores.deriva >= 0.35 && data.data.indicadores.deriva < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(data.data.indicadores.deriva >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm whitespace-nowrap">pérdida p. viento</h1>
                    <h2 className="font-medium text-4xl">{data.data.indicadores.deriva != undefined ? Math.trunc(data.data.indicadores.deriva * 100) : 0}%</h2>
                  </div>
                  <div className={`flex-col text-center place-content-center items-center align-middle py-3  ${data.data.indicadores.calidad < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(data.data.indicadores.calidad >= 0.1 && data.data.indicadores.calidad < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(data.data.indicadores.calidad >= 0.2 && data.data.indicadores.calidad < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(data.data.indicadores.calidad >= 0.35 && data.data.indicadores.calidad < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(data.data.indicadores.calidad >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Calidad</h1>
                    <h2 className="font-medium text-4xl">{data.data.indicadores.calidad != undefined ? Math.trunc((1- data.data.indicadores.calidad) * 100) : 0}%</h2>
                  </div>
                </div>
              }
              {
                data.class == "Cosechadora" &&
                <div className="grid grid-cols-2 gap-2 px-10 py-4">
                  <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-gray-300 text-[var(--text-dark)]">
                    <h1 className="text-sm">Tipo Cultivo</h1>
                    <h2 className="font-medium text-4xl">{data.data.indicadores.cultivo}</h2>
                  </div>
                  <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-gray-300 text-[var(--text-dark)]">
                    <h1 className="text-sm">Humedad Grano</h1>
                    <h2 className="font-medium text-4xl">{data.data.indicadores.humedad_grano != undefined ? (data.data.indicadores.humedad_grano) : 0}%</h2>
                  </div>
                  <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-[var(--rinde-humedo)] text-white">
                    <h1 className="text-sm whitespace-nowrap">Rinde Húmedo</h1>
                    <h2 className="font-medium text-4xl flex flex-col">{data.data.indicadores.rinde_humedo}<span className='text-sm'>kg/ha</span></h2>
                  </div>
                  <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-[var(--rinde-seco)] text-[var(--text-dark)]">
                    <h1 className="text-sm">Rinde Seco</h1>
                    <h2 className="font-medium text-4xl flex flex-col">{data.data.indicadores.rinde_seco}<span className='text-sm'>kg/ha</span></h2>
                  </div>
                </div>
              }
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div>
                <h2 className="font-semibold">Empresa</h2>
                <p className="font-semibold text-[#4980cc]">{data.company}</p>
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
              <div className="border solid border-gray-200 rounded-lg">
                <h1 className="bg-gray-200 text-center font-semibold">General</h1>
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
                <div className="border solid border-gray-200 rounded-lg">
                  <h1 className="bg-gray-200 text-center font-semibold">Clima</h1>
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
              <div className="border solid border-gray-200 rounded-lg">
                <h1 className="bg-gray-200 text-center font-semibold">Operación</h1>
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
