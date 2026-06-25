import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import Ats from "../../features/Ats/Ats";
const MainLayout = ({ dark, setDark, open, toggleMenu }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar dark={dark} setDark={setDark} />

      <Sidebar
        open={open}
        toggleMenu={toggleMenu}
        dark={dark}
        setDark={setDark}
      />

      <main className="flex-1 -z-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
