'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, fadeInLeft, staggerContainer } from '../utils/animations';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Elvee Ltd',
      role: 'Software Engineer',
      period: 'May 2026 - Present',
      location: 'Remote',
      achievements: [
        'Drove backend architecture and technical direction by evaluating architectural trade-offs, designing scalable solutions, and establishing engineering standards that improved code quality, reduced technical debt, and accelerated feature development',
        'Simplified complex application workflows by redesigning shared components, consolidating duplicated business logic, and improving system modularity, enabling faster development, easier maintenance, and more consistent implementations across the codebase',
        'Owned production delivery from design to deployment by collaborating with product stakeholders to translate evolving business requirements into scalable technical solutions, proactively resolving production issues, and ensuring stable, reliable feature releases',
      ],
    },
    {
      company: 'Elaunch Solutions',
      role: 'Software Engineer',
      period: 'Jan 2023 - Apr 2026',
      location: 'Surat, Gujarat',
      achievements: [
        'Architected modular backend services using Node.js, NestJS, Express.js, and TypeScript, designing scalable REST APIs and reusable service layers that accelerated feature development while simplifying long-term system maintenance',
        'Improved backend performance by 2–3× through Redis caching, database query optimization, asynchronous job processing, and efficient indexing while scaling the platform with Redis Pub/Sub, PM2 Cluster Mode, and background workers, reducing average API response times by over 60% and supporting high concurrent traffic',
        'Built a centralized authentication and authorization framework using JWT, OAuth, RBAC, and API encryption/decryption, strengthening application security and providing consistent access control across multiple production applications',
        'Engineered real-time communication features using Socket.IO and WebSockets to power instant messaging, live notifications, and event-driven updates, delivering low-latency experiences for interactive applications',
        'Implemented automated CI/CD pipelines using Docker, Kubernetes, Jenkins, and GitHub Actions, eliminating manual deployment steps and improving deployment consistency across environments',
        'Optimized frontend performance using React, Next.js, React Query, Zustand, lazy loading, image optimization, and code splitting, reducing initial page load time by nearly 40% and delivering a faster, more responsive user experience',
      ],
    },
  ];

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className={`mb-12 flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-[hsl(var(--bg-primary))]"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.role}</p>
                      <p className="text-sm text-tertiary">{exp.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full glass text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
