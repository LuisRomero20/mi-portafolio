import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import BlogPage from "./pages/BlogPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function MainContent() {
  return (
    <>
      <section id="home"><HomePage /></section>
      <section id="about" className="bg-[#1e293b]"><AboutPage /></section>
      <section id="resume"><ResumePage /></section>
      <section id="services" className="bg-[#1e293b]"><ServicesPage /></section>
      <section id="skills"><SkillsPage /></section>
      <section id="projects" className="bg-[#1e293b]"><ProjectsPage /></section>
      <section id="certifications"><CertificationsPage /></section>
      <section id="recommendations" className="bg-[#1e293b]"><RecommendationsPage /></section>
      <section id="contact"><ContactPage /></section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Sidebar />
      <main className="xl:ml-[300px] min-h-screen transition-all duration-300">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
