import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");
    const mailtoUrl = `mailto:info@luxebuilds.dev?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    window.gtag("event", "conversion", {
      send_to: "AW-18564161583/enxiCJ_5sbUdEK_AipRF",
    });
    window.location.href = mailtoUrl;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Let's collaborate on something great!</p>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info-list">
            <div className="info-item">
              <FiMail className="icon" />
              <div>
                <span>Email</span>
                <a className="contact-link" href="mailto:info@luxebuilds.dev">
                  info@luxebuilds.dev
                </a>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="icon" />
              <div>
                <span>Phone</span>
                <a className="contact-link" href="tel:+13363385599">
                  +1 (336) 338-5599
                </a>
              </div>
            </div>
            <div className="info-item">
              <FaWhatsapp className="icon" aria-hidden="true" />
              <div>
                <span>WhatsApp</span>
                <a
                  className="contact-link"
                  href="https://wa.me/13363385599"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message me on WhatsApp
                </a>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin className="icon" />
              <div>
                <span>Location</span>
                <p>Ogbomoso, Nigeria</p>
              </div>
            </div>
            <div className="follow-me">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/luxebuilds.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LuxeBuilds on Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://x.com/Luxebuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LuxeBuilds on X"
                >
                  <FaXTwitter />
                  <span>X</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61593147720089&amp;mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LuxeBuilds on Facebook"
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrofiu-ashrof-6a9b81358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abdulrofiu Ashrof on LinkedIn"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.tiktok.com/@luxebuilds.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LuxeBuilds on TikTok"
                >
                  <FaTiktok />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://github.com/CyberAshluxe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LuxeBuilds on GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="contact-right">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="send-btn"
            >
              <FiSend /> Send to Mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
