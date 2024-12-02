import DropdownItem from "./DropdownItem";
import "../../App.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import account from "../../../public/assets/account.svg";
import UserProfile from "../../../public/assets/UserProfile.svg";
import corporate from "../../../public/assets/Corporate.svg";
import blog from "../../../public/assets/Blog.svg";
import social from "../../../public/assets/Social.svg";

const pagesData = [
  {
    icon: UserProfile, // No curly braces
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
    icon: account, // No curly braces
    label: "Account",
    subItems: ["Settings", "Billing Info", "Security"],
  },
  {
    icon: corporate, // No curly braces
    label: "Corporate",
    subItems: ["Teams", "Policies"],
  },
  {
    icon: blog, // No curly braces
    label: "Blog",
    subItems: ["Latest Posts", "Archive"],
  },
  {
    icon: social, // No curly braces
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
