import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

      <div className="footer-col footer-contact">

          <h2 className="footer-logo">
            Grow<span>Flow</span>
          </h2>

          <p>
            Helping Restaurants, Schools, Gyms and Local Businesses
            grow using WhatsApp Automation, AI Solutions,
            Websites and Digital Marketing.
          </p>

         <div className="social-links">
  <a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com/company/yourcompany"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://youtube.com/@yourchannel"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>
</div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/about">About</a></li>

            <li><a href="/services">Services</a></li>

            <li><a href="/industries">Industries</a></li>

            <li><a href="/pricing">Pricing</a></li>

            <li><a href="/contact">Contact</a></li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-col">

          <h3>Services</h3>

          <ul>

            <li>WhatsApp Business</li>

            <li>Website Development</li>

            <li>AI Chatbot</li>

            <li>Digital Marketing</li>

            <li>Google Business</li>

            <li>Review Management</li>

          </ul>

        </div>

        {/* Industries */}

        <div className="footer-col">

          <h3>Industries</h3>

          <ul>

            <li>Restaurants</li>

            <li>Schools</li>

            <li>Gyms</li>

            <li>Hospitals</li>

            <li>Clinics</li>

            <li>Retail Stores</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact Us</h3>

          <p>

            <FaPhoneAlt />

            +91 98765 43210

          </p>

          <p>

            <FaEnvelope />

            hello@growflow.com

          </p>

          <p>

            <FaMapMarkerAlt />

            Delhi, India

          </p>

          <button className="footer-whatsapp">

            <FaWhatsapp />

            Chat on WhatsApp

          </button>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © {new Date().getFullYear()} GrowFlow Solutions.
          All Rights Reserved.

        </p>

        <div>

          <a href="/">Privacy Policy</a>

          <span>|</span>

          <a href="/">Terms & Conditions</a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;