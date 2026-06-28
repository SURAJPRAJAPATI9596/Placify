import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../features/Home/Home";
import About from "../features/about/About";
import Ats from "../features/Ats/Ats";
// import Resume from "../features/resume/Resume";
import Roadmaps from "../features/roadmap/pages/Roadmaps";
import RoadmapDetail from "../features/roadmap/pages/RoadmapDetail";
import AIInterviewRoom from "../features/interview/pages/interview";
import Tracker from "../features/tracker/pages/Tracker";
const AppRoutes = ({ dark, setDark, open, toggleMenu }) => {
  return (
    <Routes>
      {/* Public pages */}

      <Route
        element={
          <MainLayout
            dark={dark}
            setDark={setDark}
            open={open}
            toggleMenu={toggleMenu}
          />
        }
      >
        <Route path="/Placify/" element={<Home />} />
        <Route path="/Placify/about" element={<About />} />
        <Route path="/Placify/ats" element={<Ats />} />
        {/* <Route path="/Placify/resume" element={<Resume />} /> */}
        <Route path="/Placify/roadmaps" element={<Roadmaps />} />
        <Route path="/Placify/roadmaps/detail" element={<RoadmapDetail />} />
        <Route path="/Placify/interview" element={<AIInterviewRoom />} />
        <Route path="/Placify/tracker" element={<Tracker />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
