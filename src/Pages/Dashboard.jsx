import React from "react";
import HeroSection from "../Components/Herosection";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Project";
import Experience from "../Components/Experience";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

// Optional: A reusable section template (not required but left here if you want)
const DashboardSection = ({ id, title }) => (
  <section
    id={id}
    className="min-h-screen bg-gray-900 flex items-center justify-center border-t border-gray-800"
  >
    <h2 className="text-5xl font-bold text-white">{title}</h2>
  </section>
);

const Dashboard = () => {
  return (
    <>
      <HeroSection id="home" />
      <AboutMe id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Experience id="experience" />
      <Contact id="contacts" />
      <Footer />
    </>
  );
};

export default Dashboard;
