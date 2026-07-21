import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-container about-card">
        <p>
          <FaEnvelope />{" "}
          <a href="mailto:mahinnaaz124@gmail.com">
            mahinnaaz124@gmail.com
          </a>
        </p>

        <p>
          <FaPhone />{" "}
          <a href="tel:+919880882848">
            +91 9880882848
          </a>
        </p>

        <p>
          <FaLinkedin />{" "}
          <a
            href="https://linkedin.com/in/mahin-naaz124"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mahin-naaz124
          </a>
        </p>

        <p>
          <FaGithub />{" "}
          <a
            href="https://github.com/Mahinnaaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Mahinnaaz
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;