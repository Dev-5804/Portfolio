import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle escape key and scroll prevention
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    const handleWheelScroll = (e) => {
      // Check if the event originated from within the modal
      const modalContent = document.querySelector('.modal-content');
      const modalBackdrop = document.querySelector('.modal-backdrop');
      
      if (!modalContent || !modalBackdrop) return;

      // If scrolling outside the modal content, prevent it
      if (!modalContent.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // If scrolling within modal content, check scroll limits
      const { scrollTop, scrollHeight, clientHeight } = modalContent;
      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;
      
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      // If at scroll limits and trying to scroll further, prevent the event
      // This prevents the scroll from bubbling to the page
      if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleTouchStart = (e) => {
      const modalContent = document.querySelector('.modal-content');
      if (!modalContent) return;
      
      // Store initial touch position for modal content
      if (modalContent.contains(e.target)) {
        modalContent.dataset.touchStartY = e.touches[0].clientY;
        modalContent.dataset.scrollTop = modalContent.scrollTop;
      }
    };

    const handleTouchMove = (e) => {
      const modalContent = document.querySelector('.modal-content');
      if (!modalContent) {
        e.preventDefault();
        return false;
      }
      
      // If touch is outside modal content, prevent it
      if (!modalContent.contains(e.target)) {
        e.preventDefault();
        return false;
      }

      // Handle touch scrolling within modal
      const touchY = e.touches[0].clientY;
      const touchStartY = parseFloat(modalContent.dataset.touchStartY || '0');
      const scrollTop = parseFloat(modalContent.dataset.scrollTop || '0');
      const deltaY = touchStartY - touchY;
      
      const { scrollHeight, clientHeight } = modalContent;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      // Prevent overscroll at boundaries
      if ((deltaY > 0 && isAtBottom) || (deltaY < 0 && isAtTop)) {
        e.preventDefault();
        return false;
      }
    };

    const handleKeyDown = (e) => {
      const modalContent = document.querySelector('.modal-content');
      
      // Handle escape key
      if (e.key === 'Escape') {
        return; // Let handleEscape handle this
      }
      
      // Prevent page scroll keys when focus is outside modal content
      const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, home, end, arrows
      
      if (scrollKeys.includes(e.keyCode)) {
        if (!modalContent || !modalContent.contains(e.target)) {
          e.preventDefault();
          return false;
        }
        
        // If within modal, check for scroll boundaries
        const { scrollTop, scrollHeight, clientHeight } = modalContent;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        const isUpKey = [33, 36, 38].includes(e.keyCode); // page up, home, up arrow
        const isDownKey = [32, 34, 35, 40].includes(e.keyCode); // space, page down, end, down arrow
        
        if ((isUpKey && isAtTop) || (isDownKey && isAtBottom)) {
          e.preventDefault();
          return false;
        }
      }
    };

    if (selectedProject) {
      // Add event listeners for scroll management
      document.addEventListener('wheel', handleWheelScroll, { passive: false });
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('keydown', handleKeyDown, { passive: false });
      document.addEventListener('keydown', handleEscape);
    } else {
      // Remove event listeners when modal closes
      document.removeEventListener('wheel', handleWheelScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      // Cleanup all event listeners
      document.removeEventListener('wheel', handleWheelScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Skill Swap",
      description:
        "A full-stack platform for skill exchange and collaboration among users.",
      detailedDescription: "Skill Swap is a comprehensive platform that connects individuals looking to exchange skills and knowledge. Built with modern web technologies, it features user authentication, skill matching algorithms, real-time messaging, and a rating system. Users can create profiles showcasing their skills, search for specific skills they want to learn, and connect with others for mutual learning experiences.",
      image: "src/assets/Images/SkillSwap.png",
      technologies: ["Vite", "Python", "MongoDB", "TailwindCSS"],
      category: "Full Stack",
      liveUrl: "https://github.com/Dev-5804/SkillSwap",
      githubUrl: "https://github.com/Dev-5804/SkillSwap",
      featured: true,
      keyFeatures: [
        "User authentication and profile management",
        "Skill matching algorithm",
        "Real-time messaging system",
        "Rating and review system",
        "Advanced search and filtering"
      ],
      challenges: "Implementing real-time messaging and creating an efficient matching algorithm for skill pairing.",
      learnings: "Gained experience in WebSocket implementation, database optimization, and user experience design.",
      duration: "3 months",
      teamSize: "Solo Project"
    },
    {
      id: 2,
      title: "Pace - An E-commerce Website for Shoes",
      description:
        "A collaborative e-commerce platform for buying and selling shoes online.",
      detailedDescription: "Pace is a modern e-commerce platform specifically designed for shoe enthusiasts. The platform features a clean, responsive design with advanced filtering options, product search, shopping cart functionality, and seamless user experience. Built with React and styled with Tailwind CSS for optimal performance and aesthetics.",
      image: "src/assets/Images/Pace.png",
      technologies: ["Vite", "React", "Tailwind CSS"],
      category: "Frontend",
      liveUrl: "https://pace-sand.vercel.app/",
      githubUrl: "https://github.com/Dev-5804/pace",
      featured: false,
      keyFeatures: [
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Responsive design for all devices",
        "Product search and sorting",
        "Clean and intuitive user interface"
      ],
      challenges: "Creating an intuitive product filtering system and ensuring responsive design across all device sizes.",
      learnings: "Enhanced skills in React state management, responsive design principles, and user interface optimization.",
      duration: "2 months",
      teamSize: "Collaborative Project"
    },
    {
      id: 3,
      title: "Weather Dashboard - An vibe coded project",
      description:
        "A responsive weather application that provides current weather conditions, forecasts, and location-based weather data using OpenWeather API.",
      detailedDescription: "Weather Dashboard is a comprehensive weather application that provides real-time weather information with an intuitive interface. The app features current weather conditions, 5-day forecasts, location-based weather data, and beautiful weather animations. Built with vanilla JavaScript to demonstrate core programming skills.",
      image: "src/assets/Images/WeatherDashboard.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
      category: "Frontend",
      liveUrl: "https://github.com/Dev-5804/vibe-coded-weather-app",
      githubUrl: "https://github.com/Dev-5804/vibe-coded-weather-app",
      featured: false,
      keyFeatures: [
        "Real-time weather data integration",
        "5-day weather forecast",
        "Location-based weather detection",
        "Interactive weather animations",
        "Temperature unit conversion"
      ],
      challenges: "Handling API rate limits and creating smooth weather animations with pure CSS.",
      learnings: "Improved API integration skills, asynchronous JavaScript, and CSS animation techniques.",
      duration: "1 month",
      teamSize: "Solo Project"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      detailedDescription: "This portfolio website represents my personal brand and showcases my web development journey. Built with React and enhanced with Framer Motion for smooth animations, it features a modern design, optimized performance, and responsive layout. The site includes sections for projects, skills, experience, and contact information.",
      image: "src/assets/Images/Portfolio.png",
      technologies: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      liveUrl: "/",
      githubUrl: "https://github.com/Dev-5804/Portfolio",
      featured: false,
      keyFeatures: [
        "Smooth scroll animations",
        "Responsive design",
        "Interactive project showcase",
        "Contact form integration",
        "Performance optimized"
      ],
      challenges: "Balancing visual appeal with performance optimization and ensuring cross-browser compatibility.",
      learnings: "Advanced animation techniques, performance optimization, and personal branding through web design.",
      duration: "2 weeks",
      teamSize: "Solo Project"
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description:
        "A platform for users to share and discover new recipes, with features like user authentication, recipe ratings, and comments.",
      detailedDescription: "Recipe Sharing Platform is a full-stack web application that brings food enthusiasts together. Users can create accounts, share their favorite recipes, discover new dishes, rate recipes, and engage with the community through comments. The platform features advanced search functionality, recipe categorization, and a user-friendly interface for recipe creation and management.",
      image: "src/assets/Images/RecipeShare.png",
      technologies: ["Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      category: "Full Stack",
      liveUrl: "https://github.com/Dev-5804/Recipe-Sharing-Platform",
      githubUrl: "https://github.com/Dev-5804/Recipe-Sharing-Platform",
      featured: true,
      keyFeatures: [
        "User authentication and profiles",
        "Recipe creation and management",
        "Rating and commenting system",
        "Advanced recipe search",
        "Recipe categorization and tagging"
      ],
      challenges: "Implementing a robust rating system and optimizing database queries for large recipe collections.",
      learnings: "Full-stack development workflow, database design, and community feature implementation.",
      duration: "4 months",
      teamSize: "Solo Project"
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
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                layout
                onClick={() => setSelectedProject(project)}
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
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 text-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
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

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="modal-backdrop fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="modal-content bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  {selectedProject.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
                        Featured Project
                      </span>
                    </div>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Title and Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedProject.title}
                      </h3>
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {selectedProject.category}
                      </span>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p><strong>Duration:</strong> {selectedProject.duration}</p>
                      <p><strong>Team:</strong> {selectedProject.teamSize}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenges</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Learnings</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedProject.learnings}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;
