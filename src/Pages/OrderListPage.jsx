import RightPanel from "../Components/RightPanel/RightPanel";


import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";
import Navbar from "../Components/Navbar/index";
import { OrderList } from '../Components/Table/OrderList';
import { useContext, useState } from "react";
import { ThemeContext } from "../Components/ThemeContext/ThemeContext";


function OrderListPage() {
  const {theme} = useContext(ThemeContext)
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    
      <div className={`dash-board ${theme}`}>
        <Sidebar />
        <div className="main">
          <Navbar />
          <OrderList onSelectedRows={setSelectedRows}/>
      </div>
      <RightPanel />
    </div>
  );
}

export default OrderListPage;