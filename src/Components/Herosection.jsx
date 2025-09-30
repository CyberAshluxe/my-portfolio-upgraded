import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myimage from "../assets/my image.jpg";
import bg from "../assets/bg.jpg";

const HeroSection = () => {
  // ... (the customAnimationStyle string from before can remain here if needed)

  return (
    // The id="home" is the only new addition here
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-xs"></div>
      </div>

      {/* ... The rest of your HeroSection JSX remains exactly the same ... */}

      <div className="relative z-10 text-center p-5">
        {/* Profile Picture with Pop-In Animation */}
        <img
          src={myimage}
          alt="Abdulrofiu Ashrof"
          className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 rounded-full border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.7)] object-cover animate-pop-in"
          style={{
            animation: "pop-in 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            animationFillMode: "forwards",
          }}
        />

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Abdulrofiu Ashrof
        </h1>
        {/* Titles */}
        <p className="text-md md:text-xl text-gray-300 mb-4 tracking-wider">
          Web Developer <span className="text-cyan-400 mx-1">•</span> IT
          Security Student <span className="text-cyan-400 mx-1">•</span>{" "}
          Blockchain Enthusiast
        </p>
        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          Building secure, modern, and scalable web solutions with a passion for
          innovation and security.
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/abdulrofiu-ashrof-6a9b81358/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/CyberAshluxe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:ashrofabdulrofiu21@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Add pop-in keyframes to global styles if not already present
// You can add this to your App.css or index.css:

