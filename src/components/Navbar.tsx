'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Bars3Icon, 
  XMarkIcon,
  UserCircleIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { handleResumeRequest } from '@/utils/email'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth'
    })
    setIsMenuOpen(false)
  }

  const menuItems = [
    { name: 'About', icon: <UserCircleIcon className="w-5 h-5" /> },
    { name: 'Skills', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { name: 'Projects', icon: <RocketLaunchIcon className="w-5 h-5" /> },
    { name: 'Contact', icon: <EnvelopeIcon className="w-5 h-5" /> },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.a
          href="#home"
          onClick={handleScroll}
          whileHover={{ scale: 1.05 }}
          className="text-secondary font-bold text-xl sm:text-2xl flex items-center gap-2 z-50"
        >
          <span className="text-2xl">👨‍💻</span>
          Portfolio
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              onClick={handleScroll}
              whileHover={{ y: -2 }}
              className="text-textSecondary hover:text-secondary transition-colors flex items-center gap-2"
            >
              <span className="text-secondary text-sm">0{index + 1}.</span>
              {item.icon}
              {item.name}
            </motion.a>
          ))}
          <motion.button
            onClick={handleResumeRequest}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nav-button flex items-center gap-2"
          >
            <DocumentTextIcon className="w-5 h-5" />
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="md:hidden text-secondary p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? 'auto' : 'none',
          }}
          className="fixed inset-0 bg-primary/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <motion.div
          ref={menuRef}
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ type: 'tween' }}
          className="fixed top-0 right-0 h-screen w-2/3 bg-primary/95 backdrop-blur-lg md:hidden
            flex flex-col items-center justify-center shadow-xl"
        >
          <div className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={handleScroll}
                whileHover={{ x: 10 }}
                className="text-textSecondary hover:text-secondary transition-colors flex items-center gap-3
                  text-lg sm:text-xl font-medium"
              >
                <span className="text-secondary text-base sm:text-lg">0{index + 1}.</span>
                {item.icon}
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={handleResumeRequest}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nav-button flex items-center gap-2 mt-4 text-lg sm:text-xl"
            >
              <DocumentTextIcon className="w-6 h-6" />
              Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 