import React from 'react'

export default function GalleryPhoto() {
  const [photos, setPhotos] = React.useState([])

  React.useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      try {
        const res = await fetch(`${base}/photos`)
        const data = await res.json()
        setPhotos(data)
      } catch {
        setPhotos([])
      }
    }
    load()
  }, [])

  return (
    <section id="photos" className="bg-[#0A0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Galerie Foto</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]
                        [&>*:not(:first-child)]:mt-4">
          {photos.map((p, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl break-inside-avoid">
              <img src={p.url} alt={p.title || ''} className="w-full h-auto group-hover:scale-105 transition-transform duration-300" />
              {p.title && (
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-sm text-white bg-gradient-to-t from-black/60 to-transparent">
                  {p.title}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
