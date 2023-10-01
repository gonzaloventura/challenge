import './styles.css'

export default function InfoContainer({ data }) {
    const { id, description, empresa, moving, indicadores } = data
    return (
        <div className="bg-white p-4 rounded hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex gap-4 items-center">
                {moving ? <div className="status-moving-moving"></div> : <div className="status-moving-stopped"></div>}
                <div className="flex-col">
                    <h1>({id}) {description}</h1>
                    <h2>{empresa}</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 px-10 py-4">
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-green-500 text-white">
                    <h1 className="text-sm">Taponamiento</h1>
                    <h2 className="font-medium text-4xl">{indicadores.taponamiento != undefined ? Math.trunc(indicadores.taponamiento * 100) : 0}%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-green-600 text-white">
                    <h1 className="text-sm">Evaporación</h1>
                    <h2 className="font-medium text-4xl">{indicadores.evaporacion != undefined ? Math.trunc(indicadores.evaporacion * 100) : 0}%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-green-800 text-white">
                    <h1 className="text-sm whitespace-nowrap">pérdida p. viento</h1>
                    <h2 className="font-medium text-4xl">{indicadores.deriva != undefined ? Math.trunc(indicadores.deriva * 100) : 0}%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle py-3 bg-green-400 text-white">
                    <h1 className="text-sm">Calidad</h1>
                    <h2 className="font-medium text-4xl">{indicadores.calidad != undefined ? Math.trunc(indicadores.calidad * 100) : 0}%</h2>
                </div>

            </div>

        </div>
    )
}