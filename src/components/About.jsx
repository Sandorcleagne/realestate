import React from "react";
import { assets } from "../../public/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light ">
          Our Brand
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Property, Dedicated to your vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <Image
          src={assets?.brand_img}
          alt="about-us"
          fill={false} // or remove width/height
          className="rounded-lg w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2  gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p>10+</p>
              <p>Years of Exellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
