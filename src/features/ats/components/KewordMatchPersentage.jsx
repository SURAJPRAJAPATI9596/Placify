import React from "react";
import ProgressBar from "./ProgressBar";
import AtsResultCard from "./AtsResultCard";
const KewordMatchPersentage = ({ atsData }) => {
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

        <ProgressBar score={atsData.atsScore} circleSize={90} textSize="4xl" />

        <h3 className="mt-6 text-xl font-semibold text-green-500">
          {atsData?.matchLevel}
        </h3>
      </div>
      <div className="text-2xl font-bold mb-10 mb-10">Match Score</div>
      <div className="grid md:grid-cols-4 gap-5">
        {atsData.matchScore?.map((item, index) => (
          <AtsResultCard key={index} score={item.score} title={item.title}>
            {item.title}
          </AtsResultCard>
        ))}
      </div>
      <div className="text-2xl font-bold mt-10 mb-10">Section Score</div>
      <div className="grid md:grid-cols-4 gap-5">
        {atsData.sectionScores?.map((item, index) => (
          <AtsResultCard key={index} score={item.score} title={item.title}>
            {item.title}
          </AtsResultCard>
        ))}
      </div>
    </div>
  );
};

export default KewordMatchPersentage;
