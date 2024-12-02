import { useState } from "react";
import "../../App.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import Dropdown from "../../../public/assets/Dropdown.svg"

const DropdownItem = ({ icon, label, subItems }) => {
  const [open, setOpen] = useState(false);
  console.log(subItems);
  const {theme} = useContext(ThemeContext)
  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown-item">
      <div className="dropdown-header" onClick={onClickHandler}>
        <img style={{marginLeft :'0px'}} src={Dropdown} alt="dropdown-arrow" />
 
          <img style={{width:'20px', height:'20px', margin:'0px'}}src={icon} alt={label} />
          <p className={`text-regular ${theme}`}>{label}</p>
        
        </div>

        {open && (
          <div className="drop-down">
            {subItems.map((item, index) => (
              <div className="drop-down-itemss" key={index} >
                <p className={`text-regular ${theme}`}>{item}</p>
              </div>
            ))}
          </div>
        )}
     
    </div>
  );
};

export default DropdownItem;
