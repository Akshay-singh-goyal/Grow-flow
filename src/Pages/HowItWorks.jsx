import "./HowItWorks.css";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaSearch,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaPhoneAlt />,
    title: "Book Free Consultation",
    description:
      "Schedule a free consultation to discuss your business goals and digital requirements.",
  },
  {
    id: "02",
    icon: <FaSearch />,
    title: "Business Analysis",
    description:
      "We analyze your business, competitors and identify the best digital growth strategy.",
  },
  {
    id: "03",
    icon: <FaTools />,
    title: "Development & Setup",
    description:
      "Our team develops your website, WhatsApp automation, CRM and marketing systems.",
  },
  {
    id: "04",
    icon: <FaRocket />,
    title: "Launch & Grow",
    description:
      "Launch your project successfully and continue growing with our ongoing support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">

      <div className="how-heading">

        <span>How It Works?</span>

        <h2>
          Our Simple Process
          <br />
          To Grow Your Business
        </h2>

        <p>
          We follow a proven step-by-step process to deliver the best
          digital solutions for every business.
        </p>

      </div>

      <div className="timeline">

        {steps.map((step, index) => (

          <motion.div
            className="timeline-card"
            key={step.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >

            <div className="step-number">
              {step.id}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            {index !== steps.length - 1 && (
              <div className="step-line"></div>
            )}

          </motion.div>

        ))}

      </div>

      <div className="how-btn">

        <button>
          Start Your Project →
        </button>

      </div>

    </section>
  );
};

export default HowItWorks;