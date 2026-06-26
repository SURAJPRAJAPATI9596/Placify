import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import NavStyle from "../../utils/NavStylel";
const Navbar = ({ dark, setDark }) => {
  return (
    <div
      className="bg-(--bg-primary) text-(--text-primary) flex-row justify-around  h-12.5 items-center text-[14px] hidden lg:flex z-0  
fixed inset-0"
    >
      <span className="text-[30px] cursor-pointer">
        <NavLink to={"/Placify/"}>Placify</NavLink>
      </span>
      <div className="w-[60%] flex justify-around cursor-pointer">
        <span>Dashboard</span>
        <span>
          <NavLink to={"/placify/roadmaps "}>Roadmap</NavLink>
        </span>
        <span>Resources</span>
        <span>
          <NavLink to={"/placify/resume"}>Resume</NavLink>
        </span>
        <span>
          <NavLink to={"/placify/ats"} className={NavStyle}>
            ATS
          </NavLink>
        </span>
        <span>Interview </span>
        <span>Coding </span>
        <span>Jobs </span>
        <span>Tracker</span>
        <span>
          <NavLink to={"/Placify/about"} className={NavStyle}>
            About
          </NavLink>
        </span>
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
