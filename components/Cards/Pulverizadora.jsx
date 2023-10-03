import Link from 'next/link'

export default function Pulverizadora({ data }) {
    const { id, description, company, moving, indicadores } = data
    return (
        <Link href={`/machines/${id}`} className="bg-white p-4 rounded hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex gap-4 items-center">
                {moving ? <div className="status-moving-true"></div> : <div className="status-moving-true"></div>}
                <div className="flex-col">
                    <h1>({id}) {description}</h1>
                    <h2 className='font-semibold text-[var(--color-primary)]'>{company}</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 px-10 py-4">
                <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${indicadores.taponamiento < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.taponamiento >= 0.1 && indicadores.taponamiento < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.taponamiento >= 0.2 && indicadores.taponamiento < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.taponamiento >= 0.35 && indicadores.taponamiento < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.taponamiento >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Taponamiento</h1>
                    <h2 className="font-medium text-4xl">{indicadores.taponamiento != undefined ? Math.trunc(indicadores.taponamiento * 100) : 0}%</h2>
                </div>
                <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${indicadores.evaporacion < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.evaporacion >= 0.1 && indicadores.evaporacion < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.evaporacion >= 0.2 && indicadores.evaporacion < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.evaporacion >= 0.35 && indicadores.evaporacion < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.evaporacion >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Evaporación</h1>
                    <h2 className="font-medium text-4xl">{indicadores.evaporacion != undefined ? Math.trunc(indicadores.evaporacion * 100) : 0}%</h2>
                </div>
                <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${indicadores.deriva < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.deriva >= 0.1 && indicadores.deriva < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.deriva >= 0.2 && indicadores.deriva < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.deriva >= 0.35 && indicadores.deriva < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.deriva >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm whitespace-nowrap">pérdida p. viento</h1>
                    <h2 className="font-medium text-4xl">{indicadores.deriva != undefined ? Math.trunc(indicadores.deriva * 100) : 0}%</h2>
                </div>
                <div className={`flex-col text-center place-content-center items-center align-middle py-3  ${indicadores.calidad < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.calidad >= 0.1 && indicadores.calidad < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.calidad >= 0.2 && indicadores.calidad < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.calidad >= 0.35 && indicadores.calidad < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.calidad >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Calidad</h1>
                    <h2 className="font-medium text-4xl">{indicadores.calidad != undefined ? Math.trunc(indicadores.calidad * 100) : 0}%</h2>
                </div>

            </div>

        </Link>
    )
}