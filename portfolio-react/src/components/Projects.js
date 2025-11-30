import React from "react";
import weatherImg from "../assets/images/weather.png";
import recipeImg from "../assets/images/recipe.png";
import clockImg from "../assets/images/clock.png";
import digitalImg from "../assets/images/digital.png";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description:
        "Responsive weather app with live API data, real-time updates and location-based forecasts with clean UI/UX design.",
      technologies: ["React", "API Integration", "CSS", "Responsive Design"],
      link: "#",
      image: weatherImg,
      animation: "hover:scale-105 transition-transform duration-300",
    },
    {
      title: "AI Recipe Generator",
      description:
        " AI-powered recipe generator that creates dishes based on user preferences and available ingredients.",
      technologies: ["JavaScript", "AI Integration", "API", "CSS"],
      link: "#",
      image: recipeImg,
      animation: "hover:scale-105 transition-transform duration-300",
    },
    {
      title: "World Clock",
      description:
        "Multi-timezone clock application with clean interface, real-time updates, and  showing different timezones.",
      technologies: ["JavaScript", "Moment.js", "UI/UX", "Animations"],
      link: "#",
      image: clockImg,
      animation: "hover:scale-105 transition-transform duration-300",
    },
    {
      title: "Digital Clock",
      description:
        "A simple, stylish digital clock that displays the current time in AM/PM format and updates every second.",
      technologies: ["JavaScript", "CSS Animations", "SVG", "UI Design"],
      link: "#",
      image: digitalImg,
      animation: "hover:scale-105 transition-transform duration-300",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web
          development and creative problem-solving.
        </p>

        {/* Top Row - 2 Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${project.animation} hover:shadow-xl transition-all duration-300`}
            >
              {/* Project Image */}
            
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition duration-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(2, 4).map((project, index) => (
            <div
              key={index + 2}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${project.animation} hover:shadow-xl transition-all duration-300`}
            >
              {/* Project Image */}
      
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition duration-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
