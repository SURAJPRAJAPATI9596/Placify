import "./../App.css";
import useTheme from "../hooks/useThem";
import useSidebar from "./../hooks/useSidebar";
import AppRoutes from "./../routes/AppRoutes";
import Home from "../features/Home/Home";
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
