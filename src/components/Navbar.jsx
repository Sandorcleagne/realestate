"use client";
import React, { useState } from "react";
import { Phone, Logs } from "lucide-react";
import Hero from "./Hero";
import Link from "next/link";
import FullScreenDialog from "./FullScreenDialog";
import { navbarItems } from "@/lib/contants";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-6 md:px-4 lg:px-32 bg-transparent">
          <Link href="/" className="!no-underline">
            <p className="text-white font-bold uppercase leading-1">
              Sharma Properties
            </p>
          </Link>
          <ul className="hidden md:flex gap-7 text-white">
            {navbarItems.map((items) => (
              <a
                href={items?.link}
                className="cursor-pointer hover:text-gray-400"
                key={items?.id}
              >
                {items?.name}
              </a>
            ))}
          </ul>
          <a
            href="tel:+91-8882103359"
            className="md:flex justify-start items-center gap-2  px-4 md:px-8 py-2  hidden font-bold text-white"
          >
            <Phone
              className="w-4 h-4  animate-ring"
              style={{ animation: "ring 0.7s infinite" }} // Add the ring animation
              fill="white"
            />
            +91-8882103359
          </a>
          <Logs
            className="w-8 h-8 text-white flex md:hidden"
            onClick={() => handleClickOpen()}
          />
          <FullScreenDialog open={open} setOpen={setOpen} />
        </div>
        {/* -------------------------Mobile Menu---------------------------- */}
      </div>
      <Hero />
    </React.Fragment>
  );
};

export default Navbar;
