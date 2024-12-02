import SearchBar from "./SearchBar.jsx";
import "../../../App.css";
import { ToggleRightContext } from "../../ToggleContext/ToggleRightContext";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext.jsx";

const SearchBarContainer = () => {

  const { toggleRight, toggleSetterRight } = useContext(ToggleRightContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleRightToggle = () => {
    toggleSetterRight(!toggleRight);
  }

  return (
    <div className="search-bar-container">
      <SearchBar />
      <div className="container-items">
        <button className="icon-button" onClick={toggleTheme}>
          <img src="/public/assets/IconSet.svg" alt="theme-switcher" />
        </button>
        <button className="icon-button">
          <img src="/public/assets/IconSet-1.svg" alt="clock-counter" />
        </button >
        <button className="icon-button">
          <img src="/public/assets/IconSet-2.svg" alt="bell" />
        </button>
        <button className="icon-button" onClick={handleRightToggle}>
          <img src="/public/assets/IconSet3.svg" alt="sidebar" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarContainer;
