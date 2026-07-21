import "./OurStory.css";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="ourStory">

      <div className="storyContainer">

        {/* LEFT */}

        <motion.div
          className="storyLeft"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="sectionTag">

            OUR STORY

          </span>

          <h2>

            Empowering Local Businesses
            Through Digital Innovation

          </h2>

          <p>

            GrowFlow was created with one simple mission —
            helping local businesses embrace technology and
            grow faster.

          </p>

          <p>

            We noticed that thousands of restaurants,
            schools, gyms, clinics and retail stores still
            relied on manual processes, phone calls and
            outdated marketing methods.

          </p>

          <p>

            That's why we build complete digital ecosystems
            including websites, WhatsApp Business,
            AI automation, CRM systems and marketing
            solutions that save time and increase revenue.

          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="storyRight"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="storyCard">

            <FaBullseye />

            <h3>Our Mission</h3>

            <p>

              To help every business become digital,
              automated and profitable.

            </p>

          </div>

          <div className="storyCard">

            <FaEye />

            <h3>Our Vision</h3>

            <p>

              Become India's most trusted digital
              transformation company for local businesses.

            </p>

          </div>

          <div className="storyCard">

            <FaRocket />

            <h3>Innovation</h3>

            <p>

              We continuously use modern technology,
              AI and automation.

            </p>

          </div>

          <div className="storyCard">

            <FaHandshake />

            <h3>Client First</h3>

            <p>

              Your business growth is our biggest success.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default OurStory;