import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBuilding,
  FaHome,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="reHero">

      <div className="overlay"></div>

      <div className="heroContainer">

        {/* LEFT */}

        <motion.div
          className="heroLeft"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="heroTag">

            Trusted Real Estate Partner

          </span>

          <h1>

            Find Your Dream
            <br />

            Property in
            <span> Indore</span>

          </h1>

          <p>

            Buy, Sell & Rent Residential,
            Commercial Properties with
            India's Trusted Real Estate Experts.

          </p>

          {/* SEARCH */}

          <div className="searchBox">

            <div className="inputBox">

              <FaMapMarkerAlt />

              <input
                type="text"
                placeholder="Enter Location"
              />

            </div>

            <div className="inputBox">

              <FaBuilding />

              <select>

                <option>Property Type</option>

                <option>Apartment</option>

                <option>Villa</option>

                <option>Commercial</option>

                <option>Office</option>

                <option>Plot</option>

              </select>

            </div>

            <button>

              <FaSearch />

              Search

            </button>

          </div>

          {/* BUTTONS */}

          <div className="heroBtns">

            <a href="tel:+917879680488">

              <FaPhoneAlt />

              Call Now

            </a>

            <a
              href="https://wa.me/917879680488"
              target="_blank"
              rel="noreferrer"
            >

              <FaWhatsapp />

              WhatsApp

            </a>

          </div>

          {/* STATS */}

          <div className="stats">

            <div>

              <h2>500+</h2>

              <p>Properties</p>

            </div>

            <div>

              <h2>20+</h2>

              <p>Locations</p>

            </div>

            <div>

              <h2>10+</h2>

              <p>Years</p>

            </div>

            <div>

              <h2>1200+</h2>

              <p>Happy Clients</p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="heroRight"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
            alt="Luxury Home"
          />

          <div className="floatingCard">

            <FaHome />

            <h3>Luxury Villa</h3>

            <p>Starting ₹85 Lakhs</p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;