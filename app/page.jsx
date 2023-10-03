import CardsContainer from "@/components/Cards/CardsContainer"

export default function Home() {

  return (
    <main className="p-10">
      <div className="grid grid-cols-3 gap-4">
        <CardsContainer />
      </div>
    </main>
  )
}
