import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { AboutMe } from "./components/AboutMe";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Focus } from "./components/Focus";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#f5f4f0] font-sans text-[14px] text-[#111] **:box-border">
        <Navbar />
        <Hero />
        <AboutMe />
        <Education />
        <Capabilities />
        <Focus />
        <Experience />
        <Contact />
      </main>
    </MotionConfig>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
