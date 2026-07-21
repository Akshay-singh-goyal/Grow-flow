import "./Pricing.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaGlobe,
  FaRobot,
  FaBullhorn,
  FaStar,
} from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "₹4,999",
    subtitle: "Perfect for Small Businesses",
    icon: <FaWhatsapp />,
    popular: false,
    features: [
      "WhatsApp Business Setup",
      "Business Profile Setup",
      "Catalog Setup",
      "Quick Replies",
      "Greeting & Away Message",
      "1 Month Support",
    ],
  },

  {
    id: 2,
    name: "Business",
    price: "₹14,999",
    subtitle: "Most Popular",
    icon: <FaGlobe />,
    popular: true,
    features: [
      "Professional Website",
      "WhatsApp Business Setup",
      "QR Menu / QR Catalog",
      "Google Business Setup",
      "SEO Optimization",
      "3 Months Support",
    ],
  },

  {
    id: 3,
    name: "Premium",
    price: "₹34,999",
    subtitle: "Business Automation",
    icon: <FaRobot />,
    popular: false,
    features: [
      "Website + Admin Panel",
      "WhatsApp Automation",
      "CRM Setup",
      "Email Automation",
      "Analytics Dashboard",
      "Priority Support",
    ],
  },

  {
    id: 4,
    name: "Enterprise",
    price: "Custom",
    subtitle: "Large Organizations",
    icon: <FaBullhorn />,
    popular: false,
    features: [
      "Everything Included",
      "Dedicated Manager",
      "Custom CRM",
      "WhatsApp API",
      "AI Chatbot",
      "24×7 Premium Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing">

      <div className="pricing-heading">

        <span>Pricing Plans</span>

        <h2>
          Choose The Perfect Plan
          <br />
          For Your Business
        </h2>

        <p>
          Affordable pricing for startups, restaurants,
          schools, gyms, hospitals and growing businesses.
        </p>

      </div>

      <div className="pricing-grid">

        {plans.map((plan, index) => (

          <motion.div
            key={plan.id}
            className={plan.popular ? "pricing-card active" : "pricing-card"}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .5,
              delay: index * .15,
            }}
            viewport={{ once: true }}
          >

            {plan.popular && (

              <div className="popular">

                <FaStar />

                Most Popular

              </div>

            )}

            <div className="plan-icon">

              {plan.icon}

            </div>

            <h3>{plan.name}</h3>

            <h1>{plan.price}</h1>

            <p>{plan.subtitle}</p>

            <ul>

              {plan.features.map((feature, i) => (

                <li key={i}>

                  <FaCheckCircle />

                  {feature}

                </li>

              ))}

            </ul>

            <button>

              Get Started →

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Pricing;