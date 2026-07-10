import React from "react";
import { Play, Send, GripVertical } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const CodeEditor = ({ leftWidth, id, problem }) => {
  const [language, setLanguage] = useState("JavaScript");
  const [result, setResult] = useState({});
  const languages = ["JavaScript", "Python", "Java", "C++"];
  const [code, setCode] = useState("");

  const handleRun = async () => {
    const response = await axios.post(`/api/v1/coding/problems/${id}`, {
      code: code,
      problem: problem,
    });
    const data = JSON.parse(response.data.solution);
    setResult(data);
    console.log(data);
  };
  return (
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
        placeholder="Write you code here........"
        spellCheck="false"
        autoCorrect="off"
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
          onClick={handleRun}
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
        <NavLink to={"/Placify/coding/submission"}>
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
        </NavLink>
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

        {result ? (
          <div>
            {result?.success ? (
              <p className="text-green-400 mt-2">Your solution is correct</p>
            ) : (
              <p className="text-green-400 mt-2">
                Your solution is not correct
              </p>
            )}
          </div>
        ) : (
          <div>Your result will aprea here</div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
