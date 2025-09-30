import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const res = await fetch(
        "https://portfolio-backend-0wnc.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "✅ Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send message. Try again.",
        });
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus({
        type: "error",
        message: "🚨 Network error. Try again later.",
      });
    }
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
                <p>ashrofabdulrofiu21@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="icon" />
              <div>
                <span>Phone</span>
                <p>+234 (0) 814 668 9063</p>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin className="icon" />
              <div>
                <span>Location</span>
                <p>Ogbomoso, Nigeria</p>
              </div>
            </div>
            {/* <div className="social-icons d-flex"> */}
            <div className="follow-me">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin />
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
              disabled={status.type === "loading"}
            >
              <FiSend />{" "}
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* ✅ Status Message */}
          {status.message && (
            <p
              className={`status-msg ${
                status.type === "success"
                  ? "success"
                  : status.type === "error"
                  ? "error"
                  : ""
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
