// components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Rocket, Users } from 'lucide-react'

const skills = [
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack development with modern frameworks and technologies',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python'],
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating intuitive and beautiful user experiences',
    technologies: ['Figma', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for speed and scalability',
    technologies: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and stakeholders',
    technologies: ['Git', 'Agile', 'Code Review', 'Documentation'],
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-body mb-8">
              I'm a passionate full-stack developer with over 3 years of experience building web applications 
              that solve real-world problems. I love working with modern technologies and creating clean, 
              efficient code that delivers exceptional user experiences.
            </p>
            <p className="text-body">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community. I believe in continuous 
              learning and staying up-to-date with the latest trends in web development.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                  <skill.icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}