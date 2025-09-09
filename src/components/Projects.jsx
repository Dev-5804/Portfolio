import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Skill Swap",
      description:
        "A full-stack platform for skill exchange and collaboration among users.",
      image: "src/assets/Images/SkillSwap.png",
      technologies: ["Vite", "Python", "MongoDB", "TailwindCSS"],
      category: "Full Stack",
      liveUrl: "https://github.com/Dev-5804/SkillSwap",
      githubUrl: "https://github.com/Dev-5804/SkillSwap",
      featured: true,
    },
    {
      id: 2,
      title: "Pace - An E-commerce Website for Shoes",
      description:
        "A collaborative e-commerce platform for buying and selling shoes online.",
      image: "src/assets/Images/Pace.png",
      technologies: ["Vite", "React", "Tailwind CSS"],
      category: "Frontend",
      liveUrl: "https://pace-sand.vercel.app/",
      githubUrl: "https://github.com/Dev-5804/pace",
      featured: false,
    },
    {
      id: 3,
      title: "Weather Dashboard - An vibe coded project",
      description:
        "A responsive weather application that provides current weather conditions, forecasts, and location-based weather data using OpenWeather API.",
      image: "src/assets/Images/WeatherDashboard.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
      category: "Frontend",
      liveUrl: "https://github.com/Dev-5804/vibe-coded-weather-app",
      githubUrl: "https://github.com/Dev-5804/vibe-coded-weather-app",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "src/assets/Images/Portfolio.png",
      technologies: ["Vite", "React", "Tailwind CSS", "Vite"],
      category: "Frontend",
      liveUrl: "/",
      githubUrl: "https://github.com/Dev-5804/Portfolio",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description:
        "A platform for users to share and discover new recipes, with features like user authentication, recipe ratings, and comments.",
      image: "src/assets/Images/RecipeShare.png",
      technologies: ["Neaxt.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      category: "Full Stack",
      liveUrl: "https://github.com/Dev-5804/Recipe-Sharing-Platform",
      githubUrl: "https://github.com/Dev-5804/Recipe-Sharing-Platform",
      featured: true,
    },
  ];

  const categories = ["All", "Frontend", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <motion.section 
      id="projects" 
      className="py-20 lg:py-28 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 cursor-default"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gray-900 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A collection of projects that showcase my skills in web development,
            from frontend interfaces to full-stack applications.
          </motion.p>
        </motion.div>

        {/* Filter Dropdown */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-gray-900 text-white px-6 py-3 pr-10 rounded-lg font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "All Projects" : category}
                </option>
              ))}
            </motion.select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                layout
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full shrink-0 ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded border"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#F3F4F6" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3 mt-auto">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Dev-5804"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
