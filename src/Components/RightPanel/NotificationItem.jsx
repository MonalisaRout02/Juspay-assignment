import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const NotificationItem = ({ text, time, icon }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <li className="notification-item">
      <img src={icon} alt="icon"  />
      <div >
        <p className={`text-regular ${theme}`}>{text}</p>
        <span className={`text-small ${theme}`} >{time}</span>
      </div>
    </li>
  );
};

export default NotificationItem;
