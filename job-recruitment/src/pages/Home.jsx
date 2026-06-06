import React from "react";

import Navbar from "../components/navbar";
import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import FeaturedJobs from "../sections/FeaturedJobs";
import CategoriesSection from "../sections/CategoriesSection";
import HowItWorks from "../sections/HowItWorks";
import WhyChooseUs from "../sections/WhyChooseUs";
import CTASection from "../sections/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturedJobs />
      <CategoriesSection />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;
