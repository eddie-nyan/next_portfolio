'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  ArrowDownIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="h-screen flex items-center justify-center px-8 pb-12 relative">
      {/* Background gradient circles */}
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl z-10"
      >
        <div className="flex items-center gap-2 text-secondary mb-4 font-mono">
          <SparklesIcon className="w-5 h-5" />
          <p>Hi, my name is</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-textPrimary">Nyan Lin Htut</span>
          <span className="text-2xl ml-2">✨</span>
          <br />
        </h1>
        <p className="text-2xl md:text-6xl font-bold mb-4">
          <span className="text-textSecondary">
            I build things for the web 🚀
            <span className="ml-2"></span>
          </span>
        </p>
        <p className="text-textSecondary max-w-2xl mb-8 text-lg">
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="primary-button flex items-center gap-2"
        >
          <ArrowDownIcon className="w-5 h-5" />
          Check out my work!
        </motion.button>
      </motion.div>

      {/* Updated scroll indicator with conditional rendering */}
      {!isScrolled && (
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDownIcon className="w-6 h-6 text-secondary" />
        </motion.div>
      )}
    </section>
  )
} 