import React, { useState } from "react";
import RoadmapData from "../../../data/RoadmapData";
import RoadmapCard from "../components/RoadmapCard";

const Roadmaps = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  const categories = ["All", "Frontend", "Full Stack", "AI"];
  const filteredData = RoadmapData.filter((item) => {
    const text = search.toLowerCase();
    const searchCheck =
      item.title.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text) ||
      item.skills.some((skill) => skill.toLowerCase().includes(text));
    const categoryCheck = active === "All" || item.category === active;

    return searchCheck && categoryCheck;
  });

  return (
    <div className="min-h-screen p-8 bg-(--bg-primary) text-(--text-primary) pt-40">
      <h1 className="text-5xl font-bold text-center">
        Career Roadmaps by Placify
      </h1>

      {/* SEARCH */}

      <div className="max-w-xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Search roadmap..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border bg-transparent outline-none"
        />
      </div>

      {/* FILTER */}

      <div className="flex justify-center gap-3 mt-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border ${active === cat ? "bg-blue-600 text-white" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
        {filteredData.map((item) => (
          <RoadmapCard item={item} />
          // icon, level, title, description, skills, progress
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
