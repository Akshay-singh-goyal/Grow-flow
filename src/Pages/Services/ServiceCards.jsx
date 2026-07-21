import "./ServiceCards.css";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaRobot,
  FaGlobe,
  FaBullhorn,
  FaQrcode,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    title: "WhatsApp Business Setup",
    price: "Starting ₹4,999",
    desc: "Professional WhatsApp profile setup with catalog, labels, quick replies and customer engagement.",
    features: [
      "Business Profile Setup",
      "Catalog Creation",
      "Quick Replies",
      "QR Code",
    ],
  },
  {
    id: 2,
    icon: <FaRobot />,
    title: "WhatsApp Automation",
    price: "Starting ₹9,999",
    desc: "Automate customer conversations, bookings, confirmations and lead generation.",
    features: [
      "Auto Replies",
      "Order Confirmation",
      "Chatbot",
      "Broadcast",
    ],
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Website Development",
    price: "Starting ₹14,999",
    desc: "Modern responsive business websites with SEO, forms and admin dashboard.",
    features: [
      "Responsive Design",
      "SEO",
      "Fast Loading",
      "Admin Panel",
    ],
  },
  {
    id: 4,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    price: "Starting ₹8,999",
    desc: "Increase leads with Facebook Ads, Instagram Marketing and Google Campaigns.",
    features: [
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Social Media",
    ],
  },
  {
    id: 5,
    icon: <FaQrcode />,
    title: "QR Solutions",
    price: "Starting ₹2,999",
    desc: "Digital menus, admission forms, payment QR and smart business solutions.",
    features: [
      "QR Menu",
      "Payment QR",
      "Google Review QR",
      "Catalog QR",
    ],
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: "Business Growth",
    price: "Custom Plan",
    desc: "Complete business growth strategy with CRM, analytics and automation.",
    features: [
      "CRM Setup",
      "Analytics",
      "Customer Retention",
      "Growth Planning",
    ],
  },
];

const ServiceCards = () => {
  return (
    <section className="serviceCards">

      <div className="cardsHeading">

        <span>Our Services</span>

        <h2>Solutions Designed For Every Business</h2>

        <p>
          We provide complete digital transformation services to help
          businesses attract more customers, automate operations and grow
          faster.
        </p>

      </div>

      <div className="cardsGrid">

        {services.map((service, index) => (

          <motion.div
            key={service.id}
            className="serviceBox"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >

            <div className="serviceIcon">

              {service.icon}

            </div>

            <span className="priceTag">

              {service.price}

            </span>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <ul>

              {service.features.map((item, i) => (

                <li key={i}>✔ {item}</li>

              ))}

            </ul>

            <button>

              Learn More

              <FaArrowRight />

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default ServiceCards;