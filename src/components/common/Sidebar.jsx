import React from "react";
import Header from "./Header";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Sidebar = ({ dark, setDark, open, toggleMenu }) => {
  return (
    <div
      className="flex flex-col lg:hidden  
fixed inset-0"
    >
      <Header
        open={open}
        toggleMenu={toggleMenu}
        dark={dark}
        setDark={setDark}
      />
      {open ? (
        <div className="  border-b-blue-50 bg-(--bg-primary) text-(--text-primary) flex flex-col justify-between items-start h-screen  w-50  text-[14px]">
          <span className="text-[30px] cursor-pointer mt-10 ml-[10%]">
            Placify
          </span>
          <div className="ml-[10%] h-[50%] flex flex-col cursor-pointer justify-around">
            <span>Dashboard</span>
            <span>Roadmaps</span>
            <span>Resources</span>
            <span>Resume</span>
            <span>Interview </span>
            <span>Coding </span>
            <span>Jobs </span>
            <span>Tracker</span>
          </div>
          <div className="items-center cursor-pointer flex flex-row justify-around w-full">
            <span className="text-3xl">S</span>
            <span className="text-3xl">S</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
