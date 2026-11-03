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
    title: "Pride American Electronics",
    description:
      "A Shopify electronics storefront featuring computer accessories, smart-home devices, mobile essentials, and audio products.",
    techStack: ["Shopify", "Electronics", "Ecommerce"],
    liveDemoUrl: "https://prideamericanelectronics.store/",
    liveDemoLabel: "Visit Store",
    imageUrl:
      "https://prideamericanelectronics.store/cdn/shop/files/ChatGPT_Image_Jul_25_2026_05_45_18_AM_1400x.png?v=1784954756",
  },
  {
    title: "Alexandra Bleu",
    description:
      "A family fashion Shopify store with clothing and accessories for women, men, and children.",
    techStack: ["Shopify", "Fashion", "Ecommerce"],
    liveDemoUrl: "https://alexandraluxes.myshopify.com/",
    liveDemoLabel: "Visit Store",
    imageUrl:
      "https://alexandraluxes.myshopify.com/cdn/shop/files/ChatGPT_Image_Aug_12_2026_08_20_55_AM_1400x.png?v=1786548088",
  },
  {
    title: "Crown & Pearl",
    description:
      "A seasonal Shopify storefront featuring themed campaigns, fashion products, and pet costume collections.",
    techStack: ["Shopify", "Fashion", "Seasonal Ecommerce"],
    liveDemoUrl: "https://crownandpearll.myshopify.com/",
    liveDemoLabel: "Visit Store",
    imageUrl:
      "https://crownandpearll.myshopify.com/cdn/shop/files/image.png?v=1793097564&width=3840",
  },
  {
    title: "Shanks Collection",
    description:
      "A fashion and accessories Shopify store with collections for men, women, and children.",
    techStack: ["Shopify", "Fashion", "Ecommerce"],
    liveDemoUrl: "https://shankscollection.myshopify.com/",
    liveDemoLabel: "Visit Store",
    imageUrl:
      "https://shankscollection.myshopify.com/cdn/shop/files/Emerald_Elegance_in_Modern_Architecture_1400x.png?v=1791173964",
  },
  {
    title: "DeoMark Growth",
    description:
      "A data-driven ecommerce marketing agency helping dropshipping stores, Etsy sellers, and handmade brands grow through SEO, paid campaigns, email marketing, and conversion optimization.",
    techStack: ["Ecommerce Growth", "SEO", "Conversion Optimization"],
    count: "1+",
    liveDemoUrl: "https://www.deomarkgrowth.com/",
    liveDemoLabel: "Visit Website",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=DeoMark+Growth",
  },
  {
    title: "Luxify",
    description:
      "A premium Shopify growth agency focused on building high-converting ecommerce stores with custom development, theme customization, app integrations, and conversion optimization.",
    techStack: ["Shopify", "Ecommerce", "Conversion Optimization"],
    count: "1+",
    liveDemoUrl: "https://www.luxify.pro/#home",
    liveDemoLabel: "Visit Website",
    imageUrl: "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Luxify",
  },
  {
    title: "Buchaufstieg",
    description:
      "An international book marketing agency that helps authors grow their readership through cinematic campaigns, multilingual promotion, Amazon discoverability, and Goodreads outreach.",
    techStack: ["Book Marketing", "Multilingual Campaigns", "Author Branding"],
    count: "1+",
    liveDemoUrl: "https://www.buchaufstieg.com/",
    liveDemoLabel: "Visit Website",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Buchaufstieg",
  },
  {
    title: "Author Elevate",
    description:
      "An ethical book marketing service helping authors improve discoverability, reach relevant readers, and build sustainable relationships through Amazon optimization, Goodreads growth, and author branding.",
    techStack: ["Book Marketing", "Amazon Optimization", "Author Branding"],
    count: "1+",
    liveDemoUrl: "https://www.authorelevatebooks.com/",
    liveDemoLabel: "Visit Website",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Author+Elevate",
  },
  {
    title: "BookRise",
    description:
      "A book marketing platform that builds author visibility and reader momentum with Amazon optimization, Goodreads growth, book launch campaigns, video marketing, and reader outreach.",
    techStack: ["Book Marketing", "Goodreads Growth", "Book Promotion"],
    count: "1+",
    liveDemoUrl: "https://bookrise.vercel.app/",
    liveDemoLabel: "Visit Website",
    imageUrl: "https://placehold.co/600x400/0a2540/FFFFFF/png?text=BookRise",
  },
  {
    title: "Holley O'Connell",
    description:
      "A literary marketing portfolio showcasing book reviews, Goodreads promotion, Amazon optimization, reader outreach, book launches, and author branding.",
    techStack: ["Book Reviews", "Goodreads Promotion", "Amazon Optimization"],
    count: "1+",
    liveDemoUrl: "https://holley-0connell.vercel.app/",
    liveDemoLabel: "Visit Website",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Holley+O%27Connell",
  },
  {
    title: "Hellen Kinley",
    description:
      "A boutique book marketing portfolio focused on ethical, data-informed promotion, helping authors improve discovery through Amazon and Goodreads expertise and reader outreach.",
    techStack: ["Book Marketing", "Amazon & Goodreads", "Reader Outreach"],
    count: "1+",
    liveDemoUrl: "https://hellenkinley.vercel.app/",
    liveDemoLabel: "Visit Website",
    imageUrl:
      "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Hellen+Kinley",
  },
  {
    title: "RedStore E-commerce",
    description:
      "A full-stack sportswear e-commerce platform with features like product filtering, cart, and user authentication.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    count: "4+",
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
    count: "3+",
    liveDemoUrl: "https://novabank-ashy.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/novabank",
    imageUrl: "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Nova+Bank", // Replace with your actual image URL
  },
  {
    title: "Triora E-commerce",
    description:
      "A multi-vendor e-commerce site for gaming, skincare, and eBooks. Features a complex backend and dynamic UI.",
    techStack: ["React", "Node.js", "TailwindCSS", "Firebase"],
    count: "4+",
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
    count: "3+",
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
    count: "3+",
    liveDemoUrl: "https://level-one-project-two.vercel.app",
    githubUrl: "https://github.com/CyberAshluxe/level-one-project",
    imageUrl: "https://placehold.co/600x400/0a2540/FFFFFF/png?text=Bookdiverse", // Replace with your actual image URL
  },
  {
    title: "Expired Product Detector",
    description:
      "A practical utility web app that helps users track product expiry dates to reduce waste.",
    techStack: ["JavaScript", "HTML", "CSS", "PWA"],
    count: "4+",
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
    count: "3+",
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
    count: "3+",
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
    count: "5+",
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
            {project.liveDemoLabel || `View All ${project.count.split('+')[0]}`} →
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaGithub /> GitHub
            </a>
          )}
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
