import { useContext } from "react";
import "../../../App.css";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

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
        <img src="/public/assets/IconSet3.svg" alt="theme-switcher" />
      </button>
      <button className="icon-button">
        <img src="/public/assets/Star.svg" alt="theme-switcher" />
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
