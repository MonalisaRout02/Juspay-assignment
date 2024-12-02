import RightPanel from "../Components/RightPanel/RightPanel";
import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";
import Navbar from "../Components/Navbar/index";
import { OrderList } from '../Components/Table/OrderList';
import { useState } from "react";
import { ThemeContext } from '../Components/ThemeContext/ThemeContext';
import { useContext } from "react";

function HomePage() {
  const [selectedRows, setSelectedRows] = useState([]);
  const {theme} = useContext(ThemeContext)
  return (
    
      <div className={`dash-board ${theme}`}>
        <Sidebar />
        <div className="main">
          <Navbar />
          <MainContent />
          {/* <OrderList onSelectedRows={setSelectedRows}/> */}
      </div>
      <RightPanel />

   
    

    </div>
  );
}

export default HomePage;
