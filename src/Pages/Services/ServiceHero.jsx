import "./ServiceHero.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const ServiceHero = () => {
  return (
    <section className="serviceHero">

      <div className="heroOverlay"></div>

      <div className="serviceHeroContainer">

        {/* LEFT */}

        <motion.div
          className="serviceHeroLeft"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
        >

          <span className="breadcrumb">

            Home / Services

          </span>

          <h1>

            Complete Digital Solutions
            <br />

            For Growing Businesses

          </h1>

          <p>

            We help Restaurants, Schools, Gyms, Hospitals,
            Clinics and Local Businesses automate operations,
            increase sales and grow online using Websites,
            WhatsApp Automation, AI and Digital Marketing.

          </p>

          <div className="heroBtns">

            <button className="primaryBtn">

              Explore Services

              <FaArrowRight />

            </button>

            <button className="secondaryBtn">

              <FaWhatsapp />

              Book Free Audit

            </button>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="serviceHeroRight"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
        >

          <img
            src="/images/services-hero.png"
            alt="GrowFlow Services"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default ServiceHero;