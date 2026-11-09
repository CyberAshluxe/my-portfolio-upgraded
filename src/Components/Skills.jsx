// src/components/Skills.jsx

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    color: '#61DAFB',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    color: '#68A063',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Shopify Development',
    color: '#95BF47',
    skills: ['Shopify Store Setup', 'Theme Customization', 'Liquid', 'App Integrations', 'Ecommerce'],
  },
  {
    title: 'Tools & Technologies',
    color: '#007ACC',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Main Title */}
        <Fade direction="down" triggerOnce>
          <h2 className="skills-title d-block">Skills & Expertise</h2>
          <p className="skills-subtitle">
            Web development and Shopify skills for building modern websites and ecommerce stores.
          </p>
        </Fade>

        {/* Skill Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Fade direction="up" delay={index * 100} key={category.title} triggerOnce>
              <div className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-card-dot" style={{ backgroundColor: category.color }}></span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;