import Spline from '@splinetool/react-spline'

export default function Hero({ title = 'VDRONE – Explore the world from above', ctaLabel = 'Explorează Portofoliul' }) {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A0F19]/30 to-[#0A0F19] pointer-events-none" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow">{title}</h1>
            <div className="mt-8">
              <a href="#portfolio" className="inline-flex items-center px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
