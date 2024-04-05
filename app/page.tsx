"use client";
import Navbar from "@/components/shared/Navbar";
import HomeSection from "@/components/Home/Hero/index";
import Project from "@/components/Home/Projects";
import Skils from "@/components/Home/Skills";
import Footer from "@/components/shared/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Skils />
      <Project />
      <Footer />
    </>
  );
}

export default Home;
