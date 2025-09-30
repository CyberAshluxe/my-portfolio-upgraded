// src/components/Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

// --- Data for the timeline ---
const timelineData = [
  {
    type: 'experience',
    title: 'Web Development Intern',
    institution: 'SSL College of ICT',
    location: 'Nigeria',
    date: '2023 - 2024',
    description: 'Gained hands-on experience in full-stack web development, working on real client projects and learning industry best practices. Collaborated with senior developers on various web applications.',
    highlights: [
      'Developed responsive web applications using modern frameworks',
      'Collaborated on client projects using Agile methodologies',
      'Learned version control with Git and team collaboration',
      'Implemented best practices for clean, maintainable code',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git'],
  },
  {
    type: 'education',
    title: 'Bachelor of Technology in Cybersecurity',
    institution: 'Ladoke Akintola University of Technology (LAUTECH)',
    location: 'Ogbomoso, Nigeria',
    date: '2021 - Present',
    description: 'Pursuing comprehensive education in cybersecurity fundamentals, network security, ethical hacking, and digital forensics. Maintaining strong academic performance while gaining practical skills in security analysis.',
    highlights: [
      'Core coursework in network security and cryptography',
      'Hands-on experience with penetration testing tools',
      'Study of security frameworks and compliance standards',
      'Research in emerging cybersecurity threats and solutions',
    ],
    skills: ['Network Security', 'Ethical Hacking', 'Digital Forensics', 'Risk Assessment', 'CRISC/SP', 'Security Auditing'],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

// --- Main Component ---
const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>
        <motion.p 
          className="experience-subtitle"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My journey of continuous learning and professional growth in technology.
        </motion.p>

        <div className="timeline-wrapper">
          <motion.div 
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
          >
            {timelineData.map((item, index) => (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <div className="timeline-icon-container">
                  <div className="timeline-icon">
                    {item.type === 'experience' ? <FaCode /> : <FaGraduationCap />}
                  </div>
                </div>
                <div className="timeline-content">
                  <span className={`timeline-tag ${item.type}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <h3 className="item-title">{item.title}</h3>
                  <div className="item-meta">
                    <span>{item.institution}</span>
                    <span>{item.location}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  
                  <div className="item-details">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {item.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="item-details">
                    <h4>Skills Gained:</h4>
                    <div className="experience-skills-container">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="experience-skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;