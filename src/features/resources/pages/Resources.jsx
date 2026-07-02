import { useState } from "react";
import { Search, Bookmark, Clock, Star, PlayCircle } from "lucide-react";
import ResourceCard from "../components/ResourceCard";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedType, setSelectedType] = useState([]);
  const [sortBy, setSortBy] = useState("Most Popular");

  const categories = [
    "All",
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "DSA",
    "DBMS",
    "OS",
    "Computer Networks",
    "Aptitude",
  ];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
  const resourceTypes = ["Video", "Article", "Notes", "Practice Set"];

  const resources = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      category: "React",
      type: "Video",
      difficulty: "Intermediate",
      duration: "45 min",
      rating: 4.8,
      thumbnail: "https://picsum.photos/id/1015/300/169",
      description:
        "Master useState, useEffect, useContext and custom hooks with real-world examples.",
    },
    {
      id: 2,
      title: "Binary Search & Two Pointers",
      category: "DSA",
      type: "Article",
      difficulty: "Intermediate",
      duration: "25 min",
      rating: 4.9,
      thumbnail: "https://picsum.photos/id/237/300/169",
      description:
        "Learn optimal patterns for solving medium to hard array problems.",
    },
    {
      id: 3,
      title: "MongoDB Aggregation Pipeline Masterclass",
      category: "MongoDB",
      type: "Video",
      difficulty: "Advanced",
      duration: "1 hr 10 min",
      rating: 4.7,
      thumbnail: "https://picsum.photos/id/201/300/169",
      description:
        "Complete guide to $match, $group, $lookup and performance optimization.",
    },
    {
      id: 4,
      title: "System Design Fundamentals",
      category: "Computer Networks",
      type: "Notes",
      difficulty: "Beginner",
      duration: "30 min",
      rating: 4.6,
      thumbnail: "https://picsum.photos/id/180/300/169",
      description: "Learn how to design scalable systems from scratch.",
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "All" ||
      resource.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="w-full mx-auto px-6 py-10 bg-[var(--bg-primary)] min-h-screen pt-28">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-4">
          Resources Hub
        </h1>
        <p className="text-xl text-[var(--text-primary)] opacity-75">
          Curated study materials with powerful search & multi-filter
        </p>
      </div>

      {/* Sticky Filters */}
      <div className="static top-20 z-40 bg-[var(--bg-primary)] py-8 border-b border-[var(--border-color)] mb-12">
        <div className="bg-[var(--card-bg)] p-6 rounded-3xl border border-[var(--border-color)]">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-5 top-4 text-gray-400"
                size={22}
              />
              <input
                type="text"
                placeholder="Search resources, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl focus:outline-none focus:border-violet-500 text-[var(--text-primary)]"
              />
            </div>

            {/* Filters */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-violet-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-6 py-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-violet-500"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-violet-500"
            >
              <option value="Most Popular">Most Popular</option>
              <option value="Newest">Newest</option>
              <option value="Highest Rated">Highest Rated</option>
            </select>
          </div>

          {/* Type Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  if (selectedType.includes(type)) {
                    setSelectedType(selectedType.filter((t) => t !== type));
                  } else {
                    setSelectedType([...selectedType, type]);
                  }
                }}
                className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all border ${
                  selectedType.includes(type)
                    ? "bg-violet-600 text-white border-violet-600"
                    : "bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-violet-400 text-[var(--text-primary)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard resource={resource} key={resource.thumbnail} />
          ))
        ) : (
          <div className="col-span-3 text-center py-20 text-[var(--text-primary)] opacity-70">
            No resources found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
