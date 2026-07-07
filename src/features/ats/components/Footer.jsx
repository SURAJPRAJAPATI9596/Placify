import React, { useState } from "react";
import FlashMessage from "./../../../components/common/FlashMessage";
const Footer = ({ atsData }) => {
  const [flash, setFlash] = useState(false);
  const isFlash = (prev) => {
    return setFlash(!prev);
  };
  return (
    <div className="mt-10 p-8 rounded-xl text-center  bg-(--bg-primary) text-(--text-primary)">
      <div>
        {flash && (
          <FlashMessage
            show={true}
            type="error"
            title="Placify Error"
            message="Right now this feature is temprarily removed from our platform sorry for inconvinience"
            duration={4000}
            onClose={() => {}}
            position="top-center"
          />
        )}
      </div>
      <h2 className="text-3xl font-bold">ATS Friendly</h2>

      <p className="mt-3 bg-(--bg-primary) text-(--text-primary)">
        {atsData.atsFriendly
          ? "Good! Your resume can pass ATS successfull! still you can improve our suggestions"
          : "Yeah you are doing good just need some improvement never give up!"}
      </p>

      <button
        onClick={() => {
          isFlash(false);
        }}
        className="
          mt-6 bg-blue-600
          px-8 py-3
          rounded-xl
          text-white"
      >
        Download Report
      </button>
    </div>
  );
};

export default Footer;
