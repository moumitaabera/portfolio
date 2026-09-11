"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const screenshots = [
    {
      image: "/project-1.png",
      title: "Student Dashboard",
    },
    {
      image: "/project-2.png",
      title: "AI Mock Interview",
    },
    {
      image: "/project-3.png",
      title: "Recruiter Dashboard",
    },
    {
      image: "/project-4.png",
      title: "Recruitment Workflow",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="fade-right">
      <h2>Projects</h2>

      <div className="project-image-container">
  <Image
    src={screenshots[currentIndex].image}
    alt={screenshots[currentIndex].title}
    width={1200}
    height={700}
    className="project-main-image"
    priority
  />
</div>

{/* Carousel Controls */}
<div className="project-carousel-controls">
  <button
    type="button"
    className="carousel-arrow"
    onClick={previousSlide}
    aria-label="Previous screenshot"
  >
    ◀
  </button>

  <div className="carousel-dots">
    {screenshots.map((_, index) => (
      <button
        key={index}
        type="button"
        className={`carousel-dot ${
          currentIndex === index ? "active" : ""
        }`}
        onClick={() => setCurrentIndex(index)}
        aria-label={`Show screenshot ${index + 1}`}
      />
    ))}
  </div>

  <button
    type="button"
    className="carousel-arrow"
    onClick={nextSlide}
    aria-label="Next screenshot"
  >
    ▶
  </button>
</div>

{/* Project Information */}
<div className="project-content">

        {/* Project Information */}
        <div className="project-content">
          <h3>AI-Powered Placement & Career Platform</h3>

          <p>
            A full-stack placement and career management platform designed to
            help students manage their career journey while providing
            recruiters with tools to manage jobs and candidates.
          </p>

          <p>
            The platform includes student and recruiter dashboards, job
            management, applications, resume management, and an AI-powered
            mock interview system with performance feedback.
          </p>

          <p className="project-tech">
            <strong>Tech Stack:</strong> Next.js, React, TypeScript, Node.js,
            Express.js, PostgreSQL, Prisma, Gemini API
          </p>

          {/* Buttons */}
          <div className="project-links">
            <a
              href="https://ai-placement-platform-theta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo
            </a>

            <a
              href="https://github.com/moumitaabera"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
}