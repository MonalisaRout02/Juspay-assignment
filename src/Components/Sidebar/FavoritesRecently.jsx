
import { useState } from "react";
import "../../App.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const FavoritesRecently = () => {
  const {theme} = useContext(ThemeContext)
  const [activeTab, setActiveTab] = useState("favorite");

  // Mock data for favorites and recent items
  const favorites = ["Overview", "Projects"];
  const recently = ["Dashboard", "User Profile", "Analytics"];

  const handleTabClick = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };

  return (
    <div className="favourites-recently">
      <div className="tabs">
        <span className={`tab-text${activeTab === 'favorite' ? '-active' : ''}`}
         onClick={() => handleTabClick("favorite")}>
          <p>Favorites</p>
        </span>
        <span className={`tab-text${activeTab === 'recently' ? '-active': ''}`}
        onClick={() => handleTabClick("recently")}>
          <p>Recently</p>
        </span>
      </div>
      <div className="tab-content">
        {activeTab === "favorite" ? (
          <ul>
            {favorites.map((item, index) => (
              <li  className={`text-regular ${theme}`} key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {recently.map((item, index) => (
              <li  className={`text-regular ${theme}`} key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavoritesRecently;
