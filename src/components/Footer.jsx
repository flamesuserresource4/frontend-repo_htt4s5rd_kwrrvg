function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Perceive Now. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Security</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
