import DropdownItem from "./DropdownItem";
import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const dashboardData = [
  {
    icon: "assets/eCommerce.svg", // Corrected path
    label: "eCommerce",
    subItems: ["Orders", "Products", "Customers"],
  },
  {
    icon: "assets/Projects.svg", // Corrected path
    label: "Projects",
    subItems: ["Ongoing", "Completed", "Archived"],
  },
  {
    icon: "assets/BookOpen.svg", // Corrected path
    label: "Online Courses",
    subItems: ["My Courses", "Explore", "Wishlist"],
  },
];

const Dashboards = () => {
  const {theme} = useContext(ThemeContext)
  const navigate = useNavigate();
  return (
    <div className="dashboards">
      <p className={`text-light ${theme}`}>Dashboards</p>
      <div className="dashboard-content">
        <li>
          <div className="first-item" style={{cursor:"pointer"}}  onClick={ () => navigate("/")}>
            <img src="assets/ChartPieSlice.svg" alt="default" />
            <p className={`text-regular ${theme}`}>Default</p>
          </div>
        
          {/* <button > */}
          
          
          <div onClick={() => navigate("/orderlist")} className="first-item" style={{cursor:"pointer"}}  >
            <img src="assets/orderlist.svg" alt="default" />
            <p className={`text-regular ${theme}`}>orderlist</p>
            </div>
         


          {/* </button> */}
          
         

         
        </li>
        {dashboardData.map((item, index) => (
          <li key={index}>
            <DropdownItem icon={item.icon} label={item.label} subItems={item.subItems} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboards;
