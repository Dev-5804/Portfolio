import React from "react";

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
    <section
      id="home"
      className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Devendra Mali
            </span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
            <span className="block mb-2">Full-Stack Web Developer</span>
            <span className="text-lg md:text-xl text-gray-500">
              Crafting digital experiences with modern technologies
            </span>
          </div>
        </div>

        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I specialize in building exceptional digital experiences using
            <span className="font-medium text-gray-800"> React</span>,
            <span className="font-medium text-gray-800"> Node.js</span>, and
            <span className="font-medium text-gray-800">
              {" "}
              modern web technologies
            </span>
            . Let's bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            View My Work
          </button>

          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Get In Touch
          </button>
        </div>

        <div className="border-t border-gray-100 pt-12 mb-12">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
            Technologies I Work With
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-sm md:text-base font-medium">React</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-sm md:text-base font-medium">
                JavaScript
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-sm md:text-base font-medium">Node.js</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-sm md:text-base font-medium">
                Next.js
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-sm md:text-base font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
