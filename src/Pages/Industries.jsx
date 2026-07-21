import "./Industries.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaUtensils,
  FaDumbbell,
  FaSchool,
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaShoppingBag,
  FaBuilding,
  FaPlaneDeparture,
  FaCar,
  FaSpa,
  FaStore,
} from "react-icons/fa";

const industries = [
  {
    id: 1,
    title: "Restaurant",
    icon: <FaUtensils />,
    desc: "Online Ordering, QR Menu, WhatsApp Automation & Customer Loyalty",
    color: "#FF6B35",
    slug: "restaurant",
  },

  {
    id: 2,
    title: "Gym & Fitness",
    icon: <FaDumbbell />,
    desc: "Membership, Attendance & WhatsApp Follow-up Automation",
    color: "#4CAF50",
    slug: "gym",
  },

  {
    id: 3,
    title: "School",
    icon: <FaSchool />,
    desc: "Admission Enquiry, Notifications & Parent Communication",
    color: "#2196F3",
    slug: "school",
  },

  {
    id: 4,
    title: "College",
    icon: <FaGraduationCap />,
    desc: "Admission Automation, Student CRM & Event Management",
    color: "#673AB7",
    slug: "college",
  },

  {
    id: 5,
    title: "Hospital",
    icon: <FaHospital />,
    desc: "Appointment Booking, Patient Reminder & Billing",
    color: "#E91E63",
    slug: "hospital",
  },

  {
    id: 6,
    title: "Hotel",
    icon: <FaHotel />,
    desc: "Room Booking, Guest Management & Review Automation",
    color: "#00BCD4",
    slug: "hotel",
  },

  {
    id: 7,
    title: "Retail Store",
    icon: <FaStore />,
    desc: "Billing, Inventory & Customer Retention",
    color: "#795548",
    slug: "retail",
  },

  {
    id: 8,
    title: "Real Estate",
    icon: <FaBuilding />,
    desc: "Lead Management & Property Inquiry Automation",
    color: "#3F51B5",
    slug: "real-estate",
  },

  {
    id: 9,
    title: "Travel Agency",
    icon: <FaPlaneDeparture />,
    desc: "Booking, Tour Packages & Customer Follow-up",
    color: "#00C853",
    slug: "travel",
  },

  {
    id: 10,
    title: "Automobile",
    icon: <FaCar />,
    desc: "Service Booking, Reminders & Customer Support",
    color: "#607D8B",
    slug: "automobile",
  },

  {
    id: 11,
    title: "Salon & Spa",
    icon: <FaSpa />,
    desc: "Appointment Booking & Membership Automation",
    color: "#FF4081",
    slug: "salon",
  },

  {
    id: 12,
    title: "E-Commerce",
    icon: <FaShoppingBag />,
    desc: "Order Tracking, WhatsApp Notification & CRM",
    color: "#009688",
    slug: "ecommerce",
  },
];

const Industries = () => {
  return (
    <section className="industries">

      <div className="industry-heading">

        <span>Industries We Serve</span>

        <h2>

          Smart Digital Solutions
          <br />

          For Every Industry

        </h2>

        <p>

          We build websites, WhatsApp automation,
          CRM solutions and digital marketing strategies
          tailored for every business.

        </p>

      </div>

      <div className="industry-grid">

        {industries.map((item, index) => (

          <motion.div
            className="industry-card"
            key={item.id}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -12,
              rotateX: 5,
              rotateY: 5,
            }}
          >

            <div
              className="industry-icon"
              style={{
                background: item.color,
              }}
            >

              {item.icon}

            </div>

            <h3>

              {item.title}

            </h3>

            <p>

              {item.desc}

            </p>

            <Link
              to={`/industries/${item.slug}`}
              className="industry-btn"
            >

              Explore Solution →

            </Link>

          </motion.div>

        ))}

      </div>

      <div className="industry-footer-btn">

        <Link
          to="/industries"
          className="all-industry-btn"
        >

          View All Industries →

        </Link>

      </div>

    </section>
  );
};

export default Industries;