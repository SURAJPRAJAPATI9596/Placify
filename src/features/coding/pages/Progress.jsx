import React from "react";

const Progress = () => {
  const skills = [
    {
      name: "DSA",
      value: 72,
    },

    {
      name: "Frontend",
      value: 88,
    },

    {
      name: "Backend",
      value: 45,
    },

    {
      name: "AI",
      value: 25,
    },
  ];

  const getGradient = (value) => {
    if (value >= 75) return "#22c55e";

    if (value >= 40) return "#eab308";

    return "#ef4444";
  };

  const ProgressCircle = ({ value, name }) => {
    return (
      <div
        className="
      flex
      flex-col
      items-center
      gap-4
      "
      >
        <div
          className="
      w-36
      h-36
      rounded-full
      flex
      items-center
      justify-center
      "
          style={{
            background: `conic-gradient(${getGradient(value)} ${value}%, #222 0)`,
          }}
        >
          <div
            className="
        w-28
        h-28
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
              {value}%
            </h2>
          </div>
        </div>

        <h3
          className="
      text-lg
      font-semibold
      "
        >
          {name}
        </h3>
      </div>
    );
  };

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
        <h1
          className="
        text-4xl
        font-bold
        "
        >
          Your Progress
        </h1>

        <p className="mt-3 opacity-70">
          Analyze your preparation and improve weak areas
        </p>

        {/* Skill Analytics */}

        <div
          className="
        mt-10
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
            Skill Analytics
          </h2>

          <div
            className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-10
          mt-10
          "
          >
            {skills.map((skill) => (
              <ProgressCircle
                key={skill.name}
                value={skill.value}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        {/* Problem Distribution */}

        <div
          className="
        grid
        lg:grid-cols-3
        gap-6
        mt-10
        "
        >
          {[
            ["Easy", "120", "#22c55e"],
            ["Medium", "80", "#eab308"],
            ["Hard", "20", "#ef4444"],
          ].map((item) => (
            <div
              key={item[0]}
              className="
          bg-white/10
          rounded-3xl
          p-8
          "
            >
              <h2 className="text-xl">{item[0]}</h2>

              <h1
                className="
          text-5xl
          font-bold
          mt-4
          "
              >
                {item[1]}
              </h1>

              <div
                className="
          h-2
          rounded-full
          mt-6
          "
                style={{
                  background: item[2],
                }}
              />
            </div>
          ))}
        </div>

        {/* Weak Areas */}

        <div
          className="
        mt-10
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
            Improve Next
          </h2>

          <div
            className="
        flex
        gap-3
        flex-wrap
        mt-6
        "
          >
            {["Graphs", "Dynamic Programming", "System Design"].map((x) => (
              <span
                key={x}
                className="
          px-5
          py-2
          rounded-full
          bg-red-500/20
          text-red-300
          "
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
