import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjctsSection";
import ContactSection from "./components/ContactSection";
import ThemeToggle from "./components/ThemeToggle";

const Home = () => {
  return (
    <>
      <ThemeToggle/>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
