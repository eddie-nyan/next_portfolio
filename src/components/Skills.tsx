'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CommandLineIcon,
  CubeIcon,
  ServerIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const skillCategories = [
    {
      title: 'Programming & Frameworks',
      icon: <CommandLineIcon className="w-6 h-6" />,
      skills: [
        'Ruby on Rails',
        'JavaScript',
        'React.js',
        'PHP',
        'HTML5/CSS3',
        'TailwindCSS'
      ]
    },
    {
      title: 'Backend & Database',
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        'RESTful APIs',
        'MySQL',
        'PostgreSQL',
        'Redis',
        'Sidekiq'
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <CloudIcon className="w-6 h-6" />,
      skills: [
        'AWS',
        'Linux Administration',
        'Nginx',
        'Git/GitHub/GitLab',
        'Ubuntu Server'
      ]
    },
    {
      title: 'Development Tools',
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      skills: [
        'VS Code',
        'Trello',
        'Asana',
        'Lucidchart',
        'Microsoft Visio'
      ]
    },
    {
      title: 'Professional Skills',
      icon: <DocumentTextIcon className="w-6 h-6" />,
      skills: [
        'Agile/Scrum',
        'SDLC',
        'System Design',
        'Problem Solving',
        'Technical Documentation'
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="section-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 flex items-center">
          <span className="text-secondary mr-4">02.</span> Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-primary/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800
                hover:border-secondary/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 
                transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-secondary">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-textPrimary">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-textSecondary">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 