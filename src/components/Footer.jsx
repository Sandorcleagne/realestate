import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-red-800 overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 py-10 text-white">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Link href="/" className="!no-underline">
            <p className="text-white font-bold uppercase leading-1">
              Sharma Properties
            </p>
          </Link>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis sit deserunt harum aperiam dicta doloremque rerum ea,
            optio facere quos, ut eligendi error nisi tempora necessitatibus
            libero maxime esse nam!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#Header" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link
                href="#properties"
                className="text-gray-300 hover:text-white"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">+91-8882103359</p>
          <p className="text-gray-300"> </p>
        </div>
      </div>
      <div className="text-white border-t border-gray-700 py-4 text-center">
        Copyright 2025 &copy; Sharma Properties. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
