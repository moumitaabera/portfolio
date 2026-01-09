export default function Resume() {
  return (
    <section id="resume" className="fade-up">
      <h2>Resume</h2>

      <p className="resume-text">
        You can view my resume below.
      </p>

      <div className="resume-actions">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
        {/* <a
    href="/resume.pdf"
    download
    className="resume-btn download-btn"
  >
    Download Resume
  </a> */}
      </div>
    </section>
  );
}
