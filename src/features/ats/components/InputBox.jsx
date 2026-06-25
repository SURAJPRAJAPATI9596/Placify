import React from "react";

const InputBox = () => {
  return (
    <div
      className="
          p-6
          rounded-xl
          border
          border-white/10
          bg-(--bg-primary)
          "
    >
      <h2 className="text-2xl font-bold mb-5 text-center">Job Description</h2>

      <textarea
        placeholder="Paste job description here..."
        className="
            w-full
            h-48
            p-4
            rounded-xl
            bg-transparent
            border
            outline-none
            "
      />

      <button
        className="
          mt-5
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          "
      >
        Analyze Resume
      </button>
    </div>
  );
};

export default InputBox;
