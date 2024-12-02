import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const Card = () => {
  const metrics = [
    {
      name: "Customers",
      value: "3,781",
      change: "+11.01%",
      color: "#E3F5FF",
      arrow: "/public/assets/ArrowRise.svg",
    },
    {
      name: "Orders",
      value: "1,219",
      change: "-0.03%",
      color: "#F7F9FB",
      arrow: "/public/assets/Arrowdown.svg",
    },
    {
      name: "Revenue",
      value: "$695",
      change: "+15.03%",
      color: "#F7F9FB",
      arrow: "/public/assets/ArrowRise.svg",
    },
    {
      name: "Growth",
      value: "30.1%",
      change: "+6.08%",
      color: "#E5ECF6",
      arrow: "/public/assets/ArrowRise.svg",
    },
  ];
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme)
  
  return (
    <div className="card-container">
      {metrics.map((item, index) => (
        <div
          className={`card ${theme}`}
          key={index}
          style={{ backgroundColor: item.color }}
        >
          <p className={`text-semibold ${theme}`}>{item.name}</p>
          <div className="card-content">
            <p className='card-value'>{item.value}</p>
            <div className="change-arrow">
              <p className='card-change'>{item.change}</p>
              <img src={item.arrow} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
