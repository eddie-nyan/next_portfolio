'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CommandLineIcon,
  CubeIcon,
  ServerIcon,
  CloudIcon,
  PaintBrushIcon 
} from '@heroicons/react/24/outline'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const skills = [
    { 
      name: 'Frontend Development', 
      level: 90,
      icon: <CubeIcon className="w-6 h-6" />,
      emoji: '💻'
    },
    { 
      name: 'Backend Development', 
      level: 85,
      icon: <ServerIcon className="w-6 h-6" />,
      emoji: '⚡'
    },
    { 
      name: 'Database Management', 
      level: 80,
      icon: <CommandLineIcon className="w-6 h-6" />,
      emoji: '🗄️'
    },
    { 
      name: 'DevOps', 
      level: 75,
      icon: <CloudIcon className="w-6 h-6" />,
      emoji: '☁️'
    },
    { 
      name: 'UI/UX Design', 
      level: 70,
      icon: <PaintBrushIcon className="w-6 h-6" />,
      emoji: '🎨'
    },
  ]

  return (
    <section id="skills" ref={ref} className="section-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-8 flex items-center">
          <span className="text-secondary mr-4">02.</span> Skills
        </h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-textSecondary">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-secondary"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 