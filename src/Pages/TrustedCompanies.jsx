import "./TrustedCompanies.css";

const companies = [
  {
    name: "Restaurant",
    logo: "🍕",
  },
  {
    name: "Gym",
    logo: "🏋️",
  },
  {
    name: "School",
    logo: "🏫",
  },
  {
    name: "College",
    logo: "🎓",
  },
  {
    name: "Clinic",
    logo: "🏥",
  },
  {
    name: "Hotel",
    logo: "🏨",
  },
  {
    name: "Salon",
    logo: "💇",
  },
  {
    name: "Retail",
    logo: "🛍️",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="trusted">

      <div className="trusted-heading">

        <span>Trusted By Different Industries</span>

        <h2>
          We Help Businesses Grow Faster 🚀
        </h2>

        <p>
          Restaurants, Schools, Gyms, Colleges,
          Clinics and many more businesses trust
          our automation solutions.
        </p>

      </div>

      <div className="slider">

        <div className="slide-track">

          {[...companies, ...companies].map((item, index) => (

            <div className="company-card" key={index}>

              <div className="company-logo">

                {item.logo}

              </div>

              <h3>{item.name}</h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}