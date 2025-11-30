import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-pink-400"></i>
                    <a
                      href="mailto:malekabaatile@gmail.com?subject=Portfolio Inquiry&body=Hi Zandile, I came across your portfolio and would like to connect!"
                      className="text-gray-300 hover:text-white"
                    >
                      malekabaatile@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-linkedin-in text-pink-400"></i>
                    <span className="text-white">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-github text-pink-400"></i>
                    <span className="text-white">Github</span>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-twitter text-pink-400"></i>
                    <span className="text-white"> Twitter</span>
                  </a>
                </div>
              </div>
              

              {/* Availability */}
              <div className="pt-6 border-t border-gray-700">
                <p className="text-gray-300 italic">
                  I'm currently available for freelance work and open to
                  discussing new projects, creative ideas, or opportunities to
                  be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
