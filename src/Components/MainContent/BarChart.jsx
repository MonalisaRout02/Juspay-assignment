import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
import "../../App.css";

import ChartContainer from "./ChartContainer";

const CustomBarChart = () => {
  const {theme} = useContext(ThemeContext)
  const data = [
    { month: "Jan", actual: 18000000, projected: 22000000 },
    { month: "Feb", actual: 20800000, projected: 27000000 },
    { month: "Mar", actual: 19000000, projected: 23000000 },
    { month: "Apr", actual: 23000000, projected: 29000000 },
    { month: "May", actual: 15000000, projected: 19500000 },
    { month: "Jun", actual: 21500000, projected: 25500000 },
  ];

  const modifiedData = data.map((item) => ({
    month: item.month,
    actual: item.actual,
    projectedDifference: item.projected - item.actual,
  }));

  const formatYAxis = (value) => `${Math.round(value / 1000000)}M`;

  return (
    <ChartContainer title="Projections vs Actuals" > 
      <div style={{ width: 384, height: 168, paddingLeft: "0px" }}>
        <ResponsiveContainer>
          <BarChart
            data={modifiedData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barGap={5}
          >
            <CartesianGrid
              vertical={false}
              stroke={theme==="light"?"#1C1C1C66":"#FFFFFF66"}
              strokeDasharray="0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y + 20}
                  textAnchor="middle"
                  className={`axis-text ${theme}`}
                >
                  {payload.value}
                </text>
              )}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={({ x, y, payload }) => (
                <text
                  x={x - 20}
                  y={y + 5}
                  textAnchor="end"
                  className={`axis-text ${theme}`}
                >
                  {formatYAxis(payload.value)}
                </text>
              )}
              tickFormatter={formatYAxis}
              domain={[0, 30000000]}
              ticks={[0, 10000000, 20000000, 30000000]}
            />

            <Tooltip
              formatter={(value) => `${Math.round(value / 1000000)}M`}
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderRadius: 5,
                fontSize: 12,
              }}
            />

            <Bar
              dataKey="actual"
              fill="#A9C5DA"
              radius={[0, 0, 0, 0]}
              barSize={20}
              stackId="A"
            />

            <Bar
              dataKey="projectedDifference"
              fill="#CEDCE7"
              radius={[4, 4, 0, 0]}
              barSize={20}
              stackId="A"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
};

export default CustomBarChart;
