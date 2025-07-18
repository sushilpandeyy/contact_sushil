// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToExperience = () => {
    const experienceSection = document.querySelector('#experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black pt-16">
      <div className="container px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Large Avatar/Logo - matching reference size */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-16 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center shadow-2xl"
          >
            <span className="text-4xl text-white">✈</span>
          </motion.div>

          {/* Main Title - larger and more prominent */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl font-semibold text-white mb-8 tracking-tight leading-none"
          >
            Your Name
          </motion.h1>

          {/* Subtitle - matching reference style */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-400 mb-8 font-medium"
          >
            engineer • developer
          </motion.p>

          {/* Description - matching reference layout and colors */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              ✨ I love building{' '}
              <span className="text-blue-400 font-medium">products</span> that solve real problems. crafting{' '}
              <span className="text-blue-400 font-medium">websites</span> and{' '}
              <span className="text-blue-400 font-medium">apps</span> for the
            </p>
            <p className="mt-1">
              past year, with a focus on <span className="text-blue-400 font-medium">user experience</span> and clean code.
            </p>
          </motion.div>

          {/* Tags - matching reference styling */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <span className="px-5 py-2.5 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
              full-stack
            </span>
            <span className="px-5 py-2.5 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
              ai
            </span>
            <span className="px-5 py-2.5 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
              ui/ux
            </span>
          </motion.div>

          {/* CTA Buttons - matching reference design */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
            >
              View CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              book a meet
            </motion.button>
          </motion.div>

          {/* Scroll indicator - positioned like reference */}
          <motion.button
            onClick={scrollToExperience}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} className="text-gray-400" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  )
}