'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[hsl(var(--bg-primary))]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="section relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="text-center md:text-left"
          >
            <motion.h1
              variants={fadeInUp}
              className="mb-4 text-[hsl(var(--text-primary))]"
            >
              Hi, I'm <span className="gradient-text">Jenish Maru</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Full-Stack Developer',
                  2000,
                  'Backend Specialist',
                  2000,
                  'Node.js Expert',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-4xl font-bold text-[hsl(var(--text-secondary))]"
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 max-w-xl text-[hsl(var(--text-secondary))]"
            >
              Building scalable backend solutions and intuitive user interfaces with modern web technologies. 
              Specialized in Node.js, React.js, and cloud-native architectures.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn btn-secondary"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              <a
                href="https://github.com/jenish77"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/jenish-maru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:jenishmaru2002@gmail.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-75 blur-xl animate-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-strong p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt="Jenish Maru" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 glass rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass rounded-full flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

