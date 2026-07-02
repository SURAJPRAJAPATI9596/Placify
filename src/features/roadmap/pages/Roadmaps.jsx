import React from "react";
import RoadmapCard from "../components/RoadmapCard";
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

const Roadmaps = () => {
  const roadmaps = [
    {
      title: "Frontend Development",
      level: "Beginner → Advanced",
      duration: "12 Weeks",
      progress: 72,
      color: "bg-blue-500",
      icon: FaCode,
      description:
        "Master HTML, CSS, JavaScript, React and modern frontend engineering.",
    },

    {
      title: "Backend Development",
      level: "Intermediate",
      duration: "10 Weeks",
      progress: 45,
      color: "bg-green-500",
      icon: FaServer,
      description:
        "Learn APIs, databases, authentication and scalable backend systems.",
    },

    {
      title: "Full Stack Development",
      level: "Intermediate",
      duration: "16 Weeks",
      progress: 30,
      color: "bg-orange-500",
      icon: FaDatabase,
      description:
        "Become capable of building complete production applications.",
    },

    {
      title: "DSA Mastery",
      level: "Beginner → Advanced",
      duration: "14 Weeks",
      progress: 58,
      color: "bg-red-500",
      icon: FaBrain,
      description:
        "Prepare for coding interviews with algorithms and problem solving.",
    },

    {
      title: "Java Developer",
      level: "Beginner",
      duration: "8 Weeks",
      progress: 85,
      color: "bg-purple-500",
      icon: FaJava,
      description:
        "Java fundamentals, OOP, collections and interview preparation.",
    },

    {
      title: "Python Developer",
      level: "Beginner",
      duration: "8 Weeks",
      progress: 62,
      color: "bg-cyan-500",
      icon: FaPython,
      description: "Python programming, automation and backend development.",
    },

    {
      title: "AI / ML",
      level: "Advanced",
      duration: "20 Weeks",
      progress: 20,
      color: "bg-pink-500",
      icon: FaBrain,
      description: "Machine learning, deep learning and AI applications.",
    },

    {
      title: "DevOps",
      level: "Advanced",
      duration: "12 Weeks",
      progress: 15,
      color: "bg-orange-500",
      icon: FaCloud,
      description: "Deployment, cloud, CI/CD and infrastructure.",
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
        {/* HERO */}

        <div
          className="
rounded-3xl
p-10
bg-linear-to-r
from-purple-700
to-indigo-700
text-white
"
        >
          <span
            className="
bg-white/20
px-4
py-2
rounded-full
text-sm
"
          >
            Career Paths
          </span>

          <h1
            className="
text-5xl
font-bold
mt-6
"
          >
            Master Skills. Build Career.
          </h1>

          <p
            className="
mt-4
text-lg
opacity-90
max-w-2xl
"
          >
            Follow structured learning paths designed to take you from beginner
            to job-ready developer.
          </p>
        </div>

        {/* TITLE */}

        <h2
          className="
text-3xl
font-bold
mt-14
"
        >
          Explore Roadmaps
        </h2>

        <div
          className="
grid
md:grid-cols-2
gap-6
mt-8
"
        >
          {roadmaps.map((item) => (
            <RoadmapCard item={item} />
          ))}
        </div>

        {/* HOW IT WORKS */}

        <div
          className="
mt-16
bg-(--card-bg)
border
border-(--border-color)
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
            How Learning Works
          </h2>

          <div
            className="
grid
md:grid-cols-3
gap-6
mt-8
"
          >
            {["Learn concepts", "Build projects", "Prepare interviews"].map(
              (x) => (
                <div
                  key={x}
                  className="
bg-(--bg-primary)
p-6
rounded-2xl
"
                >
                  <FaCheckCircle className="text-green-500" size={25} />

                  <h3
                    className="
font-bold
mt-4
"
                  >
                    {x}
                  </h3>

                  <p
                    className="
opacity-70
mt-2
"
                  >
                    Track your progress and unlock next level resources.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* CTA */}

        <div
          className="
mt-16
rounded-3xl
p-10
bg-purple-600
text-white
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
              Ready to start?
            </h2>

            <p className="mt-2">
              Choose a roadmap and start building your career.
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
items-center
"
          >
            Explore
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
