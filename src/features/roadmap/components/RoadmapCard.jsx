import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const RoadmapCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-(--bg-primary) text-(--text-primary) p-5 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Image Section */}

      <div className=" relative h-52 overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* overlay */}

        <div className=" absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

        <span className="absolute top-4 right-4 rounded-full bg-blue-600/80 px-4 py-2 text-sm text-white ">
          {item.level}
        </span>
      </div>

      {/* Content */}

      <div className="mt-5">
        <h2 className="text-2xl font-bold">{item.title}</h2>

        <p className=" mt-3 text-sm opacity-70 leading-6">{item.description}</p>

        {/* skills */}

        <div className=" mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-fullbg-white/10
            px-3
            py-1
            text-sm
            "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* progress */}

        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <span>Progress</span>

            <span>{item.progress}%</span>
          </div>

          <div className=" mt-2 h-2 rounded-full bg-gray-700">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{
                width: `${item.progress}%`,
              }}
            />
          </div>
        </div>

        {/* Button */}

        <button className=" mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white transition-all hover:bg-blue-700 group-hover:gap-4  ">
          <NavLink to={"/Placify/roadmaps/detail"}>View Roadmap</NavLink>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RoadmapCard;
