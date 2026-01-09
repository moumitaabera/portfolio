"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      {/* <div className="logo">MB.</div> */}

      <div
    style={{
    fontWeight: "bold",
    fontSize: "20px",
    color: "#ffffff", // light blue
    }}
>
  MB.
</div>

      {/* RIGHT (DESKTOP) */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#resume" onClick={() => setOpen(false)}>Resume</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
