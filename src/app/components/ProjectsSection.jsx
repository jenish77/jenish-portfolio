'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'CoolMatch',
      subtitle: 'Social Connection & Video Chat Platform',
      description: 'Developed a cross-platform social networking application enabling users to connect and interact through text, voice, and video chat. Focused on scalability, user safety, and smooth communication under high concurrent traffic. Enabled monetization through in-app purchases and subscriptions, driving consistent revenue growth.',
      tech: ['NodeJS', 'ExpressJS', 'Redis', 'MongoDB'],
      appStoreLink: 'https://apps.apple.com/in/app/coolmatch-voice-video-chat/id6747340854',
      date: 'January 2025',
    },
    {
      title: 'Leylix',
      subtitle: 'Event Planning & Communication Platform',
      description: 'Developed a social event and community platform enabling users to discover, host, and sponsor events with integrated ticketing and venue search. Implemented real-time communication features including group chats, audio/video calls, contact management, and interactive polls.',
      tech: ['NestJS', 'NextJs', 'Socket.io'],
      appStoreLink: 'https://apps.apple.com/us/app/leylix/id6657989905',
      date: 'March 2024',
    },
    {
      title: 'StudyTutor',
      subtitle: 'AI Homework Helper & Question Solver',
      description: 'Engineered an AI-powered educational application enabling students to scan, solve, and master complex homework questions. Integrated step-by-step problem solving, past paper modules with 1,000+ UK exam board resources, and high-concurrency AI backend services.',
      tech: ['Node.js', 'NestJS', 'OpenAI API', 'PostgreSQL', 'Redis'],
      appStoreLink: 'https://apps.apple.com/us/app/studytutor-ai-homework-helper/id6759512334',
      date: 'February 2025',
    },
  ];

  return (
    <section id="projects" className="section bg-[hsl(var(--bg-secondary))]" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card group flex flex-col justify-between hover:border-primary/50 transition-colors duration-300"
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 35px -10px rgba(37, 99, 235, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Project Header */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </motion.div>
                  <span className="text-xs px-2.5 py-1 rounded-full glass border border-primary/20 text-tertiary font-semibold">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full glass text-xs font-semibold text-secondary hover:text-white hover:bg-gradient-primary transition-colors cursor-default"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.appStoreLink && (
                    <motion.a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn btn-primary text-sm py-2"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn btn-secondary text-sm py-2"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
