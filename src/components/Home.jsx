import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Rocket,
} from "lucide-react";

import "./home.css";
import Hero from "./Hero";
import Services from "./Service";
import TrustedCompanies from "../Pages/TrustedCompanies";
import Industries from "../Pages/Industries";
import WhyChooseUs from "../Pages/WhyChooseUs";
import HowItWorks from "../Pages/HowItWorks";
import Pricing from "../Pages/Pricing";
import BusinessAudit from "../Pages/BusinessAudit";


export default function Home() {

  useEffect(() => {
    document.title = "GrowFlow Tech | Website Development & SEO Services";
  }, []);

  return (
    <>
    <Hero/>
    <TrustedCompanies/>
    <Services/>
    <Industries/>
    <WhyChooseUs/>
    <HowItWorks/>
    <Pricing/>
    <BusinessAudit/>
    
    </>

  );
}
