import React, { useEffect, useState } from "react";
import { Search, Filter, CheckCircle, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import api from "../../../services/api";

const Problems = () => {
  const [search, setSearch] = useState("");
  const [problems, setProblems] = useState([]);

  const fetchProblems = async () => {
    const response = await api.get("/api/v1/coding");
    const data = await response.data.data;
    setProblems(data);
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const difficultyColor = (level) => {
    if (level === "Easy") return "text-green-400 bg-green-400/10";

    if (level === "Medium") return "text-yellow-400 bg-yellow-400/10";

    return "text-red-400 bg-red-400/10";
  };

  const filtered = problems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
py-16
p-6
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
              Problem Library
            </h1>

            <p
              className="
opacity-70
mt-2
"
            >
              Practice interview questions from top companies
            </p>
          </div>

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
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Search */}

        <div className="mt-10 bg-white/10 rounded-xl p-4 flex gap-3 items-center">
          <Search />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search problems..."
            className="
bg-transparent
outline-none
w-full
"
          />
        </div>

        {/* Desktop Table */}

        <div
          className="
hidden
md:block
mt-8
bg-white/10
rounded-2xl
overflow-hidden
"
        >
          <div
            className="
            
grid
grid-cols-12
p-5
font-bold
border-b
border-white/10
"
          >
            <div className="col-span-1">Status</div>

            <div className="col-span-4">Problem</div>

            <div className="col-span-2">Difficulty</div>

            <div className="col-span-2">Topic</div>

            <div className="col-span-2">Company</div>
          </div>

          <div className="overflow-scroll h-screen  overflow-x-hidden ">
            {filtered?.map((problem) => (
              <NavLink
                to={`/problem/${problem._id}`}
                className="cursor-pointer"
                key={problem._id}
              >
                <div
                  className="
grid
grid-cols-12
p-5
 
items-center
hover:bg-white/10
transition
border-b
border-white/10
"
                >
                  <div>
                    {problem?.status === "Solved" ? (
                      <CheckCircle className="text-green-400" />
                    ) : (
                      <Clock className="text-gray-400" />
                    )}
                  </div>

                  <div
                    className="
col-span-4
font-semibold
"
                  >
                    {problem.title}
                  </div>

                  <div className="col-span-2">
                    <span
                      className={`
px-3
py-1
rounded-full
text-sm
${difficultyColor(problem.difficulty)}
`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>

                  <div className="col-span-2">
                    {problem.topic.map((value, index) => (
                      <span
                        className="
bg-blue-500/20
px-3
py-1
rounded-full
text-sm
"
                      >
                        {value}
                      </span>
                    ))}
                  </div>

                  {problem.companies.map((value, inexe) => (
                    <div>{value}</div>
                  ))}
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}

        <div
          className="
md:hidden
mt-8
"
        >
          {filtered.map((problem) => (
            <NavLink
              to={`/problem/${problem._id}`}
              className="cursor-pointer"
              key={problem._id}
            >
              <div
                className="
bg-white/10
mt-5
rounded-2xl
p-5
"
              >
                <h2 className="text-xl font-bold">{problem.title}</h2>

                <p className="mt-3">{problem.topic}</p>

                {problem.companies.map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
                <span
                  className={`
inline-block
mt-3
px-3
py-1
rounded-full
${difficultyColor(problem.difficulty)}
`}
                >
                  {problem.difficulty}
                </span>
                {/* 
                <button
                  className="
mt-5
w-full
bg-blue-600
py-3
rounded-xl
"
                >
                  Solve
                </button> */}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;
