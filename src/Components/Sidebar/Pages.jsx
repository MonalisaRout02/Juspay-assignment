import DropdownItem from "./DropdownItem";
import "../../App.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import account from "../../../public/assets/account.svg";
import UserProfile from "../../../public/assets/UserProfile.svg";
import corporate from "../../../public/assets/corporate.svg";
import blog from "../../../public/assets/blog.svg";
import social from "../../../public/assets/social.svg";
const pagesData = [
    {
      icon: {UserProfile}, // Path to the SVG for "User Profile"
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
      icon: {account}, // Path to the SVG for "Account"
      label: "Account",
      subItems: ["Settings", "Billing Info", "Security"],
    },
    {
      icon: {corporate}, // Path to the SVG for "Corporate"
      label: "Corporate",
      subItems: ["Teams", "Policies"],
    },
    {
      icon: {blog}, // Path to the SVG for "Blog"
      label: "Blog",
      subItems: ["Latest Posts", "Archive"],
    },
    {
      icon: {social}, // Path to the SVG for "Social"
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
