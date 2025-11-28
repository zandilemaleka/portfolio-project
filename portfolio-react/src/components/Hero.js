import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[80] flex items-center justify-center py-12 bg-white mb-8"
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Welcome to My Portfolio
        </h1>
      
<div className="text-justify mb-8">
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
          I'm Zandile Maleka, a passionate developer. As a developer, I
          specialize in building user-friendly applications with clean,
          efficient code.Always eager to take on new challenges and learn
          emerging technologies.
        </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-pink-500 text-white font-bold px-5 py-3 rounded-lg hover:bg-pink-700">
            View My Work
          </button>
          <a
            href="#contact"
            className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50"
          >
            Contact Me{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
