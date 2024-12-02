import { useContext } from "react";
import "../../../App.css";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import iconSet3 from "../../../../public/assets/iconSet3.svg";
import star from "../../../../public/assets/Star.svg";

import {
  ToggleContext,
  ToggleProvider,
} from "../../ToggleContext/ToggleContext";

const IconBreadcrump = () => {
  const paths = [
    { name: "Dashboard", link: "/" },
    { name: "Default", link: "/default" },
  ];
  const { toggle, toggleSetter } = useContext(ToggleContext);

  const handleToggle = () => {
    toggleSetter(!toggle);
  };
  const {theme} = useContext(ThemeContext)

  return (
    <div className="icon-breadcrump">
      <button className="icon-button" onClick={handleToggle}>
        <img src = {iconSet3} alt="theme-switcher" />
      </button>
      <button className="icon-button">
        <img src= {star} alt="theme-switcher" />
      </button>

      <nav className="breadcrumb">
        {paths.map((path, index) => (
          <span key={index}>
            <a href={path.link} className={`breadcrumb-text ${theme}`}>{path.name}</a>
            {index < paths.length - 1 && <span className="separator"> / </span>}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default IconBreadcrump;
