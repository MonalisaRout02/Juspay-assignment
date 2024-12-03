
import "../../App.css";
import Card from './Card';
import LineChart from './LineChart'
import BarChart from './BarChart'
import Table from './Table';
import DonutChart from './DonutChart';
import LocationChart from './LocationChart';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const MainContent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div className="main-content">
          <h1 style={{paddingLeft:"20px",paddingTop:"20px"}} className={`text-semibold ${theme}`}>ecommerce</h1>
          <div className='main-charts'>
              {/* Row 1 */}
              <div className="row1">
                  <Card />
                  <BarChart />
              </div>
              {/* Row 2 */}
              <div className="row2">
                  <LineChart />
                  <LocationChart />
              </div>
              {/* Row 3 */}
              <div className="row3">
                  <Table />
                  <DonutChart />
              </div>
          </div>
      </div>
    );
  };
  

export default MainContent
