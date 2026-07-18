import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import NavStyle from "../../utils/NavStylel";
import ProfileMenu from "../../features/profile/ProfileMenu";
import ProfileDialog from "../../features/profile/ProfileDialog";
const Navbar = ({ user, dark, setDark }) => {
  return (
    <div
      className="bg-(--bg-primary) text-(--text-primary) flex-row justify-around  h-12.5 items-center text-[14px] hidden lg:flex z-50  
fixed top-0 left-0 w-full"
    >
      <span className="text-[30px] cursor-pointer">
        <NavLink to={"/"}>Placify</NavLink>
      </span>
      <div className="w-[60%] flex justify-around cursor-pointer">
        <NavLink to={"/dashboard"} className={NavStyle}>
          Dashboard
        </NavLink>

        <NavLink to={"/roadmaps"} className={NavStyle}>
          Roadmap
        </NavLink>

        <NavLink to={"/resources"} className={NavStyle}>
          Resources
        </NavLink>

        <NavLink to={"/resume"} className={NavStyle}>
          Resume
        </NavLink>

        <NavLink to={"/ats"} className={NavStyle}>
          ATS
        </NavLink>

        <NavLink to={"/interview"} className={NavStyle}>
          Interview
        </NavLink>
        <NavLink to={"/coding"} className={NavStyle}>
          Coding
        </NavLink>
        <NavLink className={NavStyle} to={"/jobs"}>
          Jobs
        </NavLink>
        <NavLink to={"/tracker"} className={NavStyle}>
          Tracker
        </NavLink>

        <NavLink to={"/about"} className={NavStyle}>
          About
        </NavLink>
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
        {!user?.isLoggedIn ? (
          <NavLink to={"/login"}>
            <button className="h-8! ">login</button>
          </NavLink>
        ) : (
          <ProfileDialog />
        )}
      </div>
    </div>
  );
};

export default Navbar;
