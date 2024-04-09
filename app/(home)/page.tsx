"use client";
import Navbar from "@/components/ui/Navbar";
import HomeSection from "@/components/Home/Hero/index";
import Project from "@/components/Home/Projects";
import Skils from "@/components/Home/Skills";
import Footer from "@/components/ui/Footer";

function Home() {
  return (
    <div className="dark:bg-secondary bg-white">
      <Navbar />
      <HomeSection />
      <Skils />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
