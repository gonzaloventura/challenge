import Link from 'next/link'
import Indicadores from './Indicadores'

export default function Pulverizadora({ data }) {
    const { id, description, company, moving } = data
    return (
        <Link href={`/machines/${id}`} className="bg-white p-4 rounded hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex gap-4 items-center">
                {moving ? <div className="status-moving-true"></div> : <div className="status-moving-true"></div>}
                <div className="flex-col">
                    <h1>({id}) {description}</h1>
                    <h2 className='font-semibold text-[var(--color-primary)]'>{company}</h2>
                </div>
            </div>
            <Indicadores tipo={"pulverizadora"} datos={data} />
        </Link>
    )
}