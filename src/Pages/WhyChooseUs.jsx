import "./WhyChooseUs.css";
import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";

import businessman from "../Images/hero.png";

const points = [
  "Industry Specific Solutions",
  "Affordable Pricing",
  "24/7 Customer Support",
  "On-Time Project Delivery",
  "100% Client Satisfaction",
  "Result Driven Approach",
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <div className="container">

        {/* Left Content */}

        <motion.div
          className="why-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Why Choose Us
          </span>

          <h2>
            We Don't Build Websites.
            <br />
            We Build Business Growth Systems.
          </h2>

          <p>
            From WhatsApp Automation to CRM,
            Websites, Marketing and AI Solutions,
            we provide everything your business
            needs under one roof.
          </p>

          <div className="feature-list">

            {points.map((item, index) => (

              <div
                className="feature-item"
                key={index}
              >

                <FaCheckCircle />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="why-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="image-card">

            <img
              src={businessman}
              alt="Business Expert"
            />

            <div className="experience-card">

              <FaUserTie />

              <div>

                <h3>5+ Years</h3>

                <p>Business Experience</p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUs;