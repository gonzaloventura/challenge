export default function InfoContainer() {
    return (
        <div className="bg-white p-4 rounded hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex gap-4 items-center">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="flex-col">
                    <h1>(1243) Pulverizadora - Demo Salta</h1>
                    <h2>PLA S.A.</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 px-10 py-4">
                <div className="flex-col text-center place-content-center items-center align-middle px-6 py-3 bg-green-500 text-white">
                    <h1>Taponamiento</h1>
                    <h2 className="font-medium text-4xl">4%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle px-6 py-3 bg-green-600 text-white">
                    <h1>Taponamiento</h1>
                    <h2 className="font-medium text-4xl">4%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle px-6 py-3 bg-green-800 text-white">
                    <h1>Taponamiento</h1>
                    <h2 className="font-medium text-4xl">4%</h2>
                </div>
                <div className="flex-col text-center place-content-center items-center align-middle px-6 py-3 bg-green-400 text-white">
                    <h1>Taponamiento</h1>
                    <h2 className="font-medium text-4xl">4%</h2>
                </div>

            </div>

        </div>
    )
}