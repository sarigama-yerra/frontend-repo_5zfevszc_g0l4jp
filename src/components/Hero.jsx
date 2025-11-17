import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10" />
      <div className="relative max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Testosterone Booster
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Clean, potent formula to support strength, vitality, and performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="text-3xl font-bold text-gray-900">€24.99</div>
              <div className="text-sm text-gray-500">per bottle</div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-xl ring-1 ring-black/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-7xl">💪</div>
                <div className="mt-3 font-semibold text-gray-800">Premium Supplements</div>
                <div className="text-sm text-gray-500">Fast EU shipping</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
