const NavStyle = ({ isActive }) =>
  isActive
    ? "bg-blue-500/10 text-blue-600 border border-blue-500/30 rounded-xl px-4 py-2 font-semibold shadow-sm transition-all duration-300"
    : "text-(--text-primary) hover:bg-(--card-bg) rounded-xl px-4 py-2 transition-all duration-300";
export default NavStyle;
