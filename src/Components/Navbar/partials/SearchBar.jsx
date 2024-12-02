import "../../../App.css";
import { ThemeContext } from '../..//ThemeContext/ThemeContext';
import { useContext } from "react";
const SearchBar = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`search-bar ${theme}`}>
      <div>
        <img
          className="search-bar-img"
          src="public/assets/Search.svg"
          alt="search-icon"
        />
        <input type="text" placeholder="Search" name="" />
      </div>
      <img
        className="command-icon"
        src="public/assets/Command.svg"
        alt="Command"
      />
    </div>
  );
};

export default SearchBar;
