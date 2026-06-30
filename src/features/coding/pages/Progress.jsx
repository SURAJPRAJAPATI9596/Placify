import React from "react";
import { Trophy, Flame, Target, Code2, TrendingUp } from "lucide-react";

const CodingDashboard = () => {
  const stats = [
    {
      title: "Solved",
      value: "245",
      icon: Trophy,
    },
    {
      title: "Streak",
      value: "18 Days",
      icon: Flame,
    },
    {
      title: "Accuracy",
      value: "89%",
      icon: Target,
    },
    {
      title: "Rating",
      value: "1820",
      icon: Code2,
    },
  ];

  const skills = [
    {
      name: "DSA",
      progress: 72,
    },

    {
      name: "Frontend",
      progress: 88,
    },

    {
      name: "Backend",
      progress: 48,
    },

    {
      name: "AI",
      progress: 25,
    },
  ];

  const getColor = (value) => {
    if (value >= 75) return "bg-green-500";

    if (value >= 40) return "bg-yellow-500";

    return "bg-red-500";
  };

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
p-6
py-32
"
    >
      <div
        className="
max-w-7xl
mx-auto
"
      >
        {/* Header */}

        <div
          className="
flex
justify-between
items-center
"
        >
          <div>
            <h1
              className="
text-4xl
font-bold
"
            >
              Coding Dashboard 🚀
            </h1>

            <p
              className="
opacity-70
mt-2
"
            >
              Track your preparation and improve daily
            </p>
          </div>

          <div
            className="
hidden md:flex
items-center
gap-3
bg-blue-600/20
px-5
py-3
rounded-xl
"
          >
            <TrendingUp />
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
rounded-3xl
p-6
bg-white/10
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

        {/* Main Grid */}

        <div
          className="
grid
lg:grid-cols-2
gap-8
mt-12
"
        >
          {/* Skill progress */}

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
              Skill Progress
            </h2>

            <div
              className="
mt-8
space-y-7
"
            >
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div
                    className="
flex
justify-between
"
                  >
                    <span>{skill.name}</span>

                    <span>{skill.progress}%</span>
                  </div>

                  <div
                    className="
h-3
bg-black/30
rounded-full
mt-2
overflow-hidden
"
                  >
                    <div
                      className={`
h-full
${getColor(skill.progress)}
rounded-full
transition-all
`}
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Circular analytics */}

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
              Weekly Activity
            </h2>

            <div
              className="
flex
items-center
justify-center
mt-8
"
            >
              <div
                className="
relative
w-44
h-44
rounded-full
bg-linear-to-r
from-blue-500
to-purple-500
flex
items-center
justify-center
"
              >
                <div
                  className="
w-32
h-32
rounded-full
bg-(--bg-primary)
flex
flex-col
items-center
justify-center
"
                >
                  <h2
                    className="
text-3xl
font-bold
"
                  >
                    86%
                  </h2>

                  <p>Consistency</p>
                </div>
              </div>
            </div>

            <div
              className="
grid
grid-cols-7
gap-3
mt-10
"
            >
              {[30, 70, 40, 90, 60, 80, 50].map((x, i) => (
                <div
                  key={i}
                  className="
flex
flex-col
items-center
gap-2
"
                >
                  <div
                    className="
w-5
rounded-full
bg-blue-500
"
                    style={{
                      height: `${x}px`,
                    }}
                  />

                  <span className="text-sm">M</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continue learning */}

        <div
          className="
mt-10
bg-linear-to-r
from-blue-600
to-purple-600
rounded-3xl
p-8
"
        >
          <h2
            className="
text-3xl
font-bold
"
          >
            Continue Learning
          </h2>

          <p
            className="
mt-3
"
          >
            React Interview Preparation
          </p>

          <div
            className="
h-3
bg-white/30
rounded-full
mt-6
"
          >
            <div
              className="
h-full
bg-white
rounded-full
w-[70%]
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingDashboard;
