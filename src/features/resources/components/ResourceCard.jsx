import React from "react";
import { Search, Bookmark, Clock, Star, PlayCircle } from "lucide-react";
const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-xs font-semibold rounded-full text-gray-800">
          {resource.category}
        </div>

        <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-2xl cursor-pointer hover:bg-white">
          <Bookmark size={20} className="text-gray-700" />
        </div>

        {resource.type === "Video" && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/70 text-white text-xs px-3 py-1 rounded-xl">
            <PlayCircle size={16} /> Video
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold px-4 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full">
            {resource.difficulty}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock size={16} />
            {resource.duration}
          </div>
        </div>

        <h3 className="font-semibold text-xl leading-tight mb-4 text-[var(--text-primary)] line-clamp-2">
          {resource.title}
        </h3>

        <p className="text-[var(--text-primary)] opacity-75 text-sm line-clamp-3 mb-6">
          {resource.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500" size={20} fill="currentColor" />
            <span className="font-medium text-[var(--text-primary)]">
              {resource.rating}
            </span>
          </div>
          <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-2xl transition">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
