import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { ArrowUp, Menu, Moon, Sun, X } from "lucide-react";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";

function AppLayout() {
  const [menu, setMenu] = useState(false);
  const [light, setLight] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={light ? "app light" : "app"}>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <button className="logo" onClick={() => navigate("/")}>
            VG<span>.</span>
          </button>

          <div className={menu ? "nav-links open" : "nav-links"}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenu(false)}>
              Home
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenu(false)}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenu(false)}>
              Contact Us
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenu(false)}>
              Blog
            </NavLink>
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setLight(!light)} aria-label="Toggle theme">
              {light ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="menu-btn" onClick={() => setMenu(!menu)}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <footer>
        <span>© {new Date().getFullYear()} Vikas G God</span>
        <button onClick={() => navigate("/")}>
          <ArrowUp size={16} /> Back to top
        </button>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;