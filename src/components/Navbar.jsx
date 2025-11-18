import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Platform', href: '#platform' },
    { name: 'Trust Kernel', href: '#trust-kernel' },
    { name: 'Agentic Swarms', href: '#agentic-swarms' },
    { name: 'Governance', href: '#governance' },
    { name: 'Resources', href: '#resources' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 group">
          <div className="relative w-6 h-6">
            <span className="absolute inset-0 rounded-sm bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-80 group-hover:opacity-100 transition" />
            <span className="absolute inset-0 rounded-sm bg-slate-900 mix-blend-multiply" />
          </div>
          <span className="text-white font-semibold tracking-tight">Perceive Now</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-slate-300 hover:text-white transition text-sm">
              {l.name}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-medium px-4 py-2 text-sm transition">
            Request demo
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-slate-200">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/70 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="block text-slate-300 hover:text-white transition text-sm">
                {l.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-medium px-4 py-2 text-sm transition">
              Request demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
