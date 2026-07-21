import "./FeaturedProperties.css";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaBed,
  FaBath,
  FaVectorSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
    title: "Luxury Villa",
    location: "Vijay Nagar, Indore",
    beds: 4,
    baths: 3,
    area: "2800 Sq.ft",
    price: "₹85 Lakhs",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900",
    title: "Modern Apartment",
    location: "Scheme 140, Indore",
    beds: 3,
    baths: 2,
    area: "1800 Sq.ft",
    price: "₹58 Lakhs",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900",
    title: "Premium Office",
    location: "AB Road, Indore",
    beds: "-",
    baths: "2",
    area: "2200 Sq.ft",
    price: "₹1.25 Cr",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="featured">

      <div className="heading">

        <span>Featured Properties</span>

        <h2>Discover Premium Properties</h2>

        <p>
          Find the best residential and commercial properties
          across Indore at unbeatable prices.
        </p>

      </div>

      <div className="propertyGrid">

        {properties.map((item, index) => (

          <motion.div
            key={item.id}
            className="propertyCard"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
          >

            <div className="imageBox">

              <img
                src={item.image}
                alt={item.title}
              />

              <button className="wishlist">

                <FaHeart />

              </button>

            </div>

            <div className="propertyContent">

              <h3>{item.title}</h3>

              <p className="location">

                <FaMapMarkerAlt />

                {item.location}

              </p>

              <div className="features">

                <span>

                  <FaBed />

                  {item.beds}

                </span>

                <span>

                  <FaBath />

                  {item.baths}

                </span>

                <span>

                  <FaVectorSquare />

                  {item.area}

                </span>

              </div>

              <div className="bottom">

                <h4>{item.price}</h4>

                <button>

                  View Details

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedProperties;