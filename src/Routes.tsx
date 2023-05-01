import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const VotingPanel = React.lazy(() => import("pages/VotingPanel"));
const ElectionPage = React.lazy(() => import("pages/ElectionPage"));
const FrameTwelve = React.lazy(() => import("pages/FrameTwelve"));
const Rules = React.lazy(() => import("pages/Rules"));
const PersonalInfo = React.lazy(() => import("pages/PersonalInfo"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const RegistrationPage = React.lazy(() => import("pages/RegistrationPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/frametwelve" element={<FrameTwelve />} />
          <Route path="/electionpage" element={<ElectionPage />} />
          <Route path="/votingpanel" element={<VotingPanel />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
