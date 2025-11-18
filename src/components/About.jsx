export default function About({ paragraphs = [] }) {
  return (
    <section id="about" className="relative py-20 bg-[#0A0F19]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Despre VDRONE</h2>
          <div className="space-y-4 text-white/80">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
