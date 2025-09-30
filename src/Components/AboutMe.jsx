import React from 'react';
import { Code, Shield, TrendingUp } from 'lucide-react'; // Changed Box to TrendingUp for Forex
import useInViewAnimation from '../Hooks/useInViewAnimation';

const AboutMe = () => {
  // Use the animation hook for different sections
  const [headerRef, headerInView] = useInViewAnimation(0.2);
  const [textRef, textInView] = useInViewAnimation(0.1);
  const [cardsRef, cardsInView] = useInViewAnimation(0.1);
  const [tagsRef, tagsInView] = useInViewAnimation(0.1);

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ease-out
            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-gray-200 mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400">
            Passionate about creating innovative solutions that bridge technology and security
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Text Content & Tags */}
          <div className="lg:w-1/2 space-y-6">
            <div
              ref={textRef}
              className={`space-y-4 text-lg text-gray-300 transition-all duration-1000 ease-out delay-200
                ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <p>
                I'm <span className="font-semibold text-cyan-400">Abdulrofiu Ashrof</span>, a dedicated web developer and cybersecurity
                student with a passion for creating secure, scalable, and user-friendly
                applications. Currently pursuing my B.Tech in Cybersecurity at
                LAUTECH, I combine my academic knowledge with practical
                development experience.
              </p>
              <p>
                My journey in technology spans across full-stack web development,
                cybersecurity fundamentals, and forex trading. I believe in
                writing clean, maintainable code while keeping security at the
                forefront of every project.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in financial markets,
                contributing to open-source projects, or learning about
                emerging cybersecurity threats and solutions.
              </p>
            </div>

            {/* Tags */}
            <div
              ref={tagsRef}
              className={`flex flex-wrap gap-3 mt-8 transition-all duration-1000 ease-out delay-400
                ${tagsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-blue-600/30 text-blue-300 rounded-full text-sm font-medium border border-blue-500">
                Team Player
              </span>
              <span className="px-4 py-2 bg-emerald-600/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500">
                Continuous Learner
              </span>
            </div>
          </div>

          {/* Right Column - Skill Cards */}
          <div className="lg:w-1/2 space-y-6">
            <div
              ref={cardsRef}
              className={`space-y-6 transition-all duration-1000 ease-out delay-400
                ${cardsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              {/* Card 1: Full-Stack Developer */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Code className="text-cyan-400 mr-4" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-100">Full-Stack Developer</h3>
                </div>
                <p className="text-gray-400">
                  Proficient in both frontend and backend development with modern technologies
                </p>
              </div>

              {/* Card 2: Cybersecurity Student */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Shield className="text-cyan-400 mr-4" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-100">Cybersecurity Student</h3>
                </div>
                <p className="text-gray-400">
                  Studying advanced security principles to build secure and resilient applications
                </p>
              </div>

              {/* Card 3: Forex Trader (Changed from Blockchain Enthusiast) */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <TrendingUp className="text-cyan-400 mr-4" size={28} /> {/* Changed icon to TrendingUp */}
                  <h3 className="text-2xl font-semibold text-gray-100">Forex Trader</h3> {/* Changed title */}
                </div>
                <p className="text-gray-400">
                  Passionate about analyzing financial markets and executing strategic trades
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;