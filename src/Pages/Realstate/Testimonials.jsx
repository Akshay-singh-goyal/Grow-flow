import "./Testimonials.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Sharma",
    role: "Property Buyer",
    review:
      "Excellent service! They helped us find our dream home in Indore. The entire process was smooth and transparent.",
  },

  {
    id: 2,
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Priya Verma",
    role: "Investor",
    review:
      "Highly professional team. They suggested the perfect investment property with great future appreciation.",
  },

  {
    id: 3,
    image:
      "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Mr. G",
    role: "Business Owner",
    review:
      "Purchased a commercial office through them. Best pricing and complete legal support.",
  },

  {
    id: 4,
    image:
      "https://randomuser.me/api/portraits/women/62.jpg",
    name: "Neha Gupta",
    role: "Home Buyer",
    review:
      "Very supportive team from site visit to registration. Highly recommended for anyone buying property.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial">

      <div className="testimonialHeading">

        <span>Client Reviews</span>

        <h2>

          What Our Clients Say

        </h2>

        <p>

          Thousands of happy families trust us for buying,
          selling and investing in premium properties.

        </p>

      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >

        {reviews.map((item) => (

          <SwiperSlide key={item.id}>

            <motion.div
              className="reviewCard"
              whileHover={{
                y: -10,
              }}
            >

              <FaQuoteLeft className="quote" />

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>

                {item.name}

              </h3>

              <span>

                {item.role}

              </span>

              <div className="stars">

                <FaStar />

                <FaStar />

                <FaStar />

                <FaStar />

                <FaStar />

              </div>

              <p>

                {item.review}

              </p>

            </motion.div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
};

export default Testimonials;