import React, { useState } from "react";

const roadmapData = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: "💻",
    category: "Frontend",
    level: "Beginner",
    description:
      "Learn HTML, CSS, JavaScript, React and build modern websites.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    progress: 40,
  },

  {
    id: 2,
    title: "MERN Stack Developer",
    icon: "⚡",
    category: "Full Stack",
    level: "Intermediate",
    description: "Learn MongoDB, Express, React and Node.js.",
    skills: ["MongoDB", "Express", "React", "Node"],
    progress: 25,
  },

  {
    id: 3,
    title: "AI Engineer",
    icon: "🤖",
    category: "AI",
    level: "Advanced",
    description: "Learn Python, Machine Learning and AI.",
    skills: ["Python", "ML", "AI"],
    progress: 10,
  },
];

const Roadmaps = () => {
  const [search, setSearch] = useState("");

  const [active, setActive] = useState("All");

  const categories = ["All", "Frontend", "Full Stack", "AI"];

  const filteredData = roadmapData.filter((item) => {
    const text = search.toLowerCase();

    const searchCheck =
      item.title.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text) ||
      item.skills.some((skill) => skill.toLowerCase().includes(text));

    const categoryCheck = active === "All" || item.category === active;

    return searchCheck && categoryCheck;
  });

  return (
    <div
      className="
min-h-screen
p-8
bg-(--bg-primary)
text-(--text-primary)
"
    >
      <h1
        className="
text-5xl
font-bold
text-center
"
      >
        Career Roadmaps 🚀
      </h1>

      {/* SEARCH */}

      <div
        className="
max-w-xl
mx-auto
mt-10
"
      >
        <input
          type="text"
          placeholder="Search roadmap..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
w-full
p-4
rounded-xl
border
bg-transparent
outline-none
"
        />
      </div>

      {/* FILTER */}

      <div
        className="
flex
justify-center
gap-3
mt-8
flex-wrap
"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
px-5
py-2
rounded-full
border

${active === cat ? "bg-blue-600 text-white" : ""}

`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS */}

      <div
        className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-12
"
      >
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="
p-6
rounded-2xl
border
shadow-lg
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
              <span className="text-5xl">{item.icon}</span>

              <span
                className="
bg-blue-500/20
px-3
py-1
rounded-full
"
              >
                {item.level}
              </span>
            </div>

            <h2
              className="
text-2xl
font-bold
mt-5
"
            >
              {item.title}
            </h2>

            <p
              className="
opacity-70
mt-3
"
            >
              {item.description}
            </p>

            <div
              className="
flex
gap-2
flex-wrap
mt-5
"
            >
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="
px-3
py-1
rounded-full
bg-gray-500/20
text-sm
"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <div
                className="
flex
justify-between
"
              >
                <span>Progress</span>

                <span>{item.progress}%</span>
              </div>

              <div
                className="
h-2
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
"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>
            </div>

            <button
              className="
mt-6
w-full
py-3
bg-blue-600
text-white
rounded-xl
"
            >
              View Roadmap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
