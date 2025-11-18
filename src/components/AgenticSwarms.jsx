import { motion } from 'framer-motion'

function AgenticSwarms() {
  const nodes = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    x: Math.sin(i * 0.7) * 38 + 50,
    y: Math.cos(i * 0.9) * 22 + 50,
  }))

  return (
    <section id="agentic-swarms" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">Agentic Swarms</h2>
          <p className="mt-4 text-slate-300/90">Composable networks of specialized agents that plan, verify, and collaborate. Each node is policy‑aware and instrumented for full traceability.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative aspect-[4/3] rounded-xl border border-white/10 bg-slate-900/60 overflow-hidden">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              {/* grid */}
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />

              {nodes.map((n) => (
                <motion.circle key={n.id} cx={n.x} cy={n.y} r="2.2" fill="#34d399" initial={{ opacity: 0 }} whileInView={{ opacity: 0.9 }} transition={{ delay: n.id * 0.03 }} viewport={{ once: true }} />
              ))}

              {nodes.map((a) => nodes.filter((b) => b.id > a.id && Math.abs(a.id - b.id) % 5 === 0).map((b) => (
                <motion.line key={`${a.id}-${b.id}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(52,211,153,0.5)" strokeWidth="0.4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: a.id * 0.02 }} viewport={{ once: true }} />
              )))}
            </svg>
          </div>

          <ul className="space-y-3 text-sm text-slate-300/90">
            {[
              ['Planner', 'Decomposes goals into verifiable steps'],
              ['Retriever', 'Assembles entitled context'],
              ['Reasoner', 'Critiques, tests, and verifies outputs'],
              ['Executor', 'Safely performs actions with guardrails'],
              ['Observer', 'Captures provenance and signals'],
              ['Supervisor', 'Escalates to human when policy requires'],
            ].map(([t, d]) => (
              <li key={t} className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">{t}</span>
                <span className="text-slate-200">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AgenticSwarms
