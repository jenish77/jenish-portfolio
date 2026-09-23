'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

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
          <motion.div 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              className={`mb-12 flex flex-col md:flex-row gap-8 items-start relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-primary border-4 border-[hsl(var(--bg-primary))] z-10"
                animate={{ scale: [1, 1.25, 1], boxShadow: ["0 0 0px rgba(96,165,250,0)", "0 0 15px rgba(96,165,250,0.8)", "0 0 0px rgba(96,165,250,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
              ></motion.div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="card group hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.025, y: -6, boxShadow: "0 20px 30px -10px rgba(37, 99, 235, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.role}</p>
                      <p className="text-sm text-tertiary">{exp.location}</p>
                    </div>
                    <motion.span 
                      className="px-3.5 py-1 rounded-full glass text-xs font-semibold border border-primary/20 bg-primary/10 text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  <ul className="space-y-2.5 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2.5"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                      >
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-secondary text-sm leading-relaxed">{achievement}</span>
                      </motion.li>
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
