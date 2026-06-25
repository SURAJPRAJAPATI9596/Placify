import "./../App.css";
import useTheme from "../hooks/useThem";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useSidebar from "./../hooks/useSidebar";
import Hero from "../features/Home/components/Hero";
import Home from "../features/Home/Home";
import AppRoutes from "../routes/AppRoutes";

function App() {
  const { dark, setDark } = useTheme();
  const { open, toggleMenu } = useSidebar();
  return (
    <>
      <AppRoutes
        dark={dark}
        setDark={setDark}
        open={open}
        toggleMenu={toggleMenu}
      />
    </>
  );
}

export default App;
