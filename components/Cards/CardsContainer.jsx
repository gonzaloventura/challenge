import Cards from "@/components/Cards/Cards"

const getAllData = () => {
    return fetch(process.env.API_URL, { cache: 'no-store' })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default async function CardsContainer() {
    const data = await getAllData()

    return (
        <>
            {data.map((data) => {
                return (
                    <Cards key={data.id} data={data} />
                )
            })}
        </>
    )
}