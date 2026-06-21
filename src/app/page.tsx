import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Showreel from '@/components/sections/Showreel'
import Training from '@/components/sections/Training'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <Portfolio />
      <Showreel />
      <Training />
      <Contact />
    </main>
  )
}
