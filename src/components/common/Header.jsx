import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = ({ open, toggleMenu, dark, setDark }) => {
  return (
    <div className="lg:hidden w-screen bg-(--bg-primary) text-(--text-primary) flex flex-row justify-around items-center fixed inset-0 z-50 h-12">
      <span className="text-[20px]">Placify</span>
      <span
        className="text-3xl"
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? <CiLight /> : <MdOutlineDarkMode />}
      </span>
      <span
        onClick={toggleMenu}
        className="text-(--text-rimary) bg-(--bg-primary)"
      >
        {open ? <RxCross2 /> : <RxHamburgerMenu />}{" "}
      </span>
    </div>
  );
};

export default Header;
