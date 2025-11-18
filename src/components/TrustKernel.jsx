import { motion } from 'framer-motion'

function Layer({ index, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true, margin: '-20%' }}
      className="group relative rounded-lg border border-white/10 bg-slate-900/60 p-4 hover:border-emerald-400/30 transition"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/5 group-hover:to-cyan-400/5 transition" />
      <div className="relative">
        <div className="text-[10px] uppercase tracking-wider text-emerald-300/80">Layer {index + 1}</div>
        <div className="mt-1 text-sm font-medium text-white">{title}</div>
        <p className="mt-1 text-xs text-slate-300/80">{desc}</p>
      </div>
    </motion.div>
  )
}

function TrustKernel() {
  const layers = [
    'Identity & Access','Policy Engine','Content Filtering','Prompt Sanitization','Data Entitlement','PII Redaction','Secure Context','Model Selection','Tool Permissions','Sandboxing','Rate Governance','Verification','Alignment Tests','Counterfactuals','Adversarial Tests','Human Oversight','Escalation Paths','Explainability','Provenance','Chain-of-Custody','Watermarking','Tamper Detection','Audit Trails','Retention Policy','Key Management','Secrets Vault','Tenant Isolation','Compliance Mapping','Risk Scoring','Continuous Monitoring'
  ]

  return (
    <section id="trust-kernel" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">30‑Layer Trust Kernel</h2>
          <p className="mt-4 text-slate-300/90">A layered security and governance fabric that traces every decision, enforces policy, and proves outcomes. Built for regulated, data‑sensitive environments.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {layers.map((t, i) => (
            <Layer key={t} index={i} title={t} desc="" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustKernel
