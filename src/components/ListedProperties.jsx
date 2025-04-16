"use client ";
import Image from "next/image";
import React, { useEffect } from "react";
import { assets, projectsData } from "../../public/assets/assets";

const ListedProperties = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(1);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4); // 4 cards for large screens
      } else {
        setCardsToShow(1); // 1 card for extra small screens
      }
    };
    updateCardsToShow(); // Set initial value
    window.addEventListener("resize", updateCardsToShow); // Update on resize
    return () => {
      window.removeEventListener("resize", updateCardsToShow); // Cleanup event listener on unmount
    };
  }, []);
  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };
  const previousProperty = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="properties"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Listed{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Properties
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Property"
          onClick={previousProperty}
        >
          <Image
            src={assets?.left_arrow}
            alt="left-arrow"
            width={10}
            height={10}
          />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Property"
          onClick={nextProperty}
        >
          <Image
            src={assets?.right_arrow}
            alt="right-arrow"
            width={10}
            height={10}
          />
        </button>
      </div>
      {/* Property Cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex shrink-0 w-full sm:w-1/4">
              <Image
                src={project?.image}
                alt={project?.title}
                fill={false}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h3 className="text-xl  font-semibold text-gray-800">
                    {project?.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project?.price}
                    <span>|</span>
                    {project?.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedProperties;
