import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import FloatingAIAssistant from "../common/FloatingAIAssistant";
import FlashMessage from "../common/FlashMessage";
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
      {/* flex-1  z-0  min-h-screen overflow-y-hidden relative */}
      {/* <main className="flex-1 pt-16 relative"></main> */}
      <main className="flex-1  relative overflow-y-hidden">
        <FloatingAIAssistant />
        <FlashMessage
          show={true}
          type="success"
          title="Test"
          message="This test was just for check that You are premium user or not"
          duration={100000}
          onClose={() => {}}
          position="top-center"
        />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
