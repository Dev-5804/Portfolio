import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } 
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm{" "}
            <motion.span 
              className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            >
              Devendra Mali
            </motion.span>
          </motion.h1>

          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.span 
              className="block mb-2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Full-Stack Web Developer
            </motion.span>
            <motion.span 
              className="text-lg md:text-xl text-gray-500"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Crafting digital experiences with modern technologies
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mb-12 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I specialize in building exceptional digital experiences using
            <motion.span 
              className="font-medium text-gray-800"
              whileHover={{ scale: 1.05, color: "#1f2937" }}
              transition={{ duration: 0.2 }}
            >
              {" "}React
            </motion.span>
            ,
            <motion.span 
              className="font-medium text-gray-800"
              whileHover={{ scale: 1.05, color: "#1f2937" }}
              transition={{ duration: 0.2 }}
            >
              {" "}Node.js
            </motion.span>
            , and
            <motion.span 
              className="font-medium text-gray-800"
              whileHover={{ scale: 1.05, color: "#1f2937" }}
              transition={{ duration: 0.2 }}
            >
              {" "}modern web technologies
            </motion.span>
            . Let's bring your ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View My Work
          </motion.button>

          <motion.button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div 
          className="border-t border-gray-100 pt-12 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.p 
            className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            Technologies I Work With
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2.6 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <motion.span 
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              ></motion.span>
              <span className="text-sm md:text-base font-medium">React</span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2.8 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <motion.span 
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              ></motion.span>
              <span className="text-sm md:text-base font-medium">
                JavaScript
              </span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 3.0 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <motion.span 
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              ></motion.span>
              <span className="text-sm md:text-base font-medium">Node.js</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 3.2 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <motion.span 
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              ></motion.span>
              <span className="text-sm md:text-base font-medium">
                Next.js
              </span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 3.4 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <motion.span 
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
              ></motion.span>
              <span className="text-sm md:text-base font-medium">
                Tailwind CSS
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ 
                y: [0, 10, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
