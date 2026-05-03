"use client";
import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contato</h2>
      <div className="contact-links">
        <a
          href="mailto:bewarethedogsofc@gmail.com"
          className="contact-icon"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://instagram.com/beware.thedogs"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@beware.the.dogs"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@bewarethedogs"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </section>
  );
}
