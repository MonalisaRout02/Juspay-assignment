import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
import NotificationItem from "./NotificationItem";

const notifications = [
  {
    id: 1,
    icon: "/public/assets/BugIcon.svg",
    text: "You have a bug that needs to be fixed",
    time: "Just now",
  },
  {
    id: 2,
    icon: "/public/assets/UserIcon.svg",
    text: "New user registered",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: "/public/assets/BugIcon.svg",
    text: "You have a bug that needs to be fixed",
    time: "59 minutes ago",
  },
  {
    id: 4,
    icon: "/public/assets/SubscribeIcon.svg",
    text: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const NotificationList = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className="notification-list">
      <h2 className={`h2 ${theme}`}>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </ul>
    </section>
  );
};

export default NotificationList;