import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlatformGrid from './components/PlatformGrid'
import TrustKernel from './components/TrustKernel'
import AgenticSwarms from './components/AgenticSwarms'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <PlatformGrid />
        <TrustKernel />
        <AgenticSwarms />
      </main>
      <Footer />
    </div>
  )
}

export default App
