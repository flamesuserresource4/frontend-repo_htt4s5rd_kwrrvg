import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -60])
  const y2 = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950" aria-label="Perceive Now">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_50%_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_55%,rgba(0,0,0,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div style={{ y: y1, opacity }} className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[0.95]">
            The enterprise AI operating system
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl">
            Perceive Now orchestrates agents, models, and data with a 30‑Layer Trust Kernel for end‑to‑end safety, governance, and precision—at enterprise scale.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#platform" className="inline-flex items-center rounded-md bg-emerald-400/90 hover:bg-emerald-300 text-slate-900 font-medium px-4 py-2 text-sm transition">
              Explore platform
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/20 hover:border-white/40 text-white font-medium px-4 py-2 text-sm transition">
              Request a demo
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y: y2, opacity }} className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px rounded-lg overflow-hidden bg-white/5">
          {["Traceability","Policy Guardrails","Verified Memory","Human-in-the-Loop","Audit Trails","Isolation"].map((k) => (
            <div key={k} className="bg-slate-900/60 backdrop-blur px-3 py-3 text-center">
              <span className="text-xs text-slate-300">{k}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
