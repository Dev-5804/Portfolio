import React, { useState } from "react";

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
    // {
    //   id: 5,
    //   title: "REST API Server",
    //   description:
    //     "A robust RESTful API with authentication, data validation, error handling, and comprehensive documentation using Swagger.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    //   category: "Backend",
    //   liveUrl: "https://api-demo.com/docs",
    //   githubUrl: "https://github.com/username/rest-api",
    //   featured: false,
    // },
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
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */ }
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in web development,
            from frontend interfaces to full-stack applications.
          </p>
        </div>

        {/* Filter Dropdown */ }
        <div className="flex justify-center mb-12">
          <div className="relative">
            <select
              value={ filter }
              onChange={ (e) => setFilter(e.target.value) }
              className="appearance-none bg-gray-900 text-white px-6 py-3 pr-10 rounded-lg font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-all duration-200"
            >
              { categories.map((category) => (
                <option key={ category } value={ category }>
                  { category === "All" ? "All Projects" : category }
                </option>
              )) }
            </select>
            {/* Custom dropdown arrow */ }
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
                  strokeWidth={ 2 }
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Grid */ }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          { filteredProjects.map((project) => (
            <div
              key={ project.id }
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
            >
              {/* Project Image */ }
              <div className="relative overflow-hidden h-48">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    {/* <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-lg opacity-50"></div> */}
                    {/* <p className="text-sm">Project Image</p> */}
                    <img src={ project.image } alt={ project.title } />
                  </div>
                </div>
                { project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                ) }
                {/* Overlay on hover */ }
                {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
              </div>

              {/* Project Content */ }
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                    { project.title }
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full shrink-0 ml-2">
                    { project.category }
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  { project.description }
                </p>

                {/* Technologies */ }
                <div className="flex flex-wrap gap-2 mb-4">
                  { project.technologies.map((tech, index) => (
                    <span
                      key={ index }
                      className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded border"
                    >
                      { tech }
                    </span>
                  )) }
                </div>

                {/* Project Links */ }
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={ project.liveUrl }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={ project.githubUrl }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          )) }
        </div>

        {/* View More Button */ }
        <div className="text-center mt-12">
          <a
            href="https://github.com/Dev-5804"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
