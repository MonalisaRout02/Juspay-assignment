import ChartContainer from "./ChartContainer";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const data = [
  { name: "Direct", value: 270.56 , color:"#1C1C1C"},
  { name: "Affiliate", value: 175.18 , color:"#95A5FD"},
  { name: "E-mail", value: 95.96 , color:"#B1E3FE" },
  { name: "Sponsored", value: 310.02, color:"#B9EDBD" },
];
const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

const CustomTooltip = ({ payload }) => {
 
  if (payload && payload.length) {
    const { name, value } = payload[0];
    const percentage = ((value / totalValue) * 100).toFixed(2);
    return (
      <div
        style={{
          background: "#1C1C1CCC",
          padding: "4px 8px",
          borderRadius: "8px",
        }}
      >
        <p
          className={`text-regular ${theme}`}
          style={{ color: "#fff" }}
        >{`${percentage}%`}</p>
      </div>
    );
  }
  return null;
};

const COLORS = ["#1C1C1C", "#95A5FD", "#B1E3FE", "#B9EDBD"];
const DonutChart = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <ChartContainer title="Total Sales">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "155px",
          margin: "0 auto",
        }}
      >
        <ResponsiveContainer height={120}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={60}
              innerRadius={40}
              paddingAngle={3}
              cornerRadius={5}
              startAngle={-60}
              endAngle={300}
            >
              {data.map((entry, index) => (
                <Cell
                  cornerRadius={6}
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="donutdata">
          <ul>
            {data.map((entry, index) => (
              <li key={index}>
                <div className="legend-item">
                  <span className="circle" style={{backgroundColor:entry.color}}></span>
                  <span className={`text-regular ${theme}`}>{entry.name}</span>
                </div>
                <span className={`text-regular ${theme}`}>${entry.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChartContainer>
  );
};

export default DonutChart;
