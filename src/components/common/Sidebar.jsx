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
        <div className=" lg:hidden border-b-blue-50 bg-(--bg-primary) text-(--text-primary) flex flex-col justify-items-start items-start gap-y-[10%] h-screen  w-50  text-[14px] z-50 fixed">
          <div className="flex flex-col gap-y-10">
            <NavLink
              to={"/"}
              className={`NavStyle cursor-pointer text-3xl  mt-10 ml-[10%]`}
            >
              Placify
            </NavLink>

            <div className="ml-[10%] h-[50%] flex flex-col justify-around items-start">
              <NavLink to="/dashboard" className={NavStyle}>
                Dashboard
              </NavLink>

              <NavLink to="/roadmaps" className={NavStyle}>
                Roadmap
              </NavLink>

              <NavLink to="/resources" className={NavStyle}>
                Resources
              </NavLink>

              <NavLink to="/resume" className={NavStyle}>
                Resume
              </NavLink>

              <NavLink to="/ats" className={NavStyle}>
                ATS
              </NavLink>

              <NavLink to="/interview" className={NavStyle}>
                Interview
              </NavLink>

              <NavLink to="/coding" className={NavStyle}>
                Coding
              </NavLink>

              <NavLink to="/jobs" className={NavStyle}>
                Jobs
              </NavLink>

              <NavLink to="/tracker" className={NavStyle}>
                Tracker
              </NavLink>

              <NavLink to="/about" className={NavStyle}>
                About
              </NavLink>
            </div>
          </div>
          <div className="items-center cursor-pointer flex flex-row justify-around w-full text-3xl">
            <ProfileDialog />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
