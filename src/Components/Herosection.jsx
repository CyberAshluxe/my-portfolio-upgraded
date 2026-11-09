import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import myimage from "../assets/ashluxe logo.png";
import bg from "../assets/bg.jpg";
import BlurText from "./BlurText";
import TextType from "./TextType";

const HeroSection = () => {
  // ... (the customAnimationStyle string from before can remain here if needed)

  return (
    // The id="home" is the only new addition here
    <section
      id="home"
      className="relative flex items-start justify-center min-h-screen pt-24 pb-10 md:items-center md:py-0 bg-gray-900 text-white overflow-hidden"
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
          className="w-56 h-56 md:w-56 md:h-56 mx-auto mb-4 rounded-full border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.7)] object-cover animate-pop-in"
          style={{
            animation: "pop-in 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            animationFillMode: "forwards",
          }}
        />

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-2">
          LuxeBuilds
        </p>

        {/* Name */}
        <BlurText
          as="h1"
          text="Abdulrofiu Ashrof"
          className="text-4xl md:text-6xl font-bold mb-2 justify-center"
          animateBy="letters"
          direction="top"
        />
        {/* Titles */}
        <TextType
          text={[
            "Web Developer & Shopify Developer | Founder of Luxify | IT Security Student",
            
          ]}
          className="text-md md:text-xl text-gray-300 mb-4 tracking-wider"
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={2000}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-cyan-400"
        />
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
        <div className="flex max-w-md flex-wrap justify-center gap-x-6 gap-y-4 mx-auto">
          <a
            href="https://www.instagram.com/luxebuilds.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LuxeBuilds on Instagram"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://x.com/Luxebuilds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LuxeBuilds on X"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61593147720089&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LuxeBuilds on Facebook"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaFacebookF size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrofiu-ashrof-6a9b81358/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abdulrofiu Ashrof on LinkedIn"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@luxebuilds.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LuxeBuilds on TikTok"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaTiktok size={28} />
          </a>
          <a
            href="https://github.com/CyberAshluxe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LuxeBuilds on GitHub"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:info@luxebuilds.dev"
            aria-label="Email Abdulrofiu Ashrof"
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
