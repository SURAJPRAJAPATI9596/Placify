import React, { useState } from "react";
import { CheckCircle, Lock, PlayCircle, ArrowRight } from "lucide-react";

const roadmap = {
  title: "Frontend Developer",

  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

  description:
    "Become a frontend developer by learning HTML, CSS, JavaScript and React.",

  modules: [
    {
      title: "HTML Fundamentals",
      status: "completed",

      topics: ["HTML Tags", "Forms", "Semantic HTML", "Accessibility"],
    },

    {
      title: "CSS Mastery",
      status: "completed",

      topics: ["Flexbox", "Grid", "Responsive Design", "Animations"],
    },

    {
      title: "JavaScript",
      status: "progress",

      topics: ["Variables", "Functions", "DOM", "Async JavaScript"],
    },

    {
      title: "React",
      status: "locked",

      topics: ["Components", "Hooks", "Router", "State Management"],
    },
  ],
};

const RoadmapDetail = () => {
  const [completed, setCompleted] = useState([]);

  const toggleTopic = (topic) => {
    if (completed.includes(topic)) {
      setCompleted(completed.filter((item) => item !== topic));
    } else {
      setCompleted([...completed, topic]);
    }
  };

  // calculate progress automatically

  const totalTopics = roadmap.modules.reduce(
    (total, item) => total + item.topics.length,
    0,
  );

  const progress = Math.round((completed.length / totalTopics) * 100);

  const icons = {
    completed: <CheckCircle className="text-green-500" />,

    progress: <PlayCircle className="text-yellow-400" />,

    locked: <Lock className="text-gray-400" />,
  };

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
px-6
py-10
pt-40
"
    >
      <div className="max-w-6xl mx-auto">
        <img
          src={roadmap.image}
          className="
w-full
h-80
rounded-3xl
object-cover
"
        />

        <h1
          className="
text-5xl
font-bold
mt-10
"
        >
          {roadmap.title}
        </h1>

        <p
          className="
mt-4
opacity-70
"
        >
          {roadmap.description}
        </p>

        {/* Progress */}

        <div className="mt-8">
          <div className="flex justify-between">
            <span>Progress</span>

            <span>{progress}%</span>
          </div>

          <div
            className="
h-3
bg-gray-700
rounded-full
mt-2
"
          >
            <div
              className="
h-full
bg-blue-600
rounded-full
transition-all
"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Steps */}

        <div className="mt-16">
          {roadmap.modules.map((step, index) => (
            <div
              key={index}
              className="
relative
pl-12
pb-14
border-l-2
border-blue-500
"
            >
              <div
                className="
absolute
-left-4.25
top-0
w-8
h-8
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
"
              >
                {index + 1}
              </div>

              <div
                className="
bg-white/5
p-6
rounded-2xl
shadow-lg
"
              >
                <div
                  className="
flex
justify-between
items-center
"
                >
                  <h2 className="text-2xl font-bold">{step.title}</h2>

                  {icons[step.status]}
                </div>

                {/* Topics Checkbox */}

                <div className="mt-5 space-y-3">
                  {step.topics.map((topic) => (
                    <label
                      key={topic}
                      className="
flex
items-center
gap-3
cursor-pointer
"
                    >
                      <input
                        type="checkbox"
                        checked={completed.includes(topic)}
                        onChange={() => toggleTopic(topic)}
                        className="
w-5
h-5
accent-blue-600
"
                      />

                      <span
                        className={
                          completed.includes(topic)
                            ? "line-through opacity-50"
                            : ""
                        }
                      >
                        {topic}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  className="
mt-6
flex
items-center
gap-2
bg-blue-600
px-5
py-3
rounded-xl
text-white
"
                >
                  Start Learning
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail;
