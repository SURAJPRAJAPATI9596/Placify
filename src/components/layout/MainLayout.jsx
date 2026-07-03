import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import FloatingAIAssistant from "../common/FloatingAIAssistant";
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
      <FloatingAIAssistant />
      <main className="flex-1 relative z-0 fixed min-h-screen overflow-y-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
