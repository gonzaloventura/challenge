import InfoContainer from "@/components/InfoContainer/InfoContainer"

export default function Home() {
  return (
    <main className="p-10">
      <div className="grid grid-cols-3 gap-4">
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
        <InfoContainer />
      </div>
    </main>
  )
}
