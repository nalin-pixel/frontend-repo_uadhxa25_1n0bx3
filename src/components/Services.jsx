import { Camera, Video, Shield, Briefcase, Map, Heart, ArrowRight } from 'lucide-react'

const icons = { Camera, Video, Shield, Briefcase, Map, Heart }

const fallback = [
  { title: 'Filmări aeriene 4K/8K', description: 'Cadre fluide, cinematice, la calitate maximă.', icon: 'Video' },
  { title: 'Fotografie aeriană profesională', description: 'Compoziții curate, perspective unice.', icon: 'Camera' },
  { title: 'Inspecții industriale', description: 'Evaluări rapide și sigure pentru zone greu accesibile.', icon: 'Shield' },
  { title: 'Filmări corporate & reclame', description: 'Spoturi dinamice pentru campanii memorabile.', icon: 'Briefcase' },
  { title: 'Cartografiere / mapping', description: 'Hărți precise și modele 3D.', icon: 'Map' },
  { title: 'Evenimente & nunți', description: 'Momente unice surprinse din aer.', icon: 'Heart' },
]

export default function Services() {
  const [items, setItems] = React.useState(fallback)

  React.useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      try {
        const res = await fetch(`${base}/services`)
        const data = await res.json()
        if (Array.isArray(data) && data.length) setItems(data)
      } catch {}
    }
    load()
  }, [])

  return (
    <section id="services" className="bg-[#0A0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Servicii</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <ServiceCard key={idx} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ item }) {
  const Icon = icons[item.icon] || Camera
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center mb-4">
        <Icon />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
      <button className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
        Detalii <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
