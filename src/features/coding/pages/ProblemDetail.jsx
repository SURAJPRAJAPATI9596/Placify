import React, { useState } from "react";
import { Play, Send, GripVertical } from "lucide-react";

const ProblemDetail = () => {
  const [leftWidth, setLeftWidth] = useState(45);

  const [language, setLanguage] = useState("JavaScript");

  const [code, setCode] = useState(
    `function twoSum(nums,target){

  // write solution

}`,
  );

  const languages = ["JavaScript", "Python", "Java", "C++"];

  const startResize = (e) => {
    e.preventDefault();

    const startX = e.clientX;

    const startWidth = leftWidth;

    const resize = (event) => {
      const diff = ((event.clientX - startX) / window.innerWidth) * 100;

      let newWidth = startWidth + diff;

      if (newWidth < 25) newWidth = 25;

      if (newWidth > 70) newWidth = 70;

      setLeftWidth(newWidth);
    };

    const stop = () => {
      window.removeEventListener("mousemove", resize);

      window.removeEventListener("mouseup", stop);
    };

    window.addEventListener("mousemove", resize);

    window.addEventListener("mouseup", stop);
  };

  return (
    <div
      className="mt-11
h-screen
bg-(--bg-primary)
text-(--text-primary)
flex
overflow-hidden
"
    >
      {/* LEFT PANEL */}

      <div
        style={{
          width: `${leftWidth}%`,
        }}
        className="
p-6
overflow-y-auto
"
      >
        <h1
          className="
text-3xl
font-bold
"
        >
          Two Sum
        </h1>

        <div
          className="
flex
gap-3
mt-5
"
        >
          <span
            className="
bg-green-500/20
px-4
py-1
rounded-full
"
          >
            Easy
          </span>

          <span
            className="
bg-blue-500/20
px-4
py-1
rounded-full
"
          >
            Array
          </span>
        </div>

        <p
          className="
mt-8
leading-7
opacity-80
"
        >
          Given an integer array nums, return indices of two numbers such that
          they add up to target.
        </p>

        <h2
          className="
text-xl
font-bold
mt-8
"
        >
          Example
        </h2>

        <pre
          className="
bg-black/40
p-5
rounded-xl
mt-3
"
        >
          Input: nums=[2,7,11,15] target=9 Output: [0,1]
        </pre>

        <h2
          className="
text-xl
font-bold
mt-8
"
        >
          Test Cases
        </h2>

        <div
          className="
mt-4
space-y-3
"
        >
          <div
            className="
bg-white/10
p-4
rounded-xl
"
          >
            Case 1<span className="text-green-400">Passed</span>
          </div>

          <div
            className="
bg-white/10
p-4
rounded-xl
"
          >
            Case 2<span className="text-yellow-400">Pending</span>
          </div>
        </div>
      </div>

      {/* RESIZER */}

      <div
        onMouseDown={startResize}
        className="
w-2
cursor-col-resize
bg-white/10
hover:bg-blue-500
flex
items-center
justify-center
"
      >
        <GripVertical size={18} />
      </div>

      {/* RIGHT PANEL */}

      <div
        style={{
          width: `${100 - leftWidth}%`,
        }}
        className="
flex
flex-col
"
      >
        {/* EDITOR HEADER */}

        <div
          className="
h-14
flex
items-center
justify-between
px-5
border-b
border-white/10
"
        >
          <h2 className="font-bold">Code</h2>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="
bg-white/10
px-4
py-2
rounded-lg
outline-none
"
          >
            {languages.map((x) => (
              <option key={x} className="text-black">
                {x}
              </option>
            ))}
          </select>
        </div>

        {/* EDITOR */}

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="
flex-1
bg-black
text-green-400
p-6
font-mono
outline-none
resize-none
"
        />

        {/* ACTIONS */}

        <div
          className="
p-4
flex
gap-4
border-t
border-white/10
"
        >
          <button
            className="
bg-green-600
px-6
py-3
rounded-xl
flex
gap-2
"
          >
            <Play size={18} />
            Run
          </button>

          <button
            className="
bg-blue-600
px-6
py-3
rounded-xl
flex
gap-2
"
          >
            <Send size={18} />
            Submit
          </button>
        </div>

        {/* OUTPUT */}

        <div
          className="
h-32
bg-black
p-5
"
        >
          <h3>Output</h3>

          <p className="text-green-400 mt-2">Your result appears here</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
