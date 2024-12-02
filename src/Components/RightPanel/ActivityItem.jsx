import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";


const ActivityItem = ({text, time, img}) => {
  const { theme} = useContext(ThemeContext);
  return (
    <li className='activity-item'>
      
      <div className='img-box'>
        <img className="activity-img"src={img} alt="icon"  />
      </div>
      <div className='activity-text'>
        <p className={`text-regular ${theme}`}>{text}</p>
        <span className={`text-small ${theme}`} >{time}</span>
      </div>
    </li>
  )
}

export default ActivityItem
