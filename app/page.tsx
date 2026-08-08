import Hero from '@/components/Hero'
import JourneySection from '@/components/journey/JourneySection'
import Stats from '@/components/Stats'
import Media from '@/components/Media'
import Recognition from '@/components/Recognition'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <Hero />
      <JourneySection />
      <Stats />
      <Media />
      <Recognition />
      <Contact />
    </main>
  )
}
