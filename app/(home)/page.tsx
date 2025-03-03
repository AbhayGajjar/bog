import CallToAction from "@/components/home/Call-to-Action";
import Faq from "@/components/home/Faq";
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
      <Faq/>
      <Footer />
    </div>
  );
};

export default Home;
