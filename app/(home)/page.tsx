import CallToAction from "@/components/home/Call-to-Action";
import FeactureSection from "@/components/home/Feacture-Section";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/header/Navbar";
import HeroSection from "@/components/home/hero-section";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeactureSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
