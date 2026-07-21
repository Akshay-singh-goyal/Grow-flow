import "./InvestmentBenefits.css";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCoins,
  FaBuilding,
  FaShieldAlt,
  FaHandshake,
  FaPiggyBank,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaChartLine />,
    title: "High ROI",
    desc:
      "Real estate offers consistent appreciation and long-term wealth creation with high returns.",
  },
  {
    id: 2,
    icon: <FaCoins />,
    title: "Rental Income",
    desc:
      "Earn a steady passive income by renting residential or commercial properties.",
  },
  {
    id: 3,
    icon: <FaBuilding />,
    title: "Prime Locations",
    desc:
      "Invest in fast-growing locations with excellent infrastructure and future development.",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Safe Investment",
    desc:
      "Property is one of the safest investment options with lower market volatility.",
  },
  {
    id: 5,
    icon: <FaHandshake />,
    title: "Trusted Deals",
    desc:
      "Verified legal documentation and transparent transactions for complete peace of mind.",
  },
  {
    id: 6,
    icon: <FaPiggyBank />,
    title: "Future Wealth",
    desc:
      "Create long-term financial security for your family through strategic property investments.",
  },
];

const InvestmentBenefits = () => {
  return (
    <section className="investment">

      <div className="investmentHeading">

        <span>Investment Benefits</span>

        <h2>
          Why Real Estate Is The
          <br />
          Smartest Investment
        </h2>

        <p>
          Build long-term wealth through premium residential and commercial
          properties with secure investments and excellent returns.
        </p>

      </div>

      <div className="investmentGrid">

        {benefits.map((item, index) => (

          <motion.div
            key={item.id}
            className="investmentCard"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <div className="investmentIcon">
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

export default InvestmentBenefits;