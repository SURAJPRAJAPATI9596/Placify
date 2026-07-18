import "./../App.css";
import useTheme from "../hooks/useThem";
import useSidebar from "./../hooks/useSidebar";
import AppRoutes from "./../routes/AppRoutes";
import api from "./../services/api";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const { dark, setDark } = useTheme();
  const { open, toggleMenu } = useSidebar();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchStatus = async () => {
      const response = await api.get("/api/v1/auth/status", {
        withCredentials: true,
      });
      setUser(response.data);
      console.log(response.data);
    };
    fetchStatus();
  }, []);
  return (
    <>
      <AppRoutes
        user={user}
        dark={dark}
        setDark={setDark}
        open={open}
        toggleMenu={toggleMenu}
      />
    </>
  );
}

export default App;
