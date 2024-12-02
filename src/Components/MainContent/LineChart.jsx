import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../App.css";
import ChartContainer from "./ChartContainer";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
const CustomLineChart = () => {
  const {theme} = useContext(ThemeContext)
  const data = [
    { month: "Jan", previous: 10000000, current: 15000000 },
    { month: "Feb", previous: 18000000, current: 10000000 },
    { month: "Mar", previous: 16000000, current: 11000000 },
    { month: "Apr", previous: 13000000, current: 16000000 },
    { month: "May", previous: 14000000, current: 20000000 },
    { month: "Jun", previous: 20300000, current: 21000000 },

  ];

  const info = [
    { name: "Current Week", value: "$58,211" },
    { name: "Previous Week", value: "$68,768" }
  ]
  const lineData = data.map((item, index) =>
    index <= 3 ? item : { ...item, current: null } // Solid line until April
  );

  const dottedData = data.map((item, index) =>
    index >= 3 ? item : { ...item, current: null } // Dotted line from April onward
  );

  const months = data.map((item) => item.month);

  return (
    <ChartContainer title={
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{borderRight:"1px solid #1c1c1c33",padding:"6px"}}>Revenue</div>
        <div style={{ display: "flex", gap: "4px" ,alignItems:"center" }}>
          <div className="circle" style={{backgroundColor:"#1c1c1c"}}></div>
          <div style={{fontWeight:"400",marginRight:"4px"}}>{info[0].name}</div>
          <div>{info[0].value}</div>
        </div>
        <div style={{ display: "flex", gap: "4px" ,alignItems:"center" }}>
          <div className="circle" style={{backgroundColor:"#ADC7D8"}}></div>
          <div style={{fontWeight:"400",marginRight:"4px"}}>{info[1].name}</div>
          <div>{info[1].value}</div>
        </div>
        </div>}>
      <div style={{ width: 614, height: 232, paddingLeft: "0px" }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 0, right: -500, left: 0, bottom: 0 }}
          >
            <CartesianGrid 
              strokeDasharray="0" 
              stroke={theme==="light"?"#1C1C1C66":"#FFFFFF66"} 
              vertical={false} />

            {/* X-Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              ticks={months} // Explicitly define ticks to stop repetition
              tick={({ x, y, payload }) => (
                <text x={x} y={y + 20} textAnchor="middle" className={`axis-text ${theme}`}>
                  {payload.value}
                </text>
              )}
              padding={{ left: 10, right: 10 }}
            />

            {/* Y-Axis */}
            <YAxis
              domain={[0, 30000000]}
              ticks={[0, 10000000, 20000000, 30000000]}
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => (
                <text x={x - 20} y={y + 5} textAnchor="end" className={`axis-text ${theme}`}>
                  {`${payload.value / 1000000}M`}
                </text>
              )}
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value) => `$${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderRadius: 5,
                fontSize: 12,
              }}
            />

            {/* Solid Black Line */}
            <Line
              type="monotone"
              data={lineData}
              dataKey="current"
              stroke={theme==="light"?"#000":"#C6C7F8"}
              strokeWidth={3}
              dot={false}
              name="Current Week"
            />

            {/* Dotted Black Line */}
            <Line
              type="monotone"
              data={dottedData}
              dataKey="current"
              stroke={theme==="light"?"#000":"#C6C7F8"}
              strokeWidth={3}
              strokeDasharray="4 4"
              dot={false}
              name="Forecast"
            />

            {/* Previous Week Line */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#AAC4D3"
              strokeWidth={3}
              dot={false}
              name="Previous Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
};

export default CustomLineChart;
