import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Acasă' },
  { href: '#about', label: 'Despre' },
  { href: '#portfolio', label: 'Portofoliu' },
  { href: '#services', label: 'Servicii' },
  { href: '#videos', label: 'Video' },
  { href: '#photos', label: 'Foto' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-[#0A0F19]/80 backdrop-blur border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white text-lg font-bold tracking-wide">VDRONE</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#portfolio" className="inline-flex items-center px-4 py-2 rounded-md bg-cyan-400/90 text-black font-medium hover:bg-cyan-300 transition-colors">Explorează Portofoliul</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Meniu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0A0F19]/95 border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#portfolio" onClick={() => setOpen(false)} className="inline-flex items-center px-4 py-2 rounded-md bg-cyan-400/90 text-black font-medium">Explorează Portofoliul</a>
          </div>
        </div>
      )}
    </header>
  )
}
