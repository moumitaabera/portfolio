"use client";

import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3iy222l",
        "template_3477wj2",
        e.target,
        "JMzci0fUXDbMrVRbg"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-left">
          <h2>Contact <span>Me</span></h2>
          <p>Feel free to reach out to me.</p>

          <div className="contact-info">
            <p><FaEnvelope /> beramoumita036@gmail.com</p>
            <p><FaPhone /> +91 8250578312</p>
          </div>

          <div className="social-icons">
            <a href="https://github.com/moumitaabera" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/moumitabera" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
