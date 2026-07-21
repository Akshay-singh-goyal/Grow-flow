import "./Hero.css";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import heroimg from "../Images/hero.png"

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <motion.span
          className="badge"
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          transition={{duration:.5}}
        >
          🚀 Helping Local Businesses Grow
        </motion.span>

        <motion.h1
          initial={{opacity:0,x:-80}}
          animate={{opacity:1,x:0}}
          transition={{duration:.8}}
        >
          Grow Your Business With
          <span> WhatsApp Automation</span>
          <br />
          & Digital Solutions
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.5}}
        >
          We help Restaurants, Gyms, Schools, Colleges,
          Clinics and Local Businesses automate customer
          communication and increase sales.
        </motion.p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book Free Demo
            <FaArrowRight/>
          </button>

          <button className="whatsapp-btn">
            <FaWhatsapp/>
            Chat Now
          </button>

        </div>

        <div className="hero-rating">

          ⭐⭐⭐⭐⭐

          <span>
            Trusted by 500+ Local Businesses
          </span>

        </div>

      </div>

      <motion.div
      className="hero-right"
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}}
      transition={{duration:1}}
      >

        <img
        src={heroimg}
        alt="hero"
        />

        <div className="floating-card one">

          📈

          <h3>+120 Leads</h3>

          <p>This Month</p>

        </div>

        <div className="floating-card two">

          💬

          <h3>WhatsApp</h3>

          <p>Automation</p>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero;