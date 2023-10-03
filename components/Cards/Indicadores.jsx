export default function Indicadores({ tipo, datos }) {
    const { indicadores } = datos
    if (tipo === "cosechadora") {
        return (
            <div className="grid grid-cols-2 gap-2 px-2 md:px-10 py-4">
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
        )
    }
    if (tipo === "pulverizadora") {
        return (
            <div className="grid grid-cols-2 gap-2 px-2 md:px-10 py-4">
                <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${indicadores.taponamiento < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.taponamiento >= 0.1 && indicadores.taponamiento < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.taponamiento >= 0.2 && indicadores.taponamiento < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.taponamiento >= 0.35 && indicadores.taponamiento < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.taponamiento >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Taponamiento</h1>
                    <h2 className="font-medium text-4xl">{indicadores.taponamiento != undefined ? (indicadores.taponamiento * 100).toFixed(1) : 0}%</h2>
                </div>
                <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${indicadores.evaporacion < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.evaporacion >= 0.1 && indicadores.evaporacion < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.evaporacion >= 0.2 && indicadores.evaporacion < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.evaporacion >= 0.35 && indicadores.evaporacion < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.evaporacion >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Evaporación</h1>
                    <h2 className="font-medium text-4xl">{indicadores.evaporacion != undefined ? (indicadores.evaporacion * 100).toFixed(1) : 0}%</h2>
                </div>
                <div className={`flex-col text-center place-content-center items-center align-middle py-3 ${indicadores.deriva < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${((indicadores.deriva) >= 0.1 && (indicadores.deriva) < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${((indicadores.deriva) >= 0.2 && (indicadores.deriva) < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${((indicadores.deriva) >= 0.35 && (indicadores.deriva) < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${((indicadores.deriva) >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>                    <h1 className="text-sm whitespace-nowrap">pérdida p. viento</h1>
                    <h2 className="font-medium text-4xl">{indicadores.deriva != undefined ? (indicadores.deriva*100).toFixed(1) : 0}%</h2>
                </div>
                <div className={`flex-col text-center place-content-center items-center align-middle py-3  ${indicadores.calidad < 0.1 && 'bg-[var(--color-indicador-1)] text-white'} ${(indicadores.calidad >= 0.1 && indicadores.calidad < 0.2) && 'bg-[var(--color-indicador-2)] text-[var(--text-dark)'} ${(indicadores.calidad >= 0.2 && indicadores.calidad < 0.35) && 'bg-[var(--color-indicador-3)] text-white'} ${(indicadores.calidad >= 0.35 && indicadores.calidad < 0.5) && 'bg-[var(--color-indicador-4)] text-white'} ${(indicadores.calidad >= 0.5) && 'bg-[var(--color-indicador-5)] text-white'}`}>
                    <h1 className="text-sm">Calidad</h1>
                    <h2 className="font-medium text-4xl">{indicadores.calidad != undefined ? Math.trunc((1 - indicadores.calidad) * 100) : 0}%</h2>
                </div>
            </div>
        )
    }
}