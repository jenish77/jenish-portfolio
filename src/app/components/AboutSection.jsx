'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Years Experience', value: '3.6+' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="section bg-[hsl(var(--bg-secondary))]" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Full-Stack Software Engineer
            </h3>
            <p className="mb-4">
              I'm a passionate Software Engineer with over 3.6+ years of experience building scalable web applications 
              and robust backend systems. Currently working at <span className="text-primary font-semibold">Elvee Ltd</span>, 
              where I drive backend architecture and technical direction for scalable, high-performance solutions.
            </p>
            <p className="mb-4">
              My expertise lies in designing modular backend services, optimizing system performance by 2-3×, 
              building centralized authentication frameworks, and implementing automated CI/CD pipelines with Docker and Kubernetes.
            </p>
            <p>
              I graduated with a Bachelor's degree in Computer Engineering from <span className="text-primary font-semibold">Gujarat Technological University</span> with a CGPA of 8.39/10.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="card text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div variants={fadeInUp} className="mt-12 card">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h3>
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h4 className="font-semibold text-lg">Bachelor of Engineering in Computer Engineering</h4>
              <p className="text-secondary">Gujarat Technological University</p>
              <p className="text-sm text-tertiary">Ahmedabad, India</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-primary">CGPA: 8.39/10</p>
              <p className="text-secondary">2019 - 2023</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
