import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/assets/header_img_2.png')" }}
      id="Header"
    >
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h1 className="text-5xl font-bold sm:text-6xl md:text[82px] inline-block max-w-3xl sm:px-20 sm:leading-16">
          Explore Home That Fit your dreams
        </h1>
        <div className="flex justify-center items-center gap-2 mt-12 sm:mt-16 sm:gap-4">
          <a
            href="#properties"
            className="border border-white px-8 py-3 rounded uppercase text-sm !no-underline text-white"
          >
            Properties
          </a>
          <a
            href="#contact"
            className="border border-white bg-red-800 px-8 py-3 rounded uppercase text-sm !no-underline text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
