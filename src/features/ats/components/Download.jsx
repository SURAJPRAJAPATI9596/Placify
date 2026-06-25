import React from "react";

const Download = ({ dark }) => {
  return (
    <div className="mt-10 p-8 rounded-xl text-center  bg-(--bg-primary) text-(--text-primary)">
      <h2 className="text-3xl font-bold">🟢 ATS Friendly</h2>

      <p className="mt-3 bg-(--bg-primary) text-(--text-primary)">
        Your resume can successfully pass ATS systems.
      </p>

      <button
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

export default Download;
