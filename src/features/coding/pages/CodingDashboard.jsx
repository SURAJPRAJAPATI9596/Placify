import React from "react";
import { Trophy, Flame, Target, Code2, ArrowRight } from "lucide-react";

const CodingDashboard = () => {
  const stats = [
    {
      title: "Problems Solved",
      value: "124",
      icon: Trophy,
    },

    {
      title: "Current Streak",
      value: "14 Days",
      icon: Flame,
    },

    {
      title: "Accuracy",
      value: "86%",
      icon: Target,
    },

    {
      title: "Global Rank",
      value: "#245",
      icon: Code2,
    },
  ];

  const tracks = [
    {
      title: "DSA Mastery",
      description: "Arrays, Trees, Graphs, Dynamic Programming",
      progress: 70,
    },

    {
      title: "Frontend Coding",
      description: "JavaScript, React, UI Problems",
      progress: 55,
    },

    {
      title: "Backend Coding",
      description: "Node, API, Database Problems",
      progress: 40,
    },
  ];

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
p-6
pt-20
"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className="
text-4xl
font-bold
"
        >
          Coding Hub
        </h1>

        <p
          className="
opacity-70
mt-3
text-lg
"
        >
          Improve your coding skills and prepare for real company interviews
        </p>

        {/* stats */}

        <div
          className="
grid
grid-cols-2
lg:grid-cols-4
gap-5
mt-10
"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="
bg-white/10
rounded-2xl
p-6
"
            >
              <item.icon />

              <p className="mt-4 opacity-70">{item.title}</p>

              <h2
                className="
text-3xl
font-bold
mt-2
"
              >
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <h2
          className="
text-3xl
font-bold
mt-14
"
        >
          Learning Paths
        </h2>

        <div
          className="
grid
md:grid-cols-3
gap-6
mt-6
"
        >
          {tracks.map((track) => (
            <div
              key={track.title}
              className="
bg-white/10
rounded-2xl
p-6
hover:-translate-y-2
transition
"
            >
              <h3 className="text-xl font-bold">{track.title}</h3>

              <p className="opacity-70 mt-3">{track.description}</p>

              <div
                className="
h-2
bg-gray-700
rounded-full
mt-6
"
              >
                <div
                  className="
h-full
bg-blue-600
rounded-full
"
                  style={{
                    width: `${track.progress}%`,
                  }}
                />
              </div>

              <div className="flex justify-between mt-3">
                <span>Progress</span>

                <span>{track.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
mt-14
bg-linear-to-r
from-blue-600
to-purple-600
rounded-3xl
p-8
flex
justify-between
items-center
"
        >
          <div>
            <h2
              className="
text-3xl
font-bold
"
            >
              Ready for today's challenge?
            </h2>

            <p className="mt-3">
              Solve daily problems and improve your ranking.
            </p>
          </div>

          <button
            className="
bg-white
text-black
px-6
py-3
rounded-xl
flex
gap-2
"
          >
            Practice
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingDashboard;
