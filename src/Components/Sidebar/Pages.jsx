import DropdownItem from "./DropdownItem";
import "../../App.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const pagesData = [
    {
      icon: "/public/assets/UserProfile.svg", // Path to the SVG for "User Profile"
      label: "User Profile",
      subItems: [
        "Overview",
        "Projects",
        "Campaigns",
        "Documents",
        "Followers",
      ],
    },
    {
      icon: "/public/assets/account.svg", // Path to the SVG for "Account"
      label: "Account",
      subItems: ["Settings", "Billing Info", "Security"],
    },
    {
      icon: "/public/assets/corporate.svg", // Path to the SVG for "Corporate"
      label: "Corporate",
      subItems: ["Teams", "Policies"],
    },
    {
      icon: "/public/assets/blog.svg", // Path to the SVG for "Blog"
      label: "Blog",
      subItems: ["Latest Posts", "Archive"],
    },
    {
      icon: "/public/assets/social.svg", // Path to the SVG for "Social"
      label: "Social",
      subItems: ["Messages", "Notifications"],
    },
  ];


const Pages = () => {
  const {theme} = useContext(ThemeContext)
  
  return (

         <div className="dashboards">
      <p className={`text-light ${theme}`}>Pages</p>
      <div className="dashboard-content">
        {pagesData.map((item, index) => (
          <li key={index}>
            <DropdownItem icon={item.icon} label={item.label} subItems={item.subItems} />
          </li>
        ))}
      </div>
    </div>
      
  )
}

export default Pages
