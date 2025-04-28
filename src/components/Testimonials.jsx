import React from "react";
import { assets, testimonialsData } from "../../public/assets/assets";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Real stories of those who found home with us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <Image
              src={testimonial?.image}
              fill={false}
              alt="customers"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial?.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial?.title}</p>
            <div className="flex justify-center items-center gap-1 mb-4">
              {Array.from({ length: testimonial?.rating }, (item, index) => (
                <Image
                  key={index}
                  src={assets?.star_icon}
                  alt="stars"
                  fill={false}
                />
              ))}{" "}
            </div>
            <p className="text-gray-600">{testimonial?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
