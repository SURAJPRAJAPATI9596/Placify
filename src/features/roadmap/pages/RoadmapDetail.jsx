import React from "react";
import {
  FaPlay,
  FaBook,
  FaCode,
  FaCheckCircle,
  FaLock,
  FaProjectDiagram,
  FaArrowLeft,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const RoadmapDetail = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: "HTML & CSS Fundamentals",
      status: "completed",
      topics: ["HTML Structure", "CSS Layout", "Responsive Design"],
      progress: 100,
    },

    {
      title: "JavaScript Mastery",
      status: "current",
      topics: ["Variables", "Functions", "Async JS", "DOM"],
      progress: 60,
    },

    {
      title: "React Development",
      status: "locked",
      topics: ["Components", "Hooks", "State Management"],
      progress: 0,
    },

    {
      title: "Real World Project",
      status: "locked",
      topics: ["Build UI", "API Integration", "Deployment"],
      progress: 0,
    },
  ];

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
px-6
py-24
"
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="
flex
items-center
gap-2
opacity-70
mb-6
"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* HERO */}

        <div
          className="
bg-linear-to-r
from-purple-700
to-indigo-700
rounded-3xl
p-10
text-white
"
        >
          <h1
            className="
text-5xl
font-bold
"
          >
            Frontend Development
          </h1>

          <p
            className="
mt-4
opacity-90
max-w-2xl
"
          >
            Become a professional frontend developer by mastering modern web
            technologies and building real projects.
          </p>

          <div
            className="
grid
md:grid-cols-3
gap-5
mt-8
"
          >
            <div
              className="
bg-white/20
p-5
rounded-2xl
"
            >
              <h3>Duration</h3>

              <h2 className="font-bold text-2xl">12 Weeks</h2>
            </div>

            <div
              className="
bg-white/20
p-5
rounded-2xl
"
            >
              <h3>Level</h3>

              <h2 className="font-bold text-2xl">Beginner</h2>
            </div>

            <div
              className="
bg-white/20
p-5
rounded-2xl
"
            >
              <h3>Progress</h3>

              <h2 className="font-bold text-2xl">72%</h2>
            </div>
          </div>
        </div>

        {/* CURRENT */}

        <div
          className="
mt-10
bg-(--card-bg)
border
border-(--border-color)
rounded-3xl
p-8
"
        >
          <div
            className="
flex
justify-between
items-center
"
          >
            <div>
              <h2 className="text-2xl font-bold">Continue Learning</h2>

              <p className="opacity-70 mt-2">JavaScript Async Programming</p>
            </div>

            <button
              className="
bg-purple-600
px-6
py-3
rounded-xl
flex
gap-2
"
            >
              <FaPlay />
              Continue
            </button>
          </div>
        </div>

        {/* MODULES */}

        <h2
          className="
text-3xl
font-bold
mt-14
"
        >
          Learning Path
        </h2>

        <div
          className="
mt-8
space-y-6
"
        >
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="
bg-(--card-bg)
border
border-(--border-color)
rounded-3xl
p-7
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
w-12
h-12
rounded-full
bg-purple-600/20
flex
items-center
justify-center
"
                  >
                    {module.status === "locked" ? (
                      <FaLock />
                    ) : (
                      <FaCheckCircle />
                    )}
                  </div>

                  <div>
                    <h2
                      className="
text-xl
font-bold
"
                    >
                      {index + 1}. {module.title}
                    </h2>

                    <p
                      className="
opacity-60
"
                    >
                      {module.status === "locked"
                        ? "Complete previous module"
                        : "Available"}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="
grid
md:grid-cols-2
gap-4
mt-6
"
              >
                {module.topics.map((topic) => (
                  <NavLink to={"/roadmaps/detail/topic"}>
                    <div
                      key={topic}
                      className="
bg-(--bg-primary)
p-4
rounded-xl
flex
gap-3
items-center
"
                    >
                      <FaBook className="text-purple-500" />

                      {topic}
                    </div>
                  </NavLink>
                ))}
              </div>

              <div
                className="
mt-6
"
              >
                <div
                  className="
h-3
bg-black/20
rounded-full
"
                >
                  <div
                    className="
h-full
bg-purple-600
rounded-full
"
                    style={{
                      width: `${module.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RESOURCES */}

        <div
          className="
mt-14
grid
md:grid-cols-3
gap-6
"
        >
          {[
            ["Video Lessons", FaPlay],
            ["Practice Problems", FaCode],
            ["Projects", FaProjectDiagram],
          ].map(([title, Icon]) => (
            <div
              key={title}
              className="
bg-(--card-bg)
border
border-(--border-color)
p-7
rounded-3xl
"
            >
              <Icon size={30} />

              <h2
                className="
font-bold
text-xl
mt-4
"
              >
                {title}
              </h2>

              <p className="opacity-70 mt-2">
                Practice and improve your skills.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail;
