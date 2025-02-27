'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import TechIcon from './TechIcon'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const technologies = [
    { name: 'Ruby on Rails', category: 'backend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Redis', category: 'database' },
    { name: 'Sidekiq', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    { name: 'Git', category: 'devops' },
    { name: 'Nginx', category: 'devops' },
    { name: 'TailwindCSS', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
  ]

  return (
    <section id="about" ref={ref} className="section-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-8 flex items-center">
          <span className="text-secondary mr-4">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-textSecondary">
            <p className="mb-4">
              Hello! I'm a Ruby on Rails Developer with over 6 years of expertise in designing, developing, 
              and maintaining scalable web applications. My journey in web development started back in 2015 
              when I began my career as a System Support Engineer, which gave me a strong foundation in 
              understanding both hardware and software systems.
            </p>
            <p className="mb-4">
              Fast-forward to today, I've had the privilege of working at code2LAB for 6 years as a Software Engineer, 
              where I've built numerous complex IT systems and tech products across diverse industries. My focus has been 
              on developing robust solutions using Ruby on Rails, ensuring high performance, quality, and scalability.
            </p>
            <p className="mb-4">
              I've worked on various significant projects, including cloud-based restaurant management systems, 
              F&B mobile & web applications, and loyalty membership systems. I'm particularly passionate about 
              building RESTful APIs, implementing payment gateways, and creating efficient database solutions.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-8">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center list-none group"
                >
                  <span className="text-secondary mr-2">▹</span>
                  <div className="flex items-center gap-2 group-hover:text-secondary transition-colors">
                    <TechIcon name={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                </motion.li>
              ))}
            </div>
          </div>
          
          <div className="relative group flex items-center justify-center">
            <motion.div 
              className="absolute w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-secondary/20 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden z-10
              [box-shadow:0_0_15px_rgba(100,255,218,0.3)] 
              hover:[box-shadow:0_0_30px_rgba(100,255,218,0.5)]
              transition-all duration-500
              hover:scale-105">
              <div className="absolute inset-0 border-2 border-secondary/50 rounded-full z-20 
                group-hover:border-secondary/70 transition-colors duration-500" />
              <motion.div
                className="absolute inset-0 bg-secondary/30 mix-blend-overlay z-10 rounded-full"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Profile Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 