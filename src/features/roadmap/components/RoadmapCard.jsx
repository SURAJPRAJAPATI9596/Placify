import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCloud,
  FaJava,
  FaPython,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const RoadmapCard = ({ item }) => {
  return (
    <div
      key={item.title}
      className="
bg-(--card-bg)
border
border-(--border-color)
rounded-3xl
p-6
hover:-translate-y-2
transition
"
    >
      <div
        className="
flex
justify-between
"
      >
        <div
          className="
flex
gap-4
items-center
"
        >
          <div
            className="
p-4
rounded-2xl
bg-purple-500/20
"
          >
            <item.icon size={28} />
          </div>

          <div>
            <h2
              className="
text-xl
font-bold
"
            >
              {item.title}
            </h2>

            <p
              className="
opacity-60
text-sm
"
            >
              {item.level}
            </p>
          </div>
        </div>
      </div>

      <p
        className="
opacity-70
mt-5
"
      >
        {item.description}
      </p>

      <div
        className="
mt-6
"
      >
        <div
          className="
flex
justify-between
text-sm
"
        >
          <span>Progress</span>

          <span>{item.progress}%</span>
        </div>

        <div
          className="
h-3
bg-black/20
rounded-full
mt-2
overflow-hidden
"
        >
          <div
            className={`
h-full
rounded-full
${item.color}
`}
            style={{
              width: `${item.progress}%`,
            }}
          />
        </div>
      </div>

      <div
        className="
flex
justify-between
items-center
mt-6
"
      >
        <span
          className="
opacity-70
"
        >
          {item.duration}
        </span>

        <NavLink to={"/Placify/roadmaps/detail"}>
          <button
            className="
flex
items-center
gap-2
bg-purple-600
px-5
py-2
rounded-xl
"
          >
            Start
            <FaArrowRight />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default RoadmapCard;
