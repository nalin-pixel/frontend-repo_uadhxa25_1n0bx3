import { useEffect, useMemo, useState } from 'react'

const categories = ['All', 'Landscape', 'Real Estate', 'Events', 'Cinematic Shots', 'Corporate']

export default function Portfolio() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState('All')

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const url = `${base}/portfolio${active !== 'All' ? `?category=${encodeURIComponent(active)}` : ''}`
      try {
        const res = await fetch(url)
        const data = await res.json()
        setItems(data)
      } catch {
        setItems([])
      }
    }
    load()
  }, [active])

  return (
    <section id="portfolio" className="bg-[#0A0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Portofoliu</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-3 py-1.5 rounded-full text-sm transition-colors ${active === cat ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <MediaCard key={idx} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MediaCard({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10">
      <button onClick={() => setOpen(true)} className="block w-full h-full">
        {item.media_type === 'video' ? (
          <video src={item.url} muted loop playsInline className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <img src={item.url} alt={item.title || ''} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        )}
      </button>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 p-6 flex items-center justify-center" onClick={() => setOpen(false)}>
          <div className="max-w-5xl w-full">
            {item.media_type === 'video' ? (
              <video src={item.url} controls autoPlay className="w-full max-h-[80vh] object-contain rounded-lg" />
            ) : (
              <img src={item.url} alt={item.title || ''} className="w-full max-h-[80vh] object-contain rounded-lg" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
