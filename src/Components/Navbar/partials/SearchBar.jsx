import "../../../App.css";
import { ThemeContext } from '../..//ThemeContext/ThemeContext';
import { useContext } from "react";
import Search from "../../../../public/assets/Search.svg";
import Command from "../../../../public/assets/Command.svg";
const SearchBar = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`search-bar ${theme}`}>
      <div>
        <img
          className="search-bar-img"
          src={Search}
          alt="search-icon"
        />
        <input type="text" placeholder="Search" name="" />
      </div>
      <img
        className="command-icon"
        src={Command}
        alt="Command"
      />
    </div>
  );
};

export default SearchBar;
