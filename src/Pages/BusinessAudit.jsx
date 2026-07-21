import "./BusinessAudit.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const BusinessAudit = () => {
  return (
    <section className="audit">

      <div className="audit-container">

        {/* Left */}

        <motion.div
          className="audit-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <span className="audit-tag">
            🚀 FREE BUSINESS AUDIT
          </span>

          <h2>
            Get A Free Digital
            <br />
            Business Audit
          </h2>

          <p>
            We will analyze your business and tell you exactly
            what is stopping your business from getting more
            customers online.
          </p>

          <div className="audit-list">

            <div className="audit-item">
              <FaCheckCircle />
              <span>Website Performance Review</span>
            </div>

            <div className="audit-item">
              <FaCheckCircle />
              <span>WhatsApp Business Analysis</span>
            </div>

            <div className="audit-item">
              <FaCheckCircle />
              <span>Google Business Optimization</span>
            </div>

            <div className="audit-item">
              <FaCheckCircle />
              <span>Social Media Audit</span>
            </div>

            <div className="audit-item">
              <FaCheckCircle />
              <span>Growth Strategy Report</span>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="audit-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h3>Book Your Free Audit</h3>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="tel"
              placeholder="WhatsApp Number"
            />

            <input
              type="text"
              placeholder="Business Name"
            />

            <select>

              <option>Select Business Type</option>

              <option>Restaurant</option>

              <option>School</option>

              <option>Gym</option>

              <option>Hospital</option>

              <option>Clinic</option>

              <option>Retail Shop</option>

              <option>Real Estate</option>

              <option>Other</option>

            </select>

            <textarea
              rows="4"
              placeholder="Tell us about your business..."
            ></textarea>

            <button>

              <FaWhatsapp />

              Book Free Audit

            </button>

          </form>

        </motion.div>

      </div>

      {/* Bottom Stats */}

      <div className="audit-stats">

        <div>

          <FaRocket />

          <h3>500+</h3>

          <p>Businesses Helped</p>

        </div>

        <div>

          <FaWhatsapp />

          <h3>1000+</h3>

          <p>Automations Created</p>

        </div>

        <div>

          <FaChartLine />

          <h3>98%</h3>

          <p>Client Satisfaction</p>

        </div>

      </div>

    </section>
  );
};

export default BusinessAudit;