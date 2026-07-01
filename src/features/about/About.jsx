import React from "react";
import {
  FaFileAlt,
  FaCode,
  FaRobot,
  FaBriefcase,
  FaRoute,
  FaChartLine,
  FaUserGraduate,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: FaFileAlt,
      title: "Smart Resume Builder",
      desc: "Create professional resumes with ATS optimization and industry focused templates.",
    },

    {
      icon: FaCode,
      title: "Coding Practice",
      desc: "Improve DSA, programming skills and prepare for real technical interviews.",
    },

    {
      icon: FaRobot,
      title: "AI Career Assistant",
      desc: "Get AI based suggestions to improve resume, skills and interview preparation.",
    },

    {
      icon: FaRoute,
      title: "Career Roadmaps",
      desc: "Follow structured learning paths according to your target role.",
    },

    {
      icon: FaBriefcase,
      title: "Job Preparation",
      desc: "Track applications, interviews and opportunities from one place.",
    },

    {
      icon: FaChartLine,
      title: "Progress Analytics",
      desc: "Understand your growth with detailed career insights.",
    },
  ];

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
"
    >
      {/* HERO */}

      <section
        className="
px-6
py-24
text-center
"
      >
        <h1
          className="
text-5xl
font-bold
"
        >
          Build Your Career With
          <span className="text-blue-600">Placify</span>
        </h1>

        <p
          className="
max-w-3xl
mx-auto
mt-6
text-lg
opacity-70
leading-8
"
        >
          Placify is a modern career development platform that helps students
          build skills, create professional resumes, prepare for interviews and
          reach their dream jobs.
        </p>
      </section>

      {/* PROBLEM */}

      <section
        className="
max-w-6xl
mx-auto
px-6
py-16
"
      >
        <div
          className="
bg-(--card-bg)
border
border-(--border-color)
rounded-3xl
p-10
"
        >
          <h2 className="text-3xl font-bold">The Problem We Solve</h2>

          <p
            className="
mt-5
opacity-70
leading-8
"
          >
            Students often use different platforms for resumes, coding practice,
            interview preparation and job searching. Placify combines everything
            into one personalized career system.
          </p>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className="
px-6
py-20
"
      >
        <h2
          className="
text-4xl
font-bold
text-center
mb-12
"
        >
          Everything You Need For Career Growth
        </h2>

        <div
          className="
max-w-7xl
mx-auto
grid
md:grid-cols-3
gap-8
"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
bg-(--card-bg)
border
border-(--border-color)
rounded-3xl
p-7
hover:-translate-y-2
transition
"
              >
                <Icon
                  className="
text-blue-600
text-4xl
"
                />

                <h3
                  className="
text-xl
font-bold
mt-5
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-3
opacity-70
leading-7
"
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        className="
max-w-6xl
mx-auto
px-6
py-20
"
      >
        <h2
          className="
text-4xl
font-bold
text-center
"
        >
          Your Journey With Placify
        </h2>

        <div
          className="
grid
md:grid-cols-4
gap-6
mt-12
"
        >
          {[
            "Create Profile",
            "Build Skills",
            "Prepare Interviews",
            "Get Hired",
          ].map((item, index) => (
            <div
              key={item}
              className="
bg-(--card-bg)
rounded-2xl
p-6
text-center
"
            >
              <div
                className="
text-3xl
font-bold
text-blue-500
"
              >
                0{index + 1}
              </div>

              <h3 className="mt-3 font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* AI SECTION */}

      <section
        className="
px-6
py-20
"
      >
        <div
          className="
max-w-6xl
mx-auto
rounded-3xl
bg-gradient-to-r
from-blue-600
to-purple-600
p-10
text-white
"
        >
          <div className="flex gap-5 items-center">
            <FaRobot className="text-5xl" />

            <h2
              className="
text-3xl
font-bold
"
            >
              AI Powered Career Guidance
            </h2>
          </div>

          <p
            className="
mt-5
leading-8
"
          >
            Placify analyzes your progress and provides personalized
            recommendations to help you become industry ready.
          </p>
        </div>
      </section>

      {/* WHY */}

      <section
        className="
max-w-6xl
mx-auto
px-6
py-20
"
      >
        <h2
          className="
text-4xl
font-bold
text-center
"
        >
          Why Choose Placify?
        </h2>

        <div
          className="
grid
md:grid-cols-3
gap-6
mt-12
"
        >
          {[
            "One complete career platform",
            "Personalized learning paths",
            "Industry focused preparation",
          ].map((item) => (
            <div
              className="
p-6
rounded-2xl
bg-(--card-bg)
border
border-(--border-color)
"
            >
              <FaCheckCircle
                className="
text-green-500
text-2xl
"
              />

              <p className="mt-4">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}

      <section
        className="
py-24
px-6
text-center
"
      >
        <FaRocket
          className="
mx-auto
text-blue-600
text-5xl
"
        />

        <h2
          className="
text-4xl
font-bold
mt-6
"
        >
          Our Vision
        </h2>

        <p
          className="
max-w-4xl
mx-auto
mt-5
opacity-70
leading-8
"
        >
          Our vision is to make career preparation accessible, personalized and
          practical for every student by combining technology, AI and structured
          learning.
        </p>
      </section>
    </div>
  );
};

export default About;
