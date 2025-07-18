// components/Experience.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'
import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    organization: 'Tech Innovators Inc.',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    type: 'work',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    organization: 'Digital Solutions Co.',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple client projects, focusing on performance and user experience.',
    type: 'work',
  },
  {
    id: '3',
    title: 'Frontend Developer Intern',
    organization: 'StartupXYZ',
    period: '2020 - 2021',
    description: 'Contributed to frontend development using React and worked on improving application performance.',
    type: 'work',
  },
  {
    id: '4',
    title: 'Bachelor of Computer Science',
    organization: 'University of Technology',
    period: '2017 - 2021',
    description: 'Graduated with honors, specializing in software engineering and web development.',
    type: 'education',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const workExperiences = experiences.filter(exp => exp.type === 'work')
  const educationExperiences = experiences.filter(exp => exp.type === 'education')

  const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="card p-6 ml-8">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 shrink-0">
            {experience.type === 'work' ? (
              <Briefcase size={20} className="text-primary-600 dark:text-primary-400" />
            ) : (
              <GraduationCap size={20} className="text-primary-600 dark:text-primary-400" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {experience.period}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
              {experience.organization}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
    </motion.div>
  )

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">Experience & Education</h2>
          <p className="text-body max-w-2xl mx-auto">
            My journey in technology and continuous learning experiences that have shaped my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-3 mb-8 flex items-center text-gray-900 dark:text-white"
            >
              <Briefcase size={28} className="mr-3 text-primary-600 dark:text-primary-400" />
              Work Experience
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600" />
              
              <div className="space-y-8">
                {workExperiences.map((experience, index) => (
                  <ExperienceCard key={experience.id} experience={experience} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-3 mb-8 flex items-center text-gray-900 dark:text-white"
            >
              <GraduationCap size={28} className="mr-3 text-primary-600 dark:text-primary-400" />
              Education
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600" />
              
              <div className="space-y-8">
                {educationExperiences.map((experience, index) => (
                  <ExperienceCard key={experience.id} experience={experience} index={index} />
                ))}
              </div>
            </div>

            {/* Skills & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
                  'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 
                  'Git', 'Tailwind CSS', 'REST APIs', 'GraphQL'
                ].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}