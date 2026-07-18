import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../features/Home/Home";
import About from "../features/about/About";
import Ats from "./../features/ats/pages/Ats";
import Resume from "../features/resume/pages/Resume";
import Roadmaps from "../features/roadmap/pages/Roadmaps";
import RoadmapDetail from "../features/roadmap/pages/RoadmapDetail";
import Interview from "../features/interview/pages/interview";
import Tracker from "../features/tracker/pages/Tracker";
import ProblemDetail from "./../features/coding/pages/ProblemDetail";
import CodeSubmissionResult from "./../features/coding/pages/CodeSubmissionResult";
import Problems from "../features/coding/pages/Problems";
import CodingTabs from "../features/coding/components/TabBar";
import ProfileMenu from "../features/profile/ProfileMenu";
import Jobs from "../features/jobs/pages/Jobs";
import Dashboard from "../features/dashboard/pages/dashboard";
import Resources from "../features/resources/pages/Resources";
import TopicComponents from "../features/roadmap/pages/TopicComponent";
import Register from "./../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import PrivacyPolicy from "./../features/rule/PrivacyPolicy";
import TermsAndConditions from "./../features/rule/TermsAndConditions";
const AppRoutes = ({ dark, setDark, open, toggleMenu, user }) => {
  return (
    <Routes>
      {/* Public pages */}

      <Route
        element={
          <MainLayout
            user={user}
            dark={dark}
            setDark={setDark}
            open={open}
            toggleMenu={toggleMenu}
          />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ats" element={<Ats />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/roadmaps/detail" element={<RoadmapDetail />} />
        <Route path="/roadmaps/detail/topic" element={<TopicComponents />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/coding" element={<CodingTabs />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />
        <Route
          path="/coding/submission/:id"
          element={<CodeSubmissionResult />}
        />
        <Route path="/Problems" element={<Problems />} />
        <Route path="/profile" element={<ProfileMenu />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
