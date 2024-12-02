import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext/ToggleContext"; // Correct named import
import "../../App.css";
import Dashboards from './Dashboards';
import FavoritesRecently from './FavoritesRecently';
import Pages from './Pages';
import { ThemeContext } from "../ThemeContext/ThemeContext";


const Sidebar = () => {
  const { toggle } = useContext(ToggleContext); // Accessing ToggleContext here
  const {theme} = useContext(ThemeContext)
  return (
    <>
      {toggle && (
        <div className='side-bar'>
          <div className="profile">
            <img src="public/assets/ByeWind.svg" alt="profile" />
            <p className={`text-regular ${theme}`}>ByeWind</p>
          </div>
          <FavoritesRecently />
          <Dashboards />
          <Pages />
        </div>
      )}
    </>
  );
};

export default Sidebar;
