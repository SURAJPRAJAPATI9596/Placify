import React from "react";
import Hero from "./components/Hero";
import NumberHilight from "./components/NumberHilight";
import Features from "./components/Features";
import ProcessSteps from "./components/Process";
import NumberListData from "./components/NumberListData";

const Home = ({ dark, setDark }) => {
  return (
    <div className="bg-(--bg-primary) text-(--text-primary)">
      <Hero dark={dark} setDark={setDark} />
      <NumberHilight NumberListData={NumberListData} />
      <Features />
      <ProcessSteps />
    </div>
  );
};

export default Home;
