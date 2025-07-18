// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const navigation = [
  { id: 'projects', label: 'projects', href: '#projects' },
  { id: 'blogs', label: 'blogs', href: '#blogs' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - matching reference position and size */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-semibold text-white flex items-center"
          >
            <span className="text-xl">✈</span>
          </motion.a>

          {/* Navigation - centered like reference */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle - matching reference style */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}