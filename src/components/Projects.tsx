'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const projects = [
    {
      title: 'SmartSales Cloud-Based Restaurant Management System 🍽️',
      description: 'A cloud-based point of sales system for restaurants and bars (F&B) built with Ruby on Rails and MySQL. Features include business reports, e-menu, inventory management, CRM, cloud access with database synchronization, and promotion management.',
      tech: ['Ruby on Rails', 'MySQL', 'Redis', 'REST APIs', 'JavaScript'],
      links: {
        github: '#',
        live: '#',
      },
      color: 'from-purple-500/20 to-blue-500/20',
    },
    {
      title: 'DoeMal F&B Mobile & Web App 📱',
      description: 'A F&B lifestyle mobile app for finding the best places nearby. Built with Ruby on Rails backend, React frontend, and PostgreSQL database. Integrated with payment gateways and Google Maps APIs.',
      tech: ['Ruby on Rails', 'React', 'PostgreSQL', 'REST APIs', 'AWS'],
      links: {
        github: '#',
        live: '#',
      },
      color: 'from-emerald-500/20 to-cyan-500/20',
    },
    {
      title: 'SmartPay Membership Loyalty System 💳',
      description: 'A loyalty membership system developed with Ruby on Rails and PostgreSQL where members can get rewards, rebates, and redeem points. Includes comprehensive member management and reward tracking.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'JavaScript'],
      links: {
        github: '#',
        live: '#',
      },
      color: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      title: 'Food Court Management System 🏪',
      description: 'A system that handles shops individually while generating consolidated business reports. Supports cashless payment via NFC technology for customer top-ups and payments using NFC cards.',
      tech: ['Ruby on Rails', 'MySQL', 'JavaScript', 'REST APIs', 'Redis'],
      links: {
        github: '#',
        live: '#',
      },
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'License Provisional Service 🔑',
      description: 'A web application for generating and managing POS system licenses. Features include store management, license key generation, expiry checking APIs, issue tracking, and invoice management.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'REST APIs', 'Sidekiq', 'Redis'],
      links: {
        github: '#',
        live: '#',
      },
      color: 'from-teal-500/20 to-cyan-500/20',
    },
    {
      title: 'Delivery Management System 🚚',
      description: 'Real-time tracking delivery management system for e-commerce and retailers. Features include real-time consignment tracking, waypoint creation, route management, and integration with third-party delivery services.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'REST APIs', 'AWS'],
      links: {
        github: '#',
        live: '#',
      },
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  return (
    <section id="projects" ref={ref} className="section-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="content-container"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 flex items-center">
          <span className="text-secondary mr-4">03.</span> Some Things I've Built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${project.color} border border-secondary/20 
                hover:border-secondary/30 backdrop-blur-sm transition-all duration-300 flex flex-col h-full`}
            >
              <div className="flex flex-col gap-4 flex-grow">
                <h3 className="text-xl font-bold text-textPrimary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-textSecondary text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="tech-tag text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.links.github}
                    whileHover={{ y: -2 }}
                    className="hover-lift p-2 rounded-full bg-primary/40 backdrop-blur-sm hover:bg-primary/60"
                  >
                    <CodeBracketIcon className="w-5 h-5 text-secondary" />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    whileHover={{ y: -2 }}
                    className="hover-lift p-2 rounded-full bg-primary/40 backdrop-blur-sm hover:bg-primary/60"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-secondary" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 