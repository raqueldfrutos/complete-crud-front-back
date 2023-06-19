import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import CarDetail from "./pages/CarDetail"


function App() {
  return <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/:id" element={<CarDetail />}/>
  </Routes>

}

export default App;
