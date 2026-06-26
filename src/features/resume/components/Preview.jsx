import React from "react";

const Preview = ({ dark }) => {
  return (
    <div>
      <div
        className={`
          sticky top-5
          rounded-xl
          p-8
          min-h-18.5
          ${dark ? "bg-gray-900" : "bg-white"}
          `}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Preview</h1>

          <p>Frontend Developer</p>
        </div>

        <hr className="my-5" />

        <Preview title="SUMMARY" />

        <Preview title="SKILLS" />

        <Preview title="PROJECTS" />

        <Preview title="EXPERIENCE" />

        <button
          className="
            mt-8 w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            "
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Preview;
