import "./HowWeWork.css";
import { motion } from "framer-motion";
import {
  FaComments,
  FaSearch,
  FaHome,
  FaFileSignature,
  FaKey,
  FaSmile,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaComments />,
    title: "Free Consultation",
    desc: "Understand your budget, location preference and property requirements.",
  },
  {
    id: 2,
    icon: <FaSearch />,
    title: "Property Shortlisting",
    desc: "We shortlist the best verified properties matching your needs.",
  },
  {
    id: 3,
    icon: <FaHome />,
    title: "Property Visit",
    desc: "Schedule site visits and inspect the property before making a decision.",
  },
  {
    id: 4,
    icon: <FaFileSignature />,
    title: "Documentation",
    desc: "Legal verification, loan assistance and complete paperwork.",
  },
  {
    id: 5,
    icon: <FaKey />,
    title: "Registration",
    desc: "Property registration and ownership transfer with complete transparency.",
  },
  {
    id: 6,
    icon: <FaSmile />,
    title: "Happy Possession",
    desc: "Move into your dream property with complete peace of mind.",
  },
];

const HowWeWork = () => {
  return (
    <section className="howWork">

      <div className="workHeading">

        <span>Our Process</span>

        <h2>How We Work</h2>

        <p>
          Buying a property is simple with our step-by-step professional process.
        </p>

      </div>

      <div className="timeline">

        {steps.map((step, index) => (

          <motion.div
            key={step.id}
            className="timelineCard"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <div className="stepNumber">

              {step.id}

            </div>

            <div className="stepIcon">

              {step.icon}

            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default HowWeWork;