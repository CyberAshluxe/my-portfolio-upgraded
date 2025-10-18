// src/components/Projects.jsx

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

// --- PROJECT DATA ---
// You can easily update your projects here.
// For images, you can use a service like Cloudinary or just place them in your public folder.
const projectsData = [
  {
    title: "RedStore E-commerce",
    description:
      "A full-stack sportswear e-commerce platform with features like product filtering, cart, and user authentication.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveDemoUrl: "https://redstore-dun.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/redstore",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=RedStore+E-commerce", // Replace with your actual image URL
  },
  {
    title: "Nova Bank",
    description:
      "A sleek, modern UI for a banking application, focusing on a clean user experience and responsive design.",
    techStack: ["React", "Styled-Components", "Framer Motion"],
    liveDemoUrl: "https://novabank-ashy.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/novabank",
    imageUrl: "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Nova+Bank", // Replace with your actual image URL
  },
  {
    title: "Triora E-commerce",
    description:
      "A multi-vendor e-commerce site for gaming, skincare, and eBooks. Features a complex backend and dynamic UI.",
    techStack: ["React", "Node.js", "TailwindCSS", "Firebase"],
    liveDemoUrl: "https://triora-six.vercel.app/",
    githubUrl: "https://github.com/CyberAshluxe/triora",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Triora+E-commerce", // Replace with your actual image URL
    
  },
  {
    title: "Printivio Clone",
    description:
      "A feature-rich clone of an online printing platform, allowing users to customize and order various print products.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemoUrl: "https://printivo-khaki.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/printivo",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Printivio+Clone", // Replace with your actual image URL
  },
  {
    title: "Bookdiverse",
    description:
      "A frontend web application for discovering and exploring a diverse collection of books, with a focus on UI/UX.",
    techStack: ["HTML", "CSS", "BOOTSTRAP"],
    liveDemoUrl: "https://level-one-project-two.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/level-one-project",
    imageUrl: "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Bookdiverse", // Replace with your actual image URL
  },
  {
    title: "Expired Product Detector",
    description:
      "A practical utility web app that helps users track product expiry dates to reduce waste.",
    techStack: ["JavaScript", "HTML", "CSS", "PWA"],
    liveDemoUrl: "https://expired-products-detector.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/expired-products-detector",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Expired+Product+Detector", // Replace with your actual image URL
  },
  {
    title: "Foodie",
    description:
      "A simple and intuitive landing page for a food recipe app that helps users discover and share their favorite recipes.",
    techStack: ["Bootstrap", "React", "CSS"],
    liveDemoUrl: "https://foodie-landing-page-two.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/Foodie-Landing-Page",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Foodie", // Replace with your actual image URL
  },
  {
    title: "To-Do Reminder App",
    description:
      "A simple and intuitive to-do reminder app that helps users manage their tasks effectively.",
    techStack: ["JavaScript", "HTML", "BOOTSTRAP"],
    liveDemoUrl: "https://to-do-reminder-ochre.vercel.app/",
    githubUrl: "https://github.com/CyberAshluxe/To-Do-Reminder-App",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=To-Do+Reminder+App", // Replace with your actual image URL
  },
  {
    title: "Luxevision",
    description:
      "A multimedia platform for showcasing and discovering luxury fashion content and movies.",
    techStack: ["React", "Node.js", "Framer Motion", "TailwindCSS", "JavaScript"],
    liveDemoUrl: "https://luxevision.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/luxevision",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Luxevision", // Replace with your actual image URL
      status: "In Progress",
  }
];

// Reusable Project Card Component with Animation
const ProjectCard = ({ project }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="project-card"
    >
      <div className="project-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
        {project.status && (
          <div className="project-status-badge">{project.status}</div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Section Component
const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container max-w-6xl mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="projects-main-title text-3xl md:text-4xl font-bold text-white">
            My Projects
          </h2>
          <p className="projects-subtitle text-gray-400 mt-2">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* GitHub Button aligned to right */}
        <div className="flex justify-end mb-8">
          <a
            href="https://github.com/CyberAshluxe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            More on GitHub
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
