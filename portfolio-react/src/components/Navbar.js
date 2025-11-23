import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 tracking-tight">
            Portfolio
          </div>
          <div className="flex items-center space-x-6">
            <div className="space-x-8">
              <a
                href="#home"
                className="text-gray-800 font-semibold hover:text-pink-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-800 font-semibold hover:text-pink-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-800 font-semibold hover:text-pink-500 transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-800 font-semibold hover:text-pink-500 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-800 font-semibold hover:text-pink-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            {/* Get In Touch Button */}
            <a
              href="#contact"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-5 rounded-lg transition duration-300 shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
