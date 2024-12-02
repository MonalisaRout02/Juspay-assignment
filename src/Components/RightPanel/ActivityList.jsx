import ActivityItem from "./ActivityItem";
import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
import ProfileActivity from "../../../public/assets/ProfileActivity.svg";


const activities = [
  {
    id: 1,
    img: ProfileActivity,
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    img: ProfileActivity,
    text: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    img: ProfileActivity,
    text: "Submitted a bug",
    time: "12 Hours ago",
  },
  {
    id: 4,
    img:ProfileActivity,
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 5,
    img:ProfileActivity,
    text: "Deleted a page in Project X",
    time: "Today, 11:59 AM",
  },
  
 
 
];


const ActivityList = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className="activity-list">
      <h2 className={`h2 ${theme}`}>Activity</h2>
      <div className="line">
       
      </div>
        <ul>
          {activities.map((activity) => (
            <ActivityItem key={activity.id} {...activity} />
          ))}
        </ul>
    </section>
  );
};

export default ActivityList;
