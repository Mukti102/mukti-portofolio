"use client";
import About from "@/components/pages/about";
import Hero from "@/components/pages/home";
import Project from "../(projects)/Projects/page";
import { Footer } from "flowbite-react";
import Skills from "@/components/pages/Skills";
import Contact from "@/components/pages/Contact";

function Home() {
  return (
    <div className="dark:bg-secondary sm:pb-0 pb-20 bg-gray-100">
      <Hero />
      {/* <About />
      <Skills />
      <Project />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
