import Hero from '@/components/Hero'
import Purpose from '@/components/Purpose'
import Benefits from '@/components/Benefits'
import Navbar from '@/components/Navbar'
import Carrousel from '@/components/Carrousel'
import Testimonials from '@/components/Testimonials'
import Ending from '@/components/Ending'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Purpose />
      <Benefits />
      <Carrousel />
      <Testimonials />
      <Ending />
      <Contact />
      <Footer />
    </main>
  )
}
