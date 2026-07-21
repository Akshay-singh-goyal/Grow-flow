import "./WhyChooseUs.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  FaShieldAlt,
  FaHome,
  FaMoneyCheckAlt,
  FaHandshake,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Verified Properties",
    desc: "Every property is legally verified before listing.",
  },
  {
    id: 2,
    icon: <FaHome />,
    title: "Best Locations",
    desc: "Premium residential & commercial locations.",
  },
  {
    id: 3,
    icon: <FaMoneyCheckAlt />,
    title: "Best Price",
    desc: "We negotiate the best price for every client.",
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: "Transparent Deal",
    desc: "No hidden charges. Complete transparency.",
  },
  {
    id: 5,
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Professional consultants with years of experience.",
  },
  {
    id: 6,
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Always available to help you at every step.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="whySection">

      <div className="whyHeading">

        <span>Why Choose Us</span>

        <h2>
          We Make Property Buying
          <br />
          Simple & Secure
        </h2>

        <p>
          Helping families and investors buy the right property with
          complete transparency and expert guidance.
        </p>

      </div>

      {/* Stats */}

      <div className="statsGrid">

        <div className="statCard">
          <h2>
            <CountUp end={500} duration={3} />+
          </h2>
          <p>Properties</p>
        </div>

        <div className="statCard">
          <h2>
            <CountUp end={1200} duration={3} />+
          </h2>
          <p>Happy Clients</p>
        </div>

        <div className="statCard">
          <h2>
            <CountUp end={10} duration={3} />+
          </h2>
          <p>Years Experience</p>
        </div>

        <div className="statCard">
          <h2>
            <CountUp end={25} duration={3} />+
          </h2>
          <p>Expert Agents</p>
        </div>

      </div>

      {/* Feature Cards */}

      <div className="featureGrid">

        {features.map((item, index) => (

          <motion.div
            key={item.id}
            className="featureCard"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
          >

            <div className="featureIcon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;