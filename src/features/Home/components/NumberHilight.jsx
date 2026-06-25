import NumberCard from "./NumberCard";
import React from "react";
import NumberListData from "./NumberListData";
const NumberHilight = () => {
  return (
    <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4    bg-(--bg-primary) text-(--text-primary) mr-10 ml-10">
      {NumberListData.map((value, index) => (
        <NumberCard key={index} title={value.title} number={value.number} />
      ))}
    </div>
  );
};

export default NumberHilight;
