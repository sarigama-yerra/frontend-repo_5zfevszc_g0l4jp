import Hero from './components/Hero'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-lg">T-Boost</div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Product</a>
            <a href="#" className="hover:text-gray-900">Science</a>
            <a href="#" className="hover:text-gray-900">FAQ</a>
          </nav>
          <a href="#checkout" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Buy now</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="checkout">
          <Pricing />
        </div>
      </main>

      <footer className="border-t border-black/5 py-8 mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} T-Boost Labs</footer>
    </div>
  )
}

export default App
