import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Shop from './Components/pages/Shop';
import AboutUs from './Components/pages/AboutUs';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
        <Route path="aboutus" element={ <AboutUs/> } />
      </Routes>
    </div>
  );
}
