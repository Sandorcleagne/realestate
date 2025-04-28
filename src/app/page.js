"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ListedProperties from "@/components/ListedProperties";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <About />
      <ListedProperties />
      <Testimonials />
      <Contact />
    </>
  );
}
