import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import GalleryVideo from './components/GalleryVideo'
import GalleryPhoto from './components/GalleryPhoto'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [content, setContent] = React.useState(null)

  React.useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      try {
        const res = await fetch(`${base}/content`)
        const data = await res.json()
        setContent(data)
      } catch {
        setContent(null)
      }
    }
    load()
  }, [])

  return (
    <div className="bg-[#0A0F19] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero title={content?.hero_title} ctaLabel={content?.hero_cta} />
        <About paragraphs={content?.about_paragraphs || [
          'Filmări aeriene spectaculoase la rezoluții 4K/8K.',
          'Fotografie profesională pentru imobiliare, evenimente și branduri.',
          'Inspecții industriale, cartografiere și producție corporate.'
        ]} />
        <Portfolio />
        <Services />
        <GalleryVideo />
        <GalleryPhoto />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
