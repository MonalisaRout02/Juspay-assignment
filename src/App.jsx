import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import OrderListPage from "./Pages/OrderListPage";
import { ToggleProvider } from "./Components/ToggleContext/ToggleContext";
import { ToggleRightProvider } from "./Components/ToggleContext/ToggleRightContext";
import { ThemeProvider } from './Components/ThemeContext/ThemeContext';

function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <ThemeProvider>
      <ToggleProvider>
        <ToggleRightProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/orderlist" Component={OrderListPage} />
            </Routes>
          </BrowserRouter>
        </ToggleRightProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
}

export default App;
