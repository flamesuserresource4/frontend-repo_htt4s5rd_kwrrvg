import { motion } from 'framer-motion'

function PlatformGrid() {
  const items = [
    ['Observability', 'Deep traces across prompts, tools, and models'],
    ['Governance', 'Policy controls, approvals, and auditability'],
    ['Evaluation', 'Continuous tests, red‑team scenarios, metrics'],
    ['Knowledge', 'Verified memory and grounded retrieval'],
    ['Orchestration', 'Multi‑agent flows with constraints'],
    ['Security', 'Tenant isolation, secrets, keys, and sandboxes'],
  ]

  return (
    <section id="platform" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">Platform</h2>
          <p className="mt-4 text-slate-300/90">A minimal, grid‑first interface designed for clarity under load. Every module is instrumented for provenance, policy, and proof.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-slate-900/60 p-5"
            >
              <div className="text-sm font-medium text-white">{t}</div>
              <div className="mt-1 text-sm text-slate-300/90">{d}</div>
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 hover:from-emerald-400/5 hover:to-cyan-400/5 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformGrid
