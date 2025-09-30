import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      {/* Floating 404 Animation */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-9xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        404
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-2xl md:text-3xl font-light tracking-wide"
      >
        Oops! Page not found
      </motion.p>

      {/* Techy glitch effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
        className="mt-2 text-sm text-cyan-400 tracking-widest uppercase"
      >
        <span className="animate-pulse">[ ERROR CODE: 404 - Lost in the void ]</span>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 rounded-full text-lg font-semibold shadow-lg hover:shadow-cyan-500/30"
        >
          🏠 Back to Home
        </Link>
      </motion.div>

      {/* Floating shapes (purely aesthetic) */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className="absolute top-20 left-20 w-8 h-8 bg-cyan-500/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 2.5, repeatType: "reverse" }}
        className="absolute bottom-32 right-32 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl"
      ></motion.div>
    </div>
  );
};

export default Notfound;
