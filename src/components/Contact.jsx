import React from 'react'

export default function Contact() {
  const [status, setStatus] = React.useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    const base = import.meta.env.VITE_BACKEND_URL || ''
    try {
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('Mesaj trimis cu succes!')
        e.currentTarget.reset()
      } else {
        setStatus('A apărut o eroare. Încercați din nou.')
      }
    } catch (e) {
      setStatus('A apărut o eroare. Încercați din nou.')
    }
  }

  return (
    <section id="contact" className="bg-[#0A0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Nume" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <input name="email" required type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <input name="phone" placeholder="Telefon" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <textarea name="message" required rows="5" placeholder="Mesaj" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button className="inline-flex items-center px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">Cere o ofertă personalizată</button>
              {status && <p className="text-white/80">{status}</p>}
            </form>
          </div>
          <div>
            <div className="h-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10694.541258116943!2d26.1025389!3d44.4267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
