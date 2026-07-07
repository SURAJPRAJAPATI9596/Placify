import React from "react";
import ProgressBar from "./ProgressBar";

const AtsResultCard = ({ title = "test", score, dark }) => {
  return (
    <div
      data-aos="fade-up"
      className="
rounded-2xl
p-6
bg-(--bg-primary)
text-(--text-primary)
border
border-white/10
hover:-translate-y-2
transition
"
    >
      <p
        className="
text-center
font-bold
text-xl
"
      >
        {title}
      </p>

      <ProgressBar score={score} textSize="2xl" dark={dark} />
    </div>
  );
};

export default AtsResultCard;
