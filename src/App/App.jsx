import "./../App.css";
import useTheme from "../hooks/useThem";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useSidebar from "./../hooks/useSidebar";
import Hero from "../features/Home/Hero";

function App() {
  const { dark, setDark } = useTheme();
  const { open, toggleMenu } = useSidebar();
  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Sidebar
        open={open}
        toggleMenu={toggleMenu}
        dark={dark}
        setDark={setDark}
      />
      <Hero dark={dark} setDark={setDark} />
    </>
  );
}

export default App;
