import React from 'react'

export default function GalleryVideo() {
  const [videos, setVideos] = React.useState([])

  React.useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      try {
        const res = await fetch(`${base}/videos`)
        const data = await res.json()
        setVideos(data)
      } catch {
        setVideos([])
      }
    }
    load()
  }, [])

  return (
    <section id="videos" className="bg-[#0A0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Galerie Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((v, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-video w-full">
                <video src={v.url} controls className="w-full h-full object-cover" poster={v.thumbnail || undefined}></video>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
