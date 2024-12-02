import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const ContactItem = ({img, name}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <li className='contact-item'>
      <img src={img} alt="icon"  />
      <div >
        <p className={`text-regular ${theme}`}>{name}</p>
        
      </div>
    </li>
  )
}

export default ContactItem
