'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGithub, 
  FaLinkedin 
} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FaGithub className="w-6 h-6" />,
      hoverColor: 'hover:text-[#6e5494]'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin className="w-6 h-6" />,
      hoverColor: 'hover:text-[#0077b5]'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <HiMail className="w-7 h-7" />,
      hoverColor: 'hover:text-secondary'
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-8">
          <span className="text-secondary">04.</span> What's Next?
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold text-textPrimary mb-8">Get In Touch</h3>
        <p className="text-textSecondary max-w-2xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <div className="flex items-center justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className={`text-textSecondary ${link.hoverColor} transition-colors duration-300`}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block primary-button"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  )
} 