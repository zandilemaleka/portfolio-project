import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a developer and designer who believes that great digital
            experiences come from the perfect blend of aesthetics and
            functionality. With a keen eye for detail and a passion for clean
            code, I create solutions that not only look beautiful but work
            seamlessly.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            My approach is simple: understand the problem, design with purpose,
            and build with precision. I specialize in creating responsive web
            applications that prioritize user experience and performance.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
