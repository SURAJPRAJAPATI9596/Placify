import React from "react";
import NumberCounter from "../NumberCounter";
const NumberCard = ({ value }) => {
  return (
    <div className="bg-(--bg-primary) text-(--text-primary) h-28 rounded-[26px] border border-[#2b2b42]  px-7 flex flex-col justify-center items-center">
      <h2 className="text-[42px] leading-none font-bold bg-linear-to-r from-[#9b5cff] to-[#a878ff] bg-clip-text text-transparent">
        <NumberCounter number={value.number} time={5} />
      </h2>

      <p className="mt-3 text-[17px] text-[#a3a3bd] font-medium">
        {value.title}
      </p>
    </div>
  );
};

export default NumberCard;
