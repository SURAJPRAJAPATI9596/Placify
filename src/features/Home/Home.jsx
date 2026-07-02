import React from "react";
import Hero from "./components/Hero";
import NumberHilight from "./components/NumberHilight";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import NumberListData from "./components/NumberListData";
import Testimonials from "./components/Testimonials";
import RoadmapPreview from "./components/RoadmapPreview";
import FAQSection from "./components/FAQSection";
const Home = ({ dark, setDark }) => {
  return (
    <div className="bg-(--bg-primary) text-(--text-primary)">
      <Hero dark={dark} setDark={setDark} />
      <Features />
      <NumberHilight NumberListData={NumberListData} />
      <RoadmapPreview />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Home;
