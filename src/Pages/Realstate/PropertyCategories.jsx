import "./PropertyCategories.css";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaHotel,
  FaTree,
  FaStore,
  FaCity,
  FaSchool,
} from "react-icons/fa";

const categories = [
  {
    id:1,
    icon:<FaHome/>,
    title:"Apartments",
    properties:"245 Properties"
  },
  {
    id:2,
    icon:<FaBuilding/>,
    title:"Luxury Villas",
    properties:"95 Properties"
  },
  {
    id:3,
    icon:<FaWarehouse/>,
    title:"Commercial Shops",
    properties:"180 Properties"
  },
  {
    id:4,
    icon:<FaHotel/>,
    title:"Office Spaces",
    properties:"75 Properties"
  },
  {
    id:5,
    icon:<FaTree/>,
    title:"Farm House",
    properties:"40 Properties"
  },
  {
    id:6,
    icon:<FaStore/>,
    title:"Retail Space",
    properties:"130 Properties"
  },
  {
    id:7,
    icon:<FaCity/>,
    title:"Residential Plots",
    properties:"320 Properties"
  },
  {
    id:8,
    icon:<FaSchool/>,
    title:"Industrial Land",
    properties:"58 Properties"
  }
];

const PropertyCategories = () => {

  return (

<section className="categories">

<div className="categoryHeading">

<span>Browse Categories</span>

<h2>Find Property By Category</h2>

<p>

Explore premium residential and commercial
properties across Indore.

</p>

</div>

<div className="categoryGrid">

{

categories.map((item,index)=>(

<motion.div

key={item.id}

className="categoryCard"

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{

duration:.6,

delay:index*.1

}}

viewport={{once:true}}

whileHover={{

y:-10,

scale:1.03

}}

>

<div className="categoryIcon">

{item.icon}

</div>

<h3>{item.title}</h3>

<p>{item.properties}</p>

<button>

Explore →

</button>

</motion.div>

))

}

</div>

</section>

  );

};

export default PropertyCategories;