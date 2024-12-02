import SearchBar from "./SearchBar.jsx";
import "../../../App.css";
import { ToggleRightContext } from "../../ToggleContext/ToggleRightContext";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext.jsx";
import IconSet from "../../../../public/assets/IconSet.svg";
import IconSet_1 from "../../../../public/assets/IconSet-1.svg";
import IconSet_2 from "../../../../public/assets/IconSet-2.svg";
import IconSet3 from "../../../../public/assets/IconSet3.svg";
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
          <img src={IconSet} alt="theme-switcher" />
        </button>
        <button className="icon-button">
          <img src={IconSet_1} alt="clock-counter" />
        </button >
        <button className="icon-button">
          <img src= {IconSet_2} alt="bell" />
        </button>
        <button className="icon-button" onClick={handleRightToggle}>
          <img src={IconSet3} alt="sidebar" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarContainer;
