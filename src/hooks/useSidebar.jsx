import { useState } from "react";

const useSidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return {
    open,
    toggleMenu,
  };
};

export default useSidebar;
