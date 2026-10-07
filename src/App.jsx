import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componenet/Home";
import About from "./Componenet/About";
import Contact from "./Componenet/Contact";
import Skills from "./Componenet/Skills";
import Project from "./Componenet/Project";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <BrowserRouter>
      <label className="theme-toggle" htmlFor="portfolio-theme">
        <input
          aria-label="Toggle light mode"
          className="theme-toggle__input"
          id="portfolio-theme"
          role="switch"
          type="checkbox"
        />
        <span aria-hidden="true" className="theme-toggle__track">
          <svg className="theme-toggle__moon" viewBox="0 0 24 24">
            <path d="M20.2 15.4A8.4 8.4 0 0 1 8.6 3.8a8.5 8.5 0 1 0 11.6 11.6Z" />
          </svg>
          <svg className="theme-toggle__sun" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <span className="theme-toggle__thumb" />
        </span>
        <span className="theme-toggle__label">Theme</span>
      </label>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <footer className="site-footer">
        <p>
          © {currentYear} Kamal. All rights reserved.
        </p>
      </footer>
    </BrowserRouter>
  );
}
export default App;
