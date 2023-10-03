import Link from 'next/link'

export default function Cosechadora({ data }) {
    const { id, description, company, moving, indicadores } = data
    return (
        <Link href={`/machines/${id}`} className="bg-white p-4 rounded hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex gap-4 items-center">
                {moving ? <div className="status-moving-true"></div> : <div className="status-moving-false"></div>}
                <div className="flex-col">
                    <h1>({id}) {description}</h1>
                    <h2 className='font-semibold text-[var(--color-primary)]'>{company}</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 px-10 py-4">
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-gray-300 text-[var(--text-dark)]">
                    <h1 className="text-sm">Tipo Cultivo</h1>
                    <h2 className="font-medium text-4xl">{indicadores.cultivo}</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-gray-300 text-[var(--text-dark)]">
                    <h1 className="text-sm">Humedad Grano</h1>
                    <h2 className="font-medium text-4xl">{indicadores.humedad_grano != undefined ? (indicadores.humedad_grano) : 0}%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-[var(--rinde-humedo)] text-white">
                    <h1 className="text-sm whitespace-nowrap">Rinde Húmedo</h1>
                    <h2 className="font-medium text-4xl flex flex-col">{indicadores.rinde_humedo}<span className='text-sm'>kg/ha</span></h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-[var(--rinde-seco)] text-[var(--text-dark)]">
                    <h1 className="text-sm">Rinde Seco</h1>
                    <h2 className="font-medium text-4xl flex flex-col">{indicadores.rinde_seco}<span className='text-sm'>kg/ha</span></h2>
                </div>
            </div>

        </Link>
    )
}