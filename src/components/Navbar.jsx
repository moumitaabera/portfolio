"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="logo">Moumita Bera</div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Hamburger / Cross */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
}
