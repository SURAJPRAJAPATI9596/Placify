import React from "react";
import ProgressBar from "./ProgressBar";
import AtsResultCard from "./AtsResultCard";
const KewordMatchPersentage = ({ dark }) => {
  return (
    <div>
      <div
        className="
          rounded-xl
          p-8
          text-center
          mb-8
          bg-(--bg-primary)
          border
          border-white/10
          "
      >
        <h2 className="text-2xl font-bold mb-6">ATS SCORE</h2>

        <ProgressBar score={84} circleSize={90} textSize="4xl" />

        <h3 className="mt-6 text-xl font-semibold text-green-500">
          Excellent Match
        </h3>
      </div>

      <div className="grid md:grid-cols-4 gap-5">
        {[
          ["Keywords", "88%"],
          ["Skills", "82%"],
          ["Formatting", "95%"],
          ["Experience", "76%"],
        ].map((item, index) => (
          <AtsResultCard
            key={index}
            title={item[0]}
            score={item[1]}
            dark={dark}
          />
        ))}
      </div>
    </div>
  );
};

export default KewordMatchPersentage;
