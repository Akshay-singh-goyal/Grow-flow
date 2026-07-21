import "./TopLocations.css";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const locations = [
  {
    id: 1,
    name: "Vijay Nagar",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900",
    properties: "320+ Properties",
    price: "₹45L - ₹2.5Cr",
  },

  {
    id: 2,
    name: "Super Corridor",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
    properties: "280+ Properties",
    price: "₹38L - ₹3Cr",
  },

  {
    id: 3,
    name: "AB Road",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=900",
    properties: "180+ Properties",
    price: "₹55L - ₹4Cr",
  },

  {
    id: 4,
    name: "Scheme No.140",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900",
    properties: "250+ Properties",
    price: "₹42L - ₹2Cr",
  },

  {
    id: 5,
    name: "Rau",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    properties: "190+ Properties",
    price: "₹28L - ₹1.5Cr",
  },

  {
    id: 6,
    name: "Bengali Square",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900",
    properties: "210+ Properties",
    price: "₹40L - ₹2.2Cr",
  },
];

const TopLocations = () => {
  return (
    <section className="locations">

      <div className="locationHeading">

        <span>Top Locations</span>

        <h2>Explore Properties By Location</h2>

        <p>
          Discover the most popular residential and commercial
          locations in Indore.
        </p>

      </div>

      <div className="locationGrid">

        {locations.map((item, index) => (

          <motion.div
            key={item.id}
            className="locationCard"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .1,
            }}
            viewport={{ once: true }}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="locationOverlay">

              <div>

                <h3>{item.name}</h3>

                <p>

                  <FaMapMarkerAlt />

                  {item.properties}

                </p>

                <span>{item.price}</span>

              </div>

              <button>

                Explore

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default TopLocations;