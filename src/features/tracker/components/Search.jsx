import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ setSearch }) => {
  return (
    <div
      className="
mt-8
bg-white/10
p-4
rounded-xl
flex
gap-3
"
    >
      <Search />

      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="
bg-transparent
outline-none
w-full
"
      />
    </div>
  );
};

export default SearchBar;
