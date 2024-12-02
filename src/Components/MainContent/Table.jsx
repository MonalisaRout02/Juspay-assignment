import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

const Table = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context
  const data = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: "82",
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: "37",
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: "64",
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: "184",
      amount: "$3,680.00",
    },
    {
      name: "Marco Shoes",
      price: "$79.49",
      quantity: "64",
      amount: "$1,965.81",
    },
  ];

  return (
    <div className={`table-component ${theme}`}>
      <p className={`text-semibold ${theme}`}>Top Selling Products</p>
      <table>
        <thead>
          <tr>
            <th className={`table-header ${theme}`}>Name</th>
            <th className={`table-header ${theme}`}>Price</th>
            <th className={`table-header ${theme}`}>Quantity</th>
            <th className={`table-header ${theme}`}>Amount</th>
          </tr>
        </thead>
        <tr><td colSpan="4"><hr className={`hr ${theme}`} /></td></tr>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`table-row ${theme}`}>
              <td className={`table-data ${theme}`}>{row.name}</td>
              <td className={`table-data ${theme}`}>{row.price}</td>
              <td className={`table-data ${theme}`}>{row.quantity}</td>
              <td className={`table-data ${theme}`}>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
