import NumberCard from "./NumberCard";
import React from "react";
import NumberListData from "../../../features/Home/components/NumberListData";

const NumberHilight = ({ NumberListData }) => {
  return (
    <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4    bg-(--bg-primary) text-(--text-primary) mr-10 ml-10 pt-8">
      {NumberListData.map((value, index) => (
        <NumberCard key={index} value={value} />
      ))}
    </div>
  );
};

export default NumberHilight;
