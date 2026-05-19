import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Facilities from '@/components/Facilities'
import Events from '@/components/Events'
import Membership from '@/components/Membership'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <Features />
      <Facilities />
      <Events />
      <Membership />
      <Footer />
    </main>
  )
}
