import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { HashRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import IndustryContextsPage from "./pages/IndustryContextsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ResumePage from "./pages/ResumePage";
import SkillsPage from "./pages/SkillsPage";
import "./App.css";

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get("section") || location.state?.scrollTo;
    if (!sectionId) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.search, location.state]);

  return (
    <main>
      <section id="home"><HomePage /></section>
      <section id="experience" className="section-surface"><ResumePage /></section>
      <section id="projects"><ProjectsPage /></section>
      <section id="contexts" className="section-surface"><IndustryContextsPage /></section>
      <section id="credentials"><CertificationsPage /></section>
      <section id="skills" className="section-surface"><SkillsPage /></section>
      <section id="recommendations"><RecommendationsPage /></section>
      <section id="contact" className="section-surface"><ContactPage /></section>
    </main>
  );
}

function SiteRoutes() {
  return (
    <div className="site-frame">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <SiteRoutes />
      </Router>
    </MotionConfig>
  );
}
