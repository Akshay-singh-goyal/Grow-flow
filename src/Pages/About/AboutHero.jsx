import "./AboutHero.css";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaRobot,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="aboutHero">

      <div className="aboutContainer">

        {/* Left Content */}

        <motion.div
          className="aboutLeft"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="aboutTag">

            ABOUT GROWFLOW

          </span>

          <h1>

            We Help Businesses
            <br />

            Grow With Smart
            <br />

            Digital Solutions

          </h1>

          <p>

            GrowFlow is a digital transformation agency helping
            Restaurants, Schools, Gyms, Hospitals, Clinics,
            Retail Stores and Local Businesses automate their
            operations using Websites, WhatsApp Business,
            AI Automation and Digital Marketing.

          </p>

          <div className="heroFeatures">

            <div>

              <FaWhatsapp />

              WhatsApp Business

            </div>

            <div>

              <FaRobot />

              AI Automation

            </div>

            <div>

              <FaGlobe />

              Website Development

            </div>

            <div>

              <FaChartLine />

              Business Growth

            </div>

          </div>

          <button className="aboutBtn">

            Book Free Consultation

          </button>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="aboutRight"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <img
            src="/images/about-hero.png"
            alt="About GrowFlow"
          />

          <div className="floatingBox one">

            <h3>150+</h3>

            <p>Businesses Served</p>

          </div>

          <div className="floatingBox two">

            <h3>500+</h3>

            <p>Projects Delivered</p>

          </div>

          <div className="floatingBox three">

            <h3>98%</h3>

            <p>Client Satisfaction</p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutHero;