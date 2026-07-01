import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import NavStyle from "../../utils/NavStylel";
import ProfileMenu from "../../features/profile/ProfileMenu";
import ProfileDialog from "../../features/profile/ProfileDialog";
const Navbar = ({ dark, setDark }) => {
  return (
    <div
      className="bg-(--bg-primary) text-(--text-primary) flex-row justify-around  h-12.5 items-center text-[14px] hidden lg:flex z-50  
fixed inset-0"
    >
      <span className="text-[30px] cursor-pointer">
        <NavLink to={"/Placify/"}>Placify</NavLink>
      </span>
      <div className="w-[60%] flex justify-around cursor-pointer">
        <span>
          <NavLink to={"/Placify/dashboard"} className={NavStyle}>
            Dashboard
          </NavLink>
        </span>
        <span>
          <NavLink to={"/placify/roadmaps "} className={NavStyle}>
            Roadmap
          </NavLink>
        </span>
        <span>Resources</span>
        <span>
          <NavLink to={"/placify/resume"} className={NavStyle}>
            Resume
          </NavLink>
        </span>
        <span>
          <NavLink to={"/placify/ats"} className={NavStyle}>
            ATS
          </NavLink>
        </span>
        <span>
          <NavLink to={"/Placify/interview"} className={NavStyle}>
            Interview
          </NavLink>
        </span>
        <span>
          <NavLink to={"/Placify/coding"} className={NavStyle}>
            Coding
          </NavLink>
        </span>
        <span>
          <NavLink className={NavStyle} to={"/Placify/jobs"}>
            Jobs
          </NavLink>
        </span>
        <span>
          <NavLink to={"/Placify/tracker"} className={NavStyle}>
            Tracker
          </NavLink>
        </span>
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
        <ProfileDialog />
      </div>
    </div>
  );
};

export default Navbar;
