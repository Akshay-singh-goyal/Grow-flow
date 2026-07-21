import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import ServicesPage from "./Pages/Services/ServicesPage";

import IndustriesPage from "./Pages/Industries";

import PricingPage from "./Pages/Pricing";

import Navbar from "./components/Navbar";


import About from "./Pages/About/About";

import ContactPage from "./Pages/ContactPage";

import RealEstate from "./Pages/Realstate/RealEstate";

import Footer from "./Pages/Footer";

// import BlogPage from "./pages/Blog/BlogPage";

// import CaseStudiesPage from "./pages/CaseStudies/CaseStudiesPage";

// import LoginPage from "./pages/Login/LoginPage";

// import BookDemoPage from "./pages/BookDemo/BookDemoPage";

// import WhatsAppBusiness from "./pages/services/WhatsAppBusiness";

// import WhatsAppAutomation from "./pages/services/WhatsAppAutomation";

// import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";

// import DigitalMarketing from "./pages/services/DigitalMarketing";

// import QRSolutions from "./pages/services/QRSolutions";

// import BusinessGrowth from "./pages/services/BusinessGrowth";

function App() {

  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/industries" element={<IndustriesPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/realstate" element={<RealEstate />} />


        {/* <Route path="/blog" element={<BlogPage />} />

        <Route path="/case-studies" element={<CaseStudiesPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/book-demo" element={<BookDemoPage />} /> */}

        {/* Individual Services */}
{/* 
        <Route

          path="/services/whatsapp-business"

          element={<WhatsAppBusiness />}

        />

        <Route

          path="/services/whatsapp-automation"

          element={<WhatsAppAutomation />}

        />

        <Route

          path="/services/website-development"

          element={<WebsiteDevelopment />}

        />

        <Route

          path="/services/digital-marketing"

          element={<DigitalMarketing />}

        />

        <Route

          path="/services/qr-solutions"

          element={<QRSolutions />}

        />

        <Route

          path="/services/business-growth"

          element={<BusinessGrowth />}

        /> */}

      </Routes>
      <Footer/>

    </BrowserRouter>

  );

}

export default App;