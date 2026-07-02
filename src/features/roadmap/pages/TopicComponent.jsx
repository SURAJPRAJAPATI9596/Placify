import React, { useState } from "react";
import {
  FaPlayCircle,
  FaFileAlt,
  FaDownload,
  FaGithub,
  FaQuestionCircle,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";

const TopicComponents = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Video Lesson",
      type: "Embedded Player",
      icon: FaPlayCircle,
      completed: false,
      description: "Watch the complete lesson video",
    },

    {
      id: 2,
      title: "Article",
      type: "Full Page Read",
      icon: FaFileAlt,
      completed: false,
      description: "Read documentation and concepts",
    },

    {
      id: 3,
      title: "Notes",
      type: "PDF Download",
      icon: FaDownload,
      completed: false,
      description: "Download and revise notes",
    },

    {
      id: 4,
      title: "Project",
      type: "Github Repository",
      icon: FaGithub,
      completed: false,
      description: "Build and submit project",
    },

    {
      id: 5,
      title: "Quiz",
      type: "5-10 MCQ",
      icon: FaQuestionCircle,
      completed: false,
      description: "Score 70%+ to complete",
    },
  ]);

  const toggleComplete = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const completedCount = items.filter((item) => item.completed).length;

  const progress = Math.round((completedCount / items.length) * 100);

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
      <div
        className="
      max-w-5xl
      mx-auto
      "
      >
        {/* Header */}

        <div
          className="
        bg-white/10
        rounded-3xl
        p-8
        "
        >
          <h1
            className="
          text-4xl
          font-bold
          "
          >
            React Fundamentals
          </h1>

          <p
            className="
          opacity-70
          mt-3
          "
          >
            Complete this roadmap topic to unlock advanced modules
          </p>

          {/* progress */}

          <div className="mt-8">
            <div
              className="
            flex
            justify-between
            "
            >
              <span>Course Progress</span>

              <span>{progress}%</span>
            </div>

            <div
              className="
            h-3
            bg-black/30
            rounded-full
            mt-3
            overflow-hidden
            "
            >
              <div
                className="
              h-full
              bg-linear-to-r
              from-purple-500
              to-blue-500
              rounded-full
              transition-all
              "
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Components */}

        <div
          className="
        mt-10
        space-y-5
        "
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            const locked = index !== 0 && !items[index - 1].completed;

            return (
              <div
                key={item.id}
                className={`
            rounded-3xl
            p-6
            border
            border-white/10
            bg-white/10
            transition
            ${locked ? "opacity-50" : "hover:-translate-y-1"}
            `}
              >
                <div
                  className="
              flex
              justify-between
              items-center
              "
                >
                  <div
                    className="
                flex
                gap-5
                items-center
                "
                  >
                    <div
                      className="
                  text-4xl
                  text-purple-500
                  "
                    >
                      {locked ? (
                        <FaLock />
                      ) : item.completed ? (
                        <FaCheckCircle className="text-green-400" />
                      ) : (
                        <Icon />
                      )}
                    </div>

                    <div>
                      <h2
                        className="
                    text-xl
                    font-bold
                    "
                      >
                        {item.title}
                      </h2>

                      <p
                        className="
                    opacity-60
                    "
                      >
                        {item.type}
                      </p>
                    </div>
                  </div>

                  <button
                    disabled={locked}
                    onClick={() => toggleComplete(item.id)}
                    className={`
                px-5
                py-2
                rounded-xl
                ${item.completed ? "bg-green-600" : "bg-purple-600"}
                `}
                  >
                    {item.completed ? "Completed" : "Mark Done"}
                  </button>
                </div>

                <p
                  className="
              mt-5
              opacity-70
              "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopicComponents;
