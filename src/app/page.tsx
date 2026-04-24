import Hero from "~/components/Hero"
import IntroSection from "~/components/IntroSection"
import BForTheBest from "~/components/BForTheBest"
import OrderSection from "~/components/OrderSection"

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <IntroSection />
      <BForTheBest />
      <OrderSection />
    </main>
  )
}