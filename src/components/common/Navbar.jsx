import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Navbar = ({ dark, setDark }) => {
  return (
    <div className="bg-(--bg-primary) text-(--text-primary) flex-row justify-around  h-12.5 items-center text-[14px] hidden lg:flex ">
      <span className="text-[30px] cursor-pointer">Placify</span>
      <div className="w-[60%] flex justify-around cursor-pointer">
        <span>Dashboard</span>
        <span>Roadmaps</span>
        <span>Resources</span>
        <span>Resume</span>
        <span>Interview </span>
        <span>Coding </span>
        <span>Jobs </span>
        <span>Tracker</span>
      </div>
      <div className="flex justify-around w-[10%] items-center cursor-pointer">
        <span
          className="text-3xl"
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? <CiLight /> : <MdOutlineDarkMode />}
        </span>
        <span>Login</span>
      </div>
    </div>
  );
};

export default Navbar;
