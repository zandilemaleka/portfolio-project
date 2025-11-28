import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-3 rounded-lg mr-4">
                <i className="fas fa-code text-pink-500 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Frontend</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">HTML/CSS</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">JavaScript</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">React</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Tailwind CSS</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & Database Skills */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-3 rounded-lg mr-4">
                <i className="fas fa-server text-pink-500 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Backend & Database
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">SQL</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">MySQL</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Node.js</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">
                  API Integration
                </span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Other Skills */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-3 rounded-lg mr-4">
                <i className="fas fa-tools text-pink-500 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Tools & Other
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Git</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">Figma</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">VS Code</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">
                  Data Analytics
                </span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skill Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 flex items-center">
              <div className="bg-pink-100 p-2 rounded-lg mr-4">
                <i className="fas fa-lightbulb text-pink-500"></i>
              </div>
              <h4 className="font-semibold text-gray-800">Problem Solving</h4>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 flex items-center">
              <div className="bg-pink-100 p-2 rounded-lg mr-4">
                <i className="fas fa-comments text-pink-500"></i>
              </div>
              <h4 className="font-semibold text-gray-800">Communication</h4>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 flex items-center">
              <div className="bg-pink-100 p-2 rounded-lg mr-4">
                <i className="fas fa-users text-pink-500"></i>
              </div>
              <h4 className="font-semibold text-gray-800">
                Team Collaboration
              </h4>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 flex items-center">
              <div className="bg-pink-100 p-2 rounded-lg mr-4">
                <i className="fas fa-clock text-pink-500"></i>
              </div>
              <h4 className="font-semibold text-gray-800">Time Management</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
