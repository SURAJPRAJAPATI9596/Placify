import React from "react";
import { Search, Filter } from "lucide-react";
const options = [
  "All",
  "Applications Sent",
  "OA Cleared",
  "Technical Interview",
  "HR Interview",
  "Offer Received",
  "Rejected",
];
const FilterBar = ({ handleChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-0 justify-between items-center mb-8">
      {/* Search Bar */}
      <div className="relative w-full md:w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          onChange={(e) => {
            handleChange({ search: "", filter: e.target.value });
          }}
          type="text"
          placeholder="Search by company or role..."
          className="
        w-full
        h-12
        pl-11
        pr-4
        rounded-xl
        bg-(--card-bg)
        border
        border-(--border-color)
        text-(--text-primary)
        placeholder:text-gray-400
        outline-none
        focus:border-violet-500
        transition-all
      "
        />
      </div>

      {/* Filter */}
      <div className="relative w-full md:w-56">
        <Filter
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <select
          onChange={(e) => {
            handleChange({ search: "", filter: e.target.value });
          }}
          className="
        appearance-none
        w-full
        h-12
        pl-11
        pr-10
        rounded-xl
        bg-(--card-bg)
        border
        border-(--border-color)
        text-(--text-primary)
        cursor-pointer
        outline-none
        focus:border-violet-500
      "
        >
          {options.map((value, i) => (
            <option key={i}>{value}</option>
          ))}
        </select>

        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default FilterBar;
