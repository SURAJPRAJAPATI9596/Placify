import React from "react";
import Header from "./Header";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import NavStyle from "../../utils/NavStylel";
import ProfileDialog from "./../../features/profile/ProfileDialog";
const Sidebar = ({ dark, setDark, open, toggleMenu }) => {
  return (
    <>
      <Header
        open={open}
        toggleMenu={toggleMenu}
        dark={dark}
        setDark={setDark}
      />

      {open && (
        <div className=" lg:hidden border-b-blue-50 bg-(--bg-primary) text-(--text-primary) flex flex-col justify-between items-start h-screen  w-50  text-[14px] z-50 fixed">
          <span className="text-[30px] cursor-pointer mt-10 ml-[10%]">
            <NavLink to={"/Placify/"} className={`NavStyle cursor-pointer`}>
              Placify
            </NavLink>
          </span>
          <div className="ml-[10%] h-[50%] flex flex-col cursor-pointer justify-around">
            <span>Dashboard</span>
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
            <span>Jobs </span>
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
          <div className="items-center cursor-pointer flex flex-row justify-around w-full">
            <span className="text-3xl">
              {" "}
              <ProfileDialog />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
