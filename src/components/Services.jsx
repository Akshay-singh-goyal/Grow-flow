import "./Services.css";
import {
  FaWhatsapp,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    title: "WhatsApp Business Setup",
    desc:
      "Professional WhatsApp Business profile setup with catalog, quick replies, labels and automation.",
  },
  {
    id: 2,
    icon: <FaRobot />,
    title: "WhatsApp Automation",
    desc:
      "Automate customer replies, lead generation, appointment booking and order confirmations.",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Website Development",
    desc:
      "Modern responsive websites for Restaurants, Schools, Gyms, Clinics and Local Businesses.",
  },
  {
    id: 4,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc:
      "Generate more leads using Facebook Ads, Instagram Marketing and Google Campaigns.",
  },
  {
    id: 5,
    icon: <FaQrcode />,
    title: "QR Solutions",
    desc:
      "Digital Menu, Admission Form, Product Catalog, Payments and Smart QR Systems.",
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: "Business Growth",
    desc:
      "Complete growth strategy with CRM, customer retention, analytics and automation.",
  },
];

const Services = () => {
  return (
    <section className="services">

      <div className="service-heading">

        <span>Our Premium Services</span>

        <h2>
          Everything You Need To
          <br />
          Grow Your Business
        </h2>

        <p>
          We provide complete digital solutions to help local businesses
          increase customers, automate communication and grow faster.
        </p>

      </div>

      <div className="service-grid">

        {services.map((item, index) => (

          <motion.div
            className="service-card"
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -15,
              rotateX: 5,
              rotateY: 5,
            }}
          >

            <div className="service-icon">

              {item.icon}

            </div>

            <h3>

              {item.title}

            </h3>

            <p>

              {item.desc}

            </p>

            <button>

              Learn More →

            </button>

            <div className="card-glow"></div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Services;