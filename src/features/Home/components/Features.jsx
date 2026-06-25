import React from "react";
import FeatureCard from "./FeatureCard";
import featuresData from "../../../data/featuresData";

// (image, title, description);
const Features = () => {
  return (
    <section className="bg-(--bg-primary) text-(--text-primary) w-screen mt-24 sm:pl-10 sm:pr-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Everything you need. One platform.
        </h2>

        <p className="mt-4 text-gray-500">
          Six powerful modules covering every step of the placement journey.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-8  pl-6 pr-6 pt-4 ">
        {featuresData.map((item, index) => (
          <FeatureCard
            key={item.featureTitle}
            title={item.featureTitle}
            description={item.featureDescription}
            image={item.featureImg}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
