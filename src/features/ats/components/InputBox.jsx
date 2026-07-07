import React from "react";

const InputBox = ({ setJobDes, handleSubmit, selectedFile, jobDes }) => {
  const isDisabled = () => {
    if (!selectedFile || !jobDes) {
      return true;
    } else false;
  };

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
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          onChange={(e) => {
            setJobDes(e.target.value);
          }}
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
          onClick={() => {
            handleSubmit();
          }}
          className={`
             ${isDisabled() ? "bg-blue-400 opacity-50 cursor-not-allowed!" : ""}
          mt-5
          w-full!
          bg-blue-600
          text-white
          py-3
          rounded-xl
          `}
        >
          Analyze Resume
        </button>
      </form>
    </div>
  );
};

export default InputBox;
