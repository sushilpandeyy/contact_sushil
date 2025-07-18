'use client';

import React from 'react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2023 - Present',
    description: 'Leading development of cloud-native applications and microservices architecture.',
    type: 'work',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    period: '2021 - 2023',
    description: 'Developed scalable web applications and implemented CI/CD pipelines.',
    type: 'work',
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'StartupHub',
    period: '2020 - 2021',
    description: 'Built responsive web interfaces and optimized application performance.',
    type: 'work',
  },
  {
    id: '4',
    title: 'Bachelor of Computer Science',
    company: 'State University',
    period: '2016 - 2020',
    description: 'Specialized in software engineering and database systems.',
    type: 'education',
  },
];

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.id} className="border-b border-neutral-200 dark:border-neutral-700 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {exp.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {exp.company}
              </p>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 md:mt-0">
              {exp.period}
            </span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm md:text-base">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}
