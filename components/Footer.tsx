// components/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[size:20px_20px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gradient">Your Name</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Full-stack developer passionate about creating beautiful, functional web applications 
                  that solve real-world problems. Always learning and growing.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <li key={item}>
                      <motion.button
                        onClick={() => {
                          const element = document.querySelector(`#${item.toLowerCase()}`)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-2">
                  <p className="text-gray-400">your.email@example.com</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center"
          >
            © 2024 Your Name. Made with 
            <Heart size={16} className="mx-1 text-red-500" /> 
            and lots of coffee
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mt-4 md:mt-0"
          >
            <span className="text-gray-400 text-sm">Built with Next.js & Tailwind CSS</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-colors duration-200 z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  )
}