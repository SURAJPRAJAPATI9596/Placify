import React, { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import axios from "axios";
import { Play, Send, GripVertical } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leftWidth, setLeftWidth] = useState(45);
  const [problem, setProblem] = useState({});
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
  useEffect(() => {
    const fetchProblem = async () => {
      const response = await axios.get(`/api/v1/coding/problems/${id}`);
      setProblem(response.data.data);
    };
    fetchProblem();
  }, []);

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
        <div className="flex justify-around items-center">
          <h1
            className="
text-3xl
font-bold
"
          >
            {problem?.title}
          </h1>
          <button
            onClick={() => {
              navigate("/coding", {
                state: {
                  tab: 2,
                },
              });
            }}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 text-sm font-semibold"
          >
            {"</>"}
          </button>
        </div>

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
          {problem?.description}
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
          {problem?.example}
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
          {problem?.testCases?.map((value, index) => (
            <div
              className="
bg-white/10
p-4
rounded-xl
"
            >
              Case {index + 1} : <span className="text-green-400">{value}</span>
            </div>
          ))}
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
      <CodeEditor leftWidth={leftWidth} id={id} problem={problem} />
    </div>
  );
};

export default ProblemDetail;
