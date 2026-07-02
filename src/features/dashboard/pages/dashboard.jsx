import React from "react";

import {
  FaCode,
  FaFire,
  FaTrophy,
  FaFileAlt,
  FaBrain,
  FaBriefcase,
  FaRoute,
  FaRobot,
  FaCheckCircle,
  FaStar,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const CircleProgress = ({ value, size = 110, title }) => {
  const radius = 45;

  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (value / 100) * circumference;

  const progressColor =
    value >= 80 ? "#22c55e" : value >= 50 ? "#eab308" : "#ef4444";

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--border-color)"
          strokeWidth="10"
          fill="none"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div
        className="
absolute
inset-0
flex
flex-col
items-center
justify-center
"
      >
        <h2 className="text-3xl font-bold">{value}%</h2>

        <p className="text-xs opacity-60">{title}</p>
      </div>
    </div>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
bg-(--card-bg)
border
border-(--border-color)
rounded-3xl
p-6
${className}
`}
    >
      {children}
    </div>
  );
};

const Dashboard = () => {
  const readiness = [
    {
      title: "Resume",
      value: 92,
      icon: FaFileAlt,
    },

    {
      title: "Coding",
      value: 78,
      icon: FaCode,
    },

    {
      title: "Interview",
      value: 74,
      icon: FaBrain,
    },

    {
      title: "Job Ready",
      value: 82,
      icon: FaBriefcase,
    },
  ];

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
`text-(--text-primary)
p-5
md:p-10
space-y-8
"
    >
      {/* HERO */}

      <Card>
        <div
          className="
flex
flex-col
lg:flex-row
justify-between
gap-8
"
        >
          <div className="flex gap-5 items-center">
            <img
              src="https://i.pravatar.cc/150"
              className="
w-28
h-28
rounded-full
object-cover
"
            />

            <div>
              <h1
                className="
text-4xl
font-bold
"
              >
                Welcome Suraj 👋
              </h1>

              <p className="opacity-60 mt-2">
                Frontend Developer Career Journey
              </p>

              <div
                className="
flex
gap-3
mt-5
flex-wrap
"
              >
                <span className="badge">React</span>

                <span className="badge">DSA</span>

                <span className="badge">JavaScript</span>
              </div>
            </div>
          </div>

          <div
            className="
flex
items-center
gap-5
"
          >
            <CircleProgress value={86} title="Career" />

            <div>
              <h2 className="text-xl font-bold">Career Score</h2>

              <p className="opacity-60">Excellent progress</p>
            </div>
          </div>
        </div>
      </Card>

      {/* READINESS */}

      <Card>
        <h2 className="text-2xl font-bold">Career Readiness</h2>

        <div
          className="
grid
sm:grid-cols-2
xl:grid-cols-4
gap-5
mt-8
"
        >
          {readiness.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
bg-black/10
rounded-2xl
p-5
flex
justify-between
items-center
"
              >
                <div>
                  <Icon
                    className="
text-blue-500
text-3xl
"
                  />

                  <p className="mt-3 opacity-70">{item.title}</p>
                </div>

                <CircleProgress value={item.value} size={85} />
              </div>
            );
          })}
        </div>
      </Card>

      {/* ROADMAP */}

      <Card>
        <div className="flex gap-3 items-center">
          <FaRoute
            className="
text-purple-500
text-3xl
"
          />

          <h2 className="text-2xl font-bold">Current Roadmap</h2>
        </div>

        <div
          className="
grid
lg:grid-cols-3
gap-6
mt-7
"
        >
          {/* following */}

          <div
            className="
bg-black/10
rounded-2xl
p-5
"
          >
            <p className="opacity-60">Following</p>

            <h2
              className="
text-xl
font-bold
mt-2
"
            >
              Frontend Engineer Path
            </h2>

            <p className="mt-3 opacity-70">
              React → Advanced JS → Performance → System Design
            </p>

            <div
              className="
h-3
bg-black/30
rounded-full
mt-5
"
            >
              <div
                className="
h-full
bg-green-500
rounded-full
w-[68%]
"
              />
            </div>

            <p className="text-sm mt-2 opacity-70">68% Completed</p>
          </div>

          {/* learned */}

          <div
            className="
bg-black/10
rounded-2xl
p-5
"
          >
            <h3 className="text-xl font-bold">Learned</h3>

            <div className="space-y-3 mt-5">
              <p>✓ HTML CSS</p>

              <p>✓ JavaScript ES6</p>

              <p>✓ React Hooks</p>

              <p>✓ API Integration</p>
            </div>
          </div>

          {/* next */}

          <div
            className="
bg-black/10
rounded-2xl
p-5
"
          >
            <h3 className="text-xl font-bold">Next To Learn</h3>

            <p className="mt-5">System Design</p>

            <p className="mt-2">Backend Architecture</p>

            <button
              className="
mt-6
bg-purple-600
px-6
py-3
rounded-xl
"
            >
              Learn
            </button>
          </div>
        </div>
      </Card>

      {/* RESUME */}

      <Card>
        <h2 className="text-2xl font-bold">Resume Center</h2>

        <div
          className="
flex
flex-col
md:flex-row
justify-between
items-center
gap-8
mt-7
"
        >
          <div
            className="
flex
items-center
gap-7
"
          >
            <CircleProgress value={92} title="ATS" />

            <div>
              <h2 className="text-xl font-bold">Modern Resume</h2>

              <p className="opacity-60">Last Updated Today</p>

              <p className="opacity-60">Frontend Developer Resume</p>
            </div>
          </div>

          <div
            className="
flex
gap-4
"
          >
            <button
              className="
bg-blue-600
px-5
py-3
rounded-xl
flex
gap-2
"
            >
              <FaEye />
              View
            </button>

            <button
              className="
bg-green-600
px-5
py-3
rounded-xl
flex
gap-2
"
            >
              <FaDownload />
              Download
            </button>
          </div>
        </div>
      </Card>

      {/* CODING */}

      <Card>
        <h2 className="text-2xl font-bold">Coding Mastery</h2>

        <div
          className="
grid
md:grid-cols-4
gap-5
mt-6
"
        >
          {[
            ["DSA", "Advanced"],
            ["React", "Expert"],
            ["Backend", "Intermediate"],
            ["AI", "Beginner"],
          ].map((item) => (
            <div
              className="
bg-black/10
rounded-xl
p-5
"
            >
              <h3 className="font-bold">{item[0]}</h3>

              <p className="opacity-70">{item[1]}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* JOB PIPELINE */}

      <Card>
        <h2 className="text-2xl font-bold">Job Pipeline</h2>

        <div
          className="
grid
md:grid-cols-3
gap-5
mt-6
"
        >
          {[
            ["Applied", 48],
            ["Interviews", 11],
            ["Offers", 3],
          ].map((x) => (
            <div
              className="
bg-black/10
p-5
rounded-xl
"
            >
              <h1 className="text-4xl font-bold">{x[1]}</h1>

              <p>{x[0]}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* ACTIVITY */}

      <Card>
        <h2 className="text-2xl font-bold">Platform Activity</h2>

        <div className="space-y-4 mt-5">
          <p>
            <FaCheckCircle className="inline text-green-500" />
            Resume Updated
          </p>

          <p>
            <FaFire className="inline text-orange-500" />
            14 Days Coding Streak
          </p>

          <p>
            <FaTrophy className="inline text-yellow-500" />
            Roadmap Milestone Completed
          </p>

          <p>
            <FaStar className="inline text-purple-500" />
            New Achievement
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
