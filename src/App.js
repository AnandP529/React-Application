import React from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/Home";
import Employees from "./Components/employees/Employees";
import Stocks from "./Components/stocks/Stocks";
import About from "./Components/about/About";
import { BrowserRouter as Router, Routes, Route, useParams ,useNavigate } from 'react-router-dom';
import EmployeeDetails from "./Components/employees/EmployeeDetails";
import StockDetails from "./Components/stocks/Stockdetails";

function EmployeesWrapper() {
  const navigate = useNavigate();
  return <Employees navigate={navigate} />;
}
// ✅ Wrapper OUTSIDE class
function EmployeeDetailsWrapper() {
  const params = useParams();
  return <EmployeeDetails params={params} />;
}

function StocksWrapper(){
  const navigate=useNavigate();
  return<Stocks navigate={navigate} />;
}
function StockDetailsWrapper(){
  const params =useParams();
  return<StockDetails params={params} />;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeesWrapper />} />
            <Route path="/employees/:id" element={<EmployeeDetailsWrapper />} />
            <Route path="/stocks" element={<StocksWrapper />} />
            <Route path="/stocks/:id" element = {<StockDetailsWrapper/>} />
            <Route path="/about" element={<About />} />
          </Routes>

        </Router>
      </div>
    );
  }
}

export default App;