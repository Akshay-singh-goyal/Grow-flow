import "./Services.css";
import {
  FaWhatsapp,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    title: "WhatsApp Business Setup",
    desc: "Professional WhatsApp profile setup with automation.",
  },
  {
    id: 2,
    icon: <FaRobot />,
    title: "WhatsApp Automation",
    desc: "Automatic replies, booking & order confirmation.",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Website Development",
    desc: "Modern business websites with responsive design.",
  },
  
];

const Services = () => {
  return (
    <section className="services">

      <div className="service-heading">

        <span>Our Services</span>

        <h2>
          Complete Digital Solutions
          <br />
          For Every Business
        </h2>

        <p>
          Everything your business needs to increase leads,
          automate work and grow faster.
        </p>

      </div>

      <div className="service-grid">

        {services.map((item, index) => (

          <motion.div
            key={item.id}
            className="service-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .5,
              delay: index * .15
            }}
            viewport={{ once: true }}
          >

            <div className="service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <Link to="/services" className="learn-btn">
              Learn More →
            </Link>

          </motion.div>

        ))}

      </div>

      <div className="view-all">

        <Link to="/services" className="view-btn">
          View All Services →
        </Link>

      </div>

    </section>
  );
};

export default Services;
