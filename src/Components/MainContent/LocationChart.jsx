
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
import "../../App.css";
import ChartContainer from "./ChartContainer";
// Data for the revenue by location
const locationData = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 },
];

const LocationChart = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <ChartContainer title="Revenue by Location">
 <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "155px", margin: "0 auto" }}>

    

    {/* Map */}
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 200 }}
      style={{
        width: "100%",
        height: "82px", // Fixed height
      }}
    >
      <Geographies geography="https://unpkg.com/world-atlas@1/world/110m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#AAC4D3", outline: "none" },
                hover: { fill: "#8A9AB2", outline: "none" },
                pressed: { fill: "#ECEFF1", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {locationData.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={20} fill="#2c3e50" />
        </Marker>
      ))}
    </ComposableMap>

 
    <div style={{display:"flex" , flexDirection:"column" , gap:"16px"}}>
      {locationData.map(({ name, revenue }) => (
        <div key={name} >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className={`text-regular ${theme}`}>{name}</span>
            <span className={`text-regular ${theme}`}>{revenue}K</span>
          </div>
          <div
            style={{
              height: "2px",
              width: "100%",
              background: "#f0f0f0",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(revenue / 100) * 100}%`,
                background: "#AAC4D3",
                height: "100%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</ChartContainer>


  
  );
};

export default LocationChart;