import React from "react";
import resumePDF from "../assets/Devendra_Mali_Resume.pdf";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Devendra_Mali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "Frontend Development", level: 80 },
    { name: "Backend Development", level: 70 },
    // { name: 'UI/UX Design', level: 65 },
    { name: "Database Management", level: 75 },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications with modern technologies and best practices.",
    },
    // {
    //   icon: '🎨',
    //   title: 'UI/UX Design',
    //   description: 'Creating intuitive and beautiful user interfaces that enhance user experience.'
    // },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, efficiency, and scalability.",
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      description:
        "Exploring machine learning concepts and their applications in web development.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences that make
            a difference. I combine technical expertise with creative
            problem-solving to build solutions that users love.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info & Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate Information Technology student currently in
                  my final year of Bachelor of Engineering. My journey into web
                  development began during my second year when I discovered the
                  power of creating interactive web applications. What started
                  as curiosity quickly evolved into a deep passion for coding
                  and problem-solving.
                </p>
                <p>
                  Throughout my academic journey, I've focused on mastering
                  modern web technologies, particularly React and Node.js. I've
                  worked on several personal projects and academic assignments
                  that have helped me understand the importance of writing
                  clean, maintainable code and creating user experiences that
                  are both intuitive and functional.
                </p>
                <p>
                  As I prepare to enter the professional world, I'm excited
                  about the opportunity to apply my knowledge in real-world
                  scenarios. I'm always eager to learn new technologies and best
                  practices that will help me grow as a developer and contribute
                  meaningfully to development teams.
                </p>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Education</span>
                  <span className="text-gray-600">Final Year BE</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Field</span>
                  <span className="text-gray-600">Information Technology</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Status</span>
                  <span className="text-gray-600">Student</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Graduation</span>
                  <span className="text-gray-600">2026</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Focus</span>
                  <span className="text-gray-600">Web Development</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">
                    Availability
                  </span>
                  <span className="text-gray-600">Open for Internships</span>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <button 
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-12">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Passions */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Interests & Passions
              </h3>
              <div className="grid gap-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {interest.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
