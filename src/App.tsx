import { About } from '@/components/About'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Location } from '@/components/Location'
import { Services } from '@/components/Services'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Location />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
