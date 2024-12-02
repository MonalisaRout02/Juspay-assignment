import React from "react";
import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const ChartContainer = ({ title, legend, children }) => {
  const { theme} = useContext(ThemeContext);
  return (
    <div className={`chart-container ${theme}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="chart-header">
          <h3 className={`text-semibold ${theme}`}>{title}</h3>
          {legend && (
            <ul>
              {legend.map((item, index) => {
                return (
                  <div className="week-info" key={index}>
                    <li>{item.name}</li>
                    <li>{item.value}</li>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className="chart-content">{children}</div>
      </div>
    </div>
  );
};

export default ChartContainer;
