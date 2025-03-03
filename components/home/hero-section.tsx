import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
            Empower Your Learning with NodeNotes
          </p>
          <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
            Stay ahead in backend development with expert tutorials, in-depth
            articles, and real-world project insights on Node.js and modern web
            technologies.
          </h1>
          <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <a
              href="#"
              title=""
              className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Start Reading
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900  transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Build with Node.js
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative mx-auto mt-4 md:mt-8">
          <div className="lg:max-w-4xl lg:mx-auto">
            <img
              className="px-4 md:mpx-8"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
