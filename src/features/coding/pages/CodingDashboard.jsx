import React from "react";
import { Trophy, Flame, Target, Code2, ArrowRight, Zap } from "lucide-react";

const CodingDashboard = () => {
  const stats = [
    {
      title: "Solved",
      value: "124",
      icon: Trophy,
    },

    {
      title: "Streak",
      value: "14 Days",
      icon: Flame,
    },

    {
      title: "Accuracy",
      value: "86%",
      icon: Target,
    },

    {
      title: "Rating",
      value: "1820",
      icon: Code2,
    },
  ];

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
p-6
pt-24
"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div
          className="
flex
justify-between
items-center
flex-wrap
gap-5
"
        >
          <div>
            <h1
              className="
text-4xl
font-bold
"
            >
              Coding Dashboard
            </h1>

            <p
              className="
mt-3
opacity-70
"
            >
              Track your coding journey and prepare for interviews
            </p>
          </div>

          <div
            className="
bg-blue-500/20
px-5
py-3
rounded-xl
flex
gap-2
items-center
"
          >
            <Zap />
            Level 12
          </div>
        </div>

        {/* Stats */}

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
rounded-3xl
p-6
border
border-white/10
hover:-translate-y-2
transition
"
            >
              <item.icon size={32} />

              <p
                className="
mt-5
opacity-70
"
              >
                {item.title}
              </p>

              <h2
                className="
text-4xl
font-bold
mt-2
"
              >
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Main */}

        <div
          className="
grid
lg:grid-cols-2
gap-8
mt-12
"
        >
          {/* Circular progress */}

          <div
            className="
bg-white/10
rounded-3xl
p-8
flex
flex-col
items-center
"
          >
            <h2 className="text-2xl font-bold">Overall Progress</h2>

            <div
              className="
mt-8
w-52
h-52
rounded-full
flex
items-center
justify-center
"
              style={{
                background: "conic-gradient(#3b82f6 72%,#222 0)",
              }}
            >
              <div
                className="
w-40
h-40
rounded-full
bg-(--bg-primary)
flex
flex-col
items-center
justify-center
"
              >
                <h2 className="text-4xl font-bold">72%</h2>

                <p>Completed</p>
              </div>
            </div>
          </div>

          {/* Continue learning */}

          <div
            className="
bg-white/10
rounded-3xl
p-8
"
          >
            <h2
              className="
text-2xl
font-bold
"
            >
              Continue Learning
            </h2>

            <p className="mt-4 opacity-70">React Interview Preparation</p>

            <div
              className="
h-3
bg-black/30
rounded-full
mt-6
overflow-hidden
"
            >
              <div
                className="
h-full
bg-blue-600
rounded-full
w-[65%]
"
              />
            </div>

            <button
              className="
mt-8
bg-blue-600
px-6
py-3
rounded-xl
flex
gap-2
items-center
"
            >
              Continue
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Daily Challenge */}

        <div
          className="
mt-10
rounded-3xl
p-8
bg-linear-to-r
from-blue-600
to-purple-600
"
        >
          <h2
            className="
text-3xl
font-bold
"
          >
            Daily Challenge
          </h2>

          <p className="mt-3">
            Solve today's problem and maintain your streak 🔥
          </p>

          <button
            className="
mt-6
bg-white
text-black
px-6
py-3
rounded-xl
"
          >
            Start Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingDashboard;
