import InfoContainer from "@/components/InfoContainer/InfoContainer"

const getData = () => {
  return fetch(`https://wrk.acronex.com/api/challenge/machines/`, { cache: 'no-store' })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="p-10">
      <div className="grid grid-cols-3 gap-4">
        {data.map((data) => {
          return (
            <InfoContainer data={data} />
          )
        })}
        {/*         
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
        <InfoContainer /> 
        */}
      </div>
    </main>
  )
}
