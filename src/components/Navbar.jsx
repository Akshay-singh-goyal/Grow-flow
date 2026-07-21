import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const scrollHandler = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>

      {/* Top Announcement */}

      <div className="top-bar">

        🚀 Grow your business with AI, WhatsApp Automation, Websites &
        Digital Marketing

      </div>

      {/* Navbar */}

      <header className={sticky ? "navbar sticky" : "navbar"}>

        <div className="navbar-container">

          {/* Logo */}

          <div
            className="logo"
            onClick={() => navigate("/")}
          >

            <h2>

              Grow<span>Flow</span>

            </h2>

          </div>

          {/* Navigation */}

          <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            <li>

              <NavLink
                to="/"
                onClick={closeMenu}
              >
                Home
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/services"
                onClick={closeMenu}
              >
                Services
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/industries"
                onClick={closeMenu}
              >
                Industries
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/case-studies"
                onClick={closeMenu}
              >
                Case Studies
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/pricing"
                onClick={closeMenu}
              >
                Pricing
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/about"
                onClick={closeMenu}
              >
                About
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/blog"
                onClick={closeMenu}
              >
                Blog
              </NavLink>

            </li>

             <li>

              <NavLink
                to="/realstate"
                onClick={closeMenu}
              >
                RealEstate
              </NavLink>

            </li>

            <li>

              <NavLink
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </NavLink>

            </li>

          </ul>

          {/* Buttons */}

          <div className="nav-btns">

            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="demo-btn"
              onClick={() => navigate("/book-demo")}
            >
              Book Free Demo
            </button>

          </div>

          {/* Mobile Menu */}

          <div
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </div>

        </div>

      </header>

    </>
  );
};

export default Navbar;