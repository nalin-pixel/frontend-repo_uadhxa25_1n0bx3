export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-cyan-400" />
          <span className="text-white font-semibold">VDRONE</span>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <p className="text-white/60 text-sm">© {year} VDRONE. Toate drepturile rezervate.</p>
      </div>
    </footer>
  )
}
