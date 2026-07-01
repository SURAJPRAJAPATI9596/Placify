import React, { useState } from "react";
import {
  Search,
  MapPin,
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("Recommended");

  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      role: "Frontend Engineer",
      location: "Bangalore",
      salary: "12-18 LPA",
      skills: ["React", "TypeScript", "CSS"],
      match: 94,
      saved: false,
      applied: false,
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Software Engineer",
      location: "Hyderabad",
      salary: "10-16 LPA",
      skills: ["JavaScript", "React", "API"],
      match: 87,
      saved: false,
      applied: false,
    },
    {
      id: 3,
      company: "Amazon",
      role: "SDE Intern",
      location: "Remote",
      salary: "60k/month",
      skills: ["DSA", "Java", "AWS"],
      match: 76,
      saved: false,
      applied: false,
    },
    {
      id: 4,
      company: "Netflix",
      role: "UI Engineer",
      location: "Remote",
      salary: "15-22 LPA",
      skills: ["React", "UI", "Animation"],
      match: 91,
      saved: false,
      applied: false,
    },
  ]);

  const toggleSave = (id) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, saved: !job.saved } : job)),
    );
  };

  const applyJob = (id) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, applied: true } : job)),
    );
  };

  const filteredJobs =
    activeTab === "Saved"
      ? jobs.filter((j) => j.saved)
      : activeTab === "Applied"
        ? jobs.filter((j) => j.applied)
        : jobs;

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
        <h1 className="text-4xl font-bold">Find Your Dream Job</h1>

        <p className="opacity-70 mt-3">
          AI matched opportunities based on your skills
        </p>

        <div
          className="
          mt-8
          bg-(--card-bg)
          border
          border-(--border-color)
          rounded-2xl

            py-0.5
          pl-4
          flex
          gap-4
          items-center
          "
        >
          <Search />

          <input
            placeholder="Search role, company, skill..."
            className="
            bg-transparent
            outline-none
            w-full
            "
          />

          <button
            className="
            bg-blue-600
            px-6
            py-3
            rounded-xl
            text-white
            "
          >
            Search
          </button>
        </div>

        {/* RESPONSIVE TABS */}

        <div
          className="
          flex
          gap-3
          mt-10
          overflow-x-auto
          pb-2
          scrollbar-hide
          "
        >
          {["Recommended", "Saved", "Applied"].map((tab) => (
            <button
              onClick={() => setActiveTab(tab)}
              key={tab}
              className={`
              px-4
              py-2
              sm:px-5
              sm:py-3
              rounded-xl
              text-sm
              sm:text-base
              whitespace-nowrap
 shrink-0

              ${activeTab === tab ? "bg-blue-600 text-white" : "bg-(--card-bg)"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="
          grid
          lg:grid-cols-3
          gap-6
          mt-8
          "
        >
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="
              bg-(--card-bg)
              border
              border-(--border-color)
              rounded-3xl
              p-6
              hover:-translate-y-2
              transition
              "
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{job.company}</h2>

                  <p className="mt-2 opacity-80">{job.role}</p>
                </div>

                <button onClick={() => toggleSave(job.id)}>
                  {job.saved ? (
                    <BookmarkCheck className="text-blue-500" />
                  ) : (
                    <Bookmark />
                  )}
                </button>
              </div>

              <div className="mt-5 space-y-3 opacity-80">
                <p className="flex gap-2">
                  <MapPin size={18} />
                  {job.location}
                </p>

                <p className="flex gap-2">
                  <Briefcase size={18} />
                  {job.salary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    bg-white/10
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div
                className="
                mt-6
                bg-blue-500/10
                p-4
                rounded-xl
                "
              >
                <div className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <Sparkles size={16} />
                    AI Match
                  </span>

                  <span>{job.match}%</span>
                </div>

                <div
                  className="
                  h-2
                  bg-black/20
                  rounded-full
                  mt-3
                  overflow-hidden
                  "
                >
                  <div
                    className="
                    h-full
                    bg-blue-500
                    rounded-full
                    "
                    style={{
                      width: `${job.match}%`,
                    }}
                  />
                </div>
              </div>

              <button
                onClick={() => applyJob(job.id)}
                disabled={job.applied}
                className="
                mt-6
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-xl
                flex
                justify-center
                gap-2
                disabled:bg-green-600
                "
              >
                {job.applied ? (
                  <>
                    <CheckCircle size={18} />
                    Applied
                  </>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
